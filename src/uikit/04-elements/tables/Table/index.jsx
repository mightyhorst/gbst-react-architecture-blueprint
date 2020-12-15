import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import overlayFactory from 'react-bootstrap-table2-overlay';

import PaginationHandler from 'react-bootstrap-table2-paginator/lib/src/pagination-handler';
import standaloneAdapter from 'react-bootstrap-table2-paginator/lib/src/standalone-adapter';
import paginationListAdapter from 'react-bootstrap-table2-paginator/lib/src/pagination-list-adapter';
import sizePerPageDropdownAdapter from 'react-bootstrap-table2-paginator/lib/src/size-per-page-dropdown-adapter';
import paginationTotalAdapter from 'react-bootstrap-table2-paginator/lib/src/pagination-total-adapter';

import Base from '../../other/Base';
import Pagination from '../../navigation/Pagination';
import LoadingSpinner from '../../display/LoadingSpinner';
import Full from '../../display/Full';
import DropdownButton from '../../buttons/DropdownButton';
import MenuItem from '../../navigation/MenuItem';
import InputNumeric from '../../forms/InputNumeric';

import SVGIcon from '../../display/SVGIcon';

import { isFunction } from '../../../../utils/Comparison';

const TABLE_MODE_BORDERS = 'borders';
const TABLE_MODE_NO_BORDERS = 'no-borders';
const TABLE_MODE_NO_BORDERS_INDENTED = 'no-borders-indented';

class Table extends Base {
  static componentName = 'Table';

  constructor(props) {
    super(props);

    this.node = React.createRef();

    this.onExpandChildRows = this.onExpandChildRows.bind(this);
    this.onExpandAllChildRows = this.onExpandAllChildRows.bind(this);
    this.renderExpandHeaderColumn = this.renderExpandHeaderColumn.bind(this);
    this.renderExpandColumn = this.renderExpandColumn.bind(this);
    this.expandRowTimeouts = {};

    this.pageListRenderer = this.pageListRenderer.bind(this);
    this.pageButtonRenderer = this.pageButtonRenderer.bind(this);
    this.sizePerPageRenderer = this.sizePerPageRenderer.bind(this);
    this.totalRenderer = this.totalRenderer.bind(this);

    this.renderProvider = this.renderProvider.bind(this);
    this.renderWrapper = this.renderWrapper.bind(this);

    this.renderNoDataOverlay = this.renderNoDataOverlay.bind(this);
  }

  componentDidMount() {
    const { loading } = this.props;

    // Adjust the loading overlay to not render incorrectly when there are no items in the table
    if (this.node && loading) {
      // eslint-disable-next-line react/no-find-dom-node
      const node = ReactDOM.findDOMNode(this.node.current);

      const overlay = node.querySelector('._loading_overlay_overlay');
      const tbody = node.querySelector('tbody');

      if (overlay && tbody) {
        const style = window.getComputedStyle(tbody);
        let { height } = style;
        height = parseFloat(height.replace('px', ''));

        if (height < 100) {
          height = 100;
        }

        overlay.style.height = `${height}px`;
      }
    }
  }

  componentWillUnmount() {
    if (this.expandRowTimeouts) {
      Object.keys(this.expandRowTimeouts).forEach(key => {
        clearTimeout(key);
      });
    }
  }

  /* When an individual row is expanded, process the expanding row to make sure
   * everything is aligned correctly, taking into consideration the expand icon
   * column. */
  onExpandChildRows(...props) {
    const { expandRowChildren, expandRowRenderDelay } = this.props;
    const { onExpand } = expandRowChildren;
    const [, expand, , e] = props;

    const clickedElement = e.target;

    if (clickedElement && expand) {
      const clickedRow = clickedElement.closest('tr');

      const timeout = setTimeout(() => {
        delete this.expandRowTimeouts[timeout];
        const expandedChildrenRow = clickedRow.nextSibling;

        this.updateExpandedRowLayout(expandedChildrenRow);
      }, expandRowRenderDelay);

      this.expandRowTimeouts[timeout] = true;
    }

    if (onExpand) {
      onExpand(...props);
    }
  }

  /* When all expandable table rows are expanded, process the expanding rows to
   * make sure everything is aligned correctly, taking into consideration the
   * expand icon column. */
  onExpandAllChildRows(...props) {
    const { expandRowChildren, expandRowRenderDelay } = this.props;
    const { onExpandAll } = expandRowChildren;
    const [expand, , e] = props;

    const clickedElement = e.target;

    if (clickedElement && expand) {
      const parentTable = clickedElement.closest('table');

      const timeout = setTimeout(() => {
        delete this.expandRowTimeouts[timeout];

        const expandedRows = Array.from(
          parentTable.querySelectorAll('tbody > tr > .reset-expansion-style'),
        );

        expandedRows.forEach(row => this.updateExpandedRowLayout(row));
      }, expandRowRenderDelay);

      this.expandRowTimeouts[timeout] = true;
    }

    if (onExpandAll) {
      onExpandAll(...props);
    }
  }

  /* When expanding rows, make sure that the width of the internal table takes
   * into consideration the expanding icon. */
  updateExpandedRowLayout(expandingRow) {
    if (!this.node || !this.node.current) {
      return;
    }

    const { expandRowChildren } = this.props;
    const { showExpandColumn, expandColumnPosition } = expandRowChildren;

    if (showExpandColumn) {
      const wrapper = this.node.current;
      const expandCell = wrapper.querySelector('.expand-cell');
      const expandedChildrenWrapper = expandingRow.querySelector('.row-expansion-style');

      const expandCellPadding = expandCell.clientWidth;
      expandedChildrenWrapper.style.paddingLeft = '';
      expandedChildrenWrapper.style.paddingRight = '';

      if (expandColumnPosition === 'right') {
        expandedChildrenWrapper.style.paddingRight = `${expandCellPadding}px`;
      } else {
        expandedChildrenWrapper.style.paddingLeft = `${expandCellPadding}px`;
      }
    }
  }

  /* Render icon in the header for an expandable row. */
  renderExpandHeaderColumn(props) {
    const { isAnyExpands } = props;
    const { expandRowIconHeight, expandRowChildrenShowHeader } = this.props;

    if (!expandRowChildrenShowHeader) {
      return null;
    }

    if (isAnyExpands) {
      return <SVGIcon icon="arrowCircleUp" height={expandRowIconHeight} />;
    }

    return <SVGIcon icon="arrowCircleDown" height={expandRowIconHeight} />;
  }

  /* Render an icon for an expandable row. */
  renderExpandColumn(props) {
    const { expanded, expandable } = props;
    const { expandRowIconHeight } = this.props;

    if (!expandable) {
      return null;
    }

    if (expanded) {
      return <SVGIcon icon="arrowCircleUp" height={expandRowIconHeight} />;
    }

    return <SVGIcon icon="arrowCircleDown" height={expandRowIconHeight} />;
  }

  /* Render a pagination list, when paging. */
  pageListRenderer({ pages, onPageChange, pagination }) {
    const { paginationInput, dynamicPaginationTypeLimit } = this.props;

    const {
      page,
      pageStartIndex,
      dataSize,
      sizePerPage,
      lastPageText,
      lastPageTitle,
      nextPageText,
      nextPageTitle,
      firstPageText,
      firstPageTitle,
      prePageText,
      prePageTitle,
      hidePageListOnlyOnePage,
    } = pagination;

    const totalRecords = (dataSize || 0) - (pageStartIndex || 1) + 1;
    const maxPages = Math.ceil(totalRecords / sizePerPage);

    if (hidePageListOnlyOnePage && maxPages <= 1) {
      return null;
    }

    if (paginationInput || (dynamicPaginationTypeLimit && maxPages > dynamicPaginationTypeLimit)) {
      const handleChange = e => {
        e.preventDefault();
        let { value } = e.currentTarget;

        if (value < 1) {
          value = 1;
        } else if (value > maxPages) {
          value = maxPages;
        }

        onPageChange(value);
      };

      return (
        <div className="pagination-wrapper pagination-input">
          <Pagination>
            <Pagination.First
              disabled={page === 1}
              title={firstPageTitle}
              onClick={() => onPageChange(firstPageText)}
            >
              {firstPageText}
            </Pagination.First>

            <Pagination.Prev
              disabled={page === 1}
              title={prePageTitle}
              onClick={() => onPageChange(prePageText)}
            >
              {prePageText}
            </Pagination.Prev>

            <li className="inputs">
              <span className="pageLabel">Page</span>

              <span className="input">
                <InputNumeric
                  value={page}
                  min={1}
                  max={maxPages}
                  minDecimalPlaces={0}
                  maxDecimalPlaces={0}
                  allowDecimals={false}
                  allowNegatives={false}
                  onBlur={handleChange}
                />
              </span>

              <span className="of">of</span>
              <span className="total">{maxPages}</span>
            </li>

            <Pagination.Next
              disabled={page === maxPages}
              title={nextPageTitle}
              onClick={() => onPageChange(nextPageText)}
            >
              {nextPageText}
            </Pagination.Next>

            <Pagination.Last
              disabled={page === maxPages}
              title={lastPageTitle}
              onClick={() => onPageChange(lastPageText)}
            >
              {lastPageText}
            </Pagination.Last>
          </Pagination>
        </div>
      );
    }

    return (
      <div className="pagination-wrapper">
        <Pagination>{pages.map(p => this.pageButtonRenderer({ ...p, onPageChange }))}</Pagination>
      </div>
    );
  }

  /* Render a specific page button, for a pagination list, when paging. */
  pageButtonRenderer({ page, active, disabled, title, onPageChange }) {
    const { paginationOptions } = this.props;
    const { firstPageText, prePageText, nextPageText, lastPageText } = paginationOptions;

    const handleClick = e => {
      e.preventDefault();
      onPageChange(page);
    };

    const props = {
      href: '#',
      disabled,
      title,
      key: page,
      onClick: handleClick,
    };

    if (page === firstPageText) {
      return <Pagination.First {...props}>{page}</Pagination.First>;
    }

    if (page === prePageText) {
      return <Pagination.Prev {...props}>{page}</Pagination.Prev>;
    }

    if (page === nextPageText) {
      return <Pagination.Next {...props}>{page}</Pagination.Next>;
    }

    if (page === lastPageText) {
      return <Pagination.Last {...props}>{page}</Pagination.Last>;
    }

    return (
      <Pagination.Item active={active} {...props}>
        {page}
      </Pagination.Item>
    );
  }

  /* Render a control to allow the user to change how many records per page they
  are viewing, when paging. */
  sizePerPageRenderer({ options, currSizePerPage, onSizePerPageChange, sizePerPageLabel }) {
    const { id } = this.props;

    return (
      <div className="sizePerPage-wrapper">
        <span className="sizePerPage-label">{sizePerPageLabel}</span>
        <DropdownButton id={`${id}-sizePerPage`} title={currSizePerPage}>
          {options.map(option => (
            <MenuItem
              key={option.page}
              active={Number(currSizePerPage) === Number(option.page)}
              onClick={() => onSizePerPageChange(option.page)}
            >
              {option.text}
            </MenuItem>
          ))}
        </DropdownButton>
      </div>
    );
  }

  /* Render how many records the user is viewing when paging. */
  totalRenderer({ from, to, dataSize, totalRenderer }) {
    if (totalRenderer) {
      return totalRenderer({ from, to, dataSize });
    }

    const { paginationOptions } = this.props;
    const { totalLabel } = paginationOptions;

    let label = (totalLabel || '').replace('{from}', from);
    label = label.replace('{to}', to);
    label = label.replace('{dataSize}', dataSize);

    return <div className="total-wrapper">{label}</div>;
  }

  parsePaginationOptions() {
    const {
      paginate,
      pagination,
      page,
      paginationSize,
      sizePerPage,
      sizePerPageList,
      totalSize,
      showTotal,
      hidePageListOnlyOnePage,
      paginationOptions,
      data,
    } = this.props;

    if (pagination) {
      return pagination;
    }

    if (paginate) {
      const options = paginationOptions;
      options.custom = true;
      options.page = page;
      options.paginationSize = paginationSize;
      options.sizePerPage = sizePerPage;
      options.sizePerPageList = sizePerPageList;
      options.showTotal = showTotal;
      options.totalSize = totalSize;

      if ((options.totalSize === null || options.totalSize === undefined) && data && data.length) {
        options.totalSize = data.length;
      }

      if (
        options.hidePageListOnlyOnePage === null ||
        options.hidePageListOnlyOnePage === undefined
      ) {
        options.hidePageListOnlyOnePage = hidePageListOnlyOnePage;
      }

      return paginationFactory(options);
    }

    return null;
  }

  // Render our custom pagination
  renderProvider({ pagination, children }) {
    const { paginate, showSizePerPageList, showTotal } = this.props;

    const PaginationRenderer = this.pageListRenderer;

    const SizePerPage = standaloneAdapter(
      PaginationHandler(sizePerPageDropdownAdapter(this.sizePerPageRenderer)),
    );

    const PaginationTotal = standaloneAdapter(paginationTotalAdapter(this.totalRenderer));

    return (
      <PaginationProvider pagination={pagination}>
        {({ paginationProps, paginationTableProps }) => {
          const PaginationList = standaloneAdapter(
            PaginationHandler(
              paginationListAdapter(childProps => (
                <PaginationRenderer {...childProps} pagination={{ ...paginationProps }} />
              )),
            ),
          );

          return (
            <>
              {React.Children.map(children, child =>
                React.cloneElement(child, {
                  ...paginationTableProps,
                }),
              )}

              {paginate ? (
                <div className="table-footer-wrapper">
                  {showSizePerPageList ? <SizePerPage {...paginationProps} /> : null}
                  <PaginationList {...paginationProps} />
                  {paginate && showTotal ? <PaginationTotal {...paginationProps} /> : null}
                </div>
              ) : null}
            </>
          );
        }}
      </PaginationProvider>
    );
  }

  // Grab a wrapper depending on whether or not we have custom pagination
  renderWrapper({ pagination, children }) {
    const Provider = this.renderProvider;
    const { pagination: deprecatedPagination } = this.props;

    if (pagination && !deprecatedPagination) {
      return <Provider pagination={pagination}>{children}</Provider>;
    }

    return <>{children}</>;
  }

  // Render a message when no data is present
  renderNoDataOverlay() {
    const { showMessageWhenEmpty, whenEmptyLabel, loading } = this.props;

    if (showMessageWhenEmpty && !loading) {
      return <Full>{whenEmptyLabel}</Full>;
    }

    return <></>;
  }

  // Show a loading state for the table
  static renderLoadingOverlay() {
    const overlay = overlayFactory({
      spinner: <LoadingSpinner />,
    });

    return overlay;
  }

  render() {
    const {
      className,
      fixed,
      responsive,
      bordered: providedBordered,
      mode: providedMode,
      valign,
      data,
      columns: providedColumns,
      paginate,
      pagination: deprecatedPagination,
      page,
      paginationSize,
      sizePerPageList,
      showSizePerPageList,
      showTotal,
      paginationOptions,
      keyField,
      overlay,
      noDataIndication,
      loading,
      expandRow: providedExpandRow,
      expandRowChildren,
      expandRowChildrenShowHeader,
      ...props
    } = this.props;

    const columns = [];

    providedColumns.forEach(c => {
      const col = { ...c };
      if (col.headerHidden) {
        if (!col.headerClasses || col.headerClasses.indexOf('.hidden') === -1) {
          col.headerClasses = classNames(col.headerClasses, 'hidden');
        }
      }

      const existing = col.attrs;
      col.attrs = (cell, row, ...args) => {
        const obj = (isFunction(existing) ? existing(cell, row, ...args) : existing) || {};

        if (!obj.key) {
          obj.key = `${row[keyField]}-${col.dataField}-${row[col.dataField]}`;
        }

        return obj;
      };

      col.formatExtraData = col.formatExtraData || {};

      if (!col.formatExtraData.tableProps) {
        col.formatExtraData.tableProps = this.props;
      }

      if (col.footerFormatter) {
        const formatter = col.footerFormatter;
        col.footerFormatter = (column, colIndex) => formatter(column, colIndex, this.props);
      }

      if (col.headerFormatter) {
        const formatter = col.headerFormatter;

        // Formatters won't cooperate
        // eslint-disable-next-line max-len
        col.headerFormatter = (column, colIndex, components) =>
          formatter(column, colIndex, this.props, components);
      }

      if (col.sectionBreak) {
        col.classes = classNames(col.classes, 'sectionBreak');
        col.headerClasses = classNames(col.headerClasses, 'sectionBreak');
      }

      columns.push(col);
    });

    const expandRow = expandRowChildren ? { ...expandRowChildren } : providedExpandRow || {};
    const { showExpandColumn, expandColumnPosition } = expandRow;

    if (expandRowChildren) {
      expandRow.onExpand = this.onExpandChildRows;
      expandRow.onExpandAll = this.onExpandAllChildRows;

      if (!expandRow.nonExpandable) {
        expandRow.nonExpandable = data
          .map(x => (!x.children || x.children.length === 0 ? x[keyField] : null))
          .filter(x => x !== null);
      }
    }

    expandRow.expandHeaderColumnRenderer =
      expandRow.expandHeaderColumnRenderer || this.renderExpandHeaderColumn;
    expandRow.expandColumnRenderer = expandRow.expandColumnRenderer || this.renderExpandColumn;

    const pagination = this.parsePaginationOptions();
    const Wrapper = this.renderWrapper;

    let mode = providedMode;
    let bordered = mode === TABLE_MODE_BORDERS;

    // Handle deprecated property
    if (providedBordered === true || providedBordered === false) {
      bordered = providedBordered;
      mode = providedBordered ? TABLE_MODE_BORDERS : TABLE_MODE_NO_BORDERS;
    }

    return (
      <div
        className={classNames(
          'table-wrapper',
          loading ? 'loading' : null,
          responsive ? 'responsive' : null,
        )}
        data-component-name="Table"
        ref={this.node}
      >
        <Wrapper pagination={pagination}>
          <BootstrapTable
            classes={classNames(
              'Table',
              className,
              fixed ? 'fixed' : null,
              valign ? 'valign' : null,
              `mode-${mode}`,
              expandRowChildren ? 'expandable-rows' : null,
              expandRowChildren && expandRowChildrenShowHeader ? 'has-expand-row-header' : null,
              showExpandColumn && expandColumnPosition === 'right' ? 'expand-col-right' : null,
              showExpandColumn && expandColumnPosition !== 'right' ? 'expand-col-left' : null,
            )}
            pagination={pagination}
            data={data}
            columns={columns}
            keyField={keyField}
            noDataIndication={noDataIndication || this.renderNoDataOverlay}
            overlay={overlay || (loading && Table.renderLoadingOverlay()) || null}
            loading={loading}
            expandRow={expandRow}
            bordered={bordered}
            {...props}
          />
        </Wrapper>
      </div>
    );
  }
}

Table.propTypes = {
  /** The id of the table that can be used to identify any form elements for accessibility. */
  id: isRequiredForA11y(PropTypes.string),
  /** @deprecated Use `mode="borders"` or `mode="no-borders"` instead. Whether left and right borders should be applied to the table. */
  bordered: PropTypes.bool,
  /** The style of table to render. */
  mode: PropTypes.oneOf([
    TABLE_MODE_BORDERS,
    TABLE_MODE_NO_BORDERS,
    TABLE_MODE_NO_BORDERS_INDENTED,
  ]),
  /** Additional class to add to the Table element */
  className: PropTypes.string,
  /** Define which column is unique */
  keyField: PropTypes.string,
  /** Provides data for your table */
  data: PropTypes.arrayOf(PropTypes.object),
  /** Adds a horizontal scrollbar when required due to screen size */
  responsive: PropTypes.bool,
  /** Whether or not the columns in the table should all be of equal size or
   * obey size settings. */
  fixed: PropTypes.bool,
  /** Vertically middle align all td elements */
  valign: PropTypes.bool,
  /** Definition of required props
   * (for optional props see https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/column-props.html#optional) */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      /** Specify what field should be applied on this column.
        You can use dataField with dot(.) to describe nested objects */
      dataField: PropTypes.string.required,
      /** Specify the column text. If your header is not only text or
        you want to customize the header column, please use headerFormatter */
      text: PropTypes.string.required,
      /** Specify that this cell begins a new section, which will render a
       * more defined border to the left, even in a borderless table. */
      sectionBreak: PropTypes.bool,
    }),
  ),

  /** Whether to enable pagination. */
  paginate: PropTypes.bool,
  /** The current page number. */
  page: PropTypes.number,
  /** The number of pagination items that appear. */
  paginationSize: PropTypes.number,
  /** The number or records per page. */
  sizePerPage: PropTypes.number,
  /** A list that allows the user to select how many records to show per page. */
  sizePerPageList: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({ text: PropTypes.string, value: PropTypes.number }),
    ]),
  ),
  /** The total number of records; required when you are fetching each page remotely. */
  totalSize: PropTypes.number,
  /** Whether to allow the user to change how many records are shown per page. */
  showSizePerPageList: PropTypes.bool,
  /** Whether or not to show the total number of records on the screen. */
  showTotal: PropTypes.bool,
  /** Whether pagination should actually render an input field for navigation. */
  paginationInput: PropTypes.bool,
  /** If provided, the control will render standard pagination if there are
   * equal to or less than `dynamicPaginationTypeLimit` pages. If there are
   * more, an input control paginator will be used (such as is displayed when
   * `paginationInput` is true). Overrides any setting by `paginationInput`.
   * */
  dynamicPaginationTypeLimit: PropTypes.number,
  /** Whether pagination should be hidden if there is only a single page. */
  hidePageListOnlyOnePage: PropTypes.bool,
  /** Additional pagination properties. */
  paginationOptions: PropTypes.shape({
    pageStartIndex: PropTypes.number,
    withFirstAndLast: PropTypes.bool,
    alwaysShowAllBtns: PropTypes.bool,
    firstPageText: PropTypes.any,
    prePageText: PropTypes.any,
    nextPageText: PropTypes.any,
    lastPageText: PropTypes.any,
    firstPageTitle: PropTypes.any,
    prePageTitle: PropTypes.any,
    nextPageTitle: PropTypes.any,
    lastPageTitle: PropTypes.any,
    sizePerPageLabel: PropTypes.any,
    totalLabel: PropTypes.string,
    hideSizePerPage: PropTypes.bool,
    hidePageListOnlyOnePage: PropTypes.bool,
  }),

  /**
   * Add pagination to the table, overrides all other pagination configuration when provided.
   * @deprecated - Use `paginate`, `page`, `paginationSize` and `paginationOptions` instead. */
  pagination: PropTypes.shape({
    createContext: PropTypes.func,
    options: PropTypes.object,
  }),

  /** Whether or not the table is currently in a loading state. */
  loading: PropTypes.bool,
  /** Show a message when there is no data in the table. */
  showMessageWhenEmpty: PropTypes.bool,
  /** What message to show when the table is empty. */
  whenEmptyLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),

  /** A callback that provides a component to render when a row is expanded. */
  expandRow: PropTypes.shape({
    renderer: PropTypes.func,
    showExpandColumn: PropTypes.bool,
    expandByColumnOnly: PropTypes.bool,
    onlyOneExpanding: PropTypes.bool,
    expandColumnPosition: PropTypes.oneOf(['left', 'right']),
    onExpand: PropTypes.func,
    onExpandAll: PropTypes.func,
  }),

  /** A callback that provides child rows to render when a row is expanded.
   * Overrides any settings present for `expandRow`. */
  expandRowChildren: PropTypes.shape({
    renderer: PropTypes.func,
    showExpandColumn: PropTypes.bool,
    expandByColumnOnly: PropTypes.bool,
    onlyOneExpanding: PropTypes.bool,
    expandColumnPosition: PropTypes.oneOf(['left', 'right']),
    onExpand: PropTypes.func,
    onExpandAll: PropTypes.func,
  }),

  /** Default height for the icon shown for expandable rows. */
  expandRowIconHeight: PropTypes.number,
  /** Default render delay before expanding rows are processed to make sure they
   * have an appropriate layout, in milliseconds. */
  expandRowRenderDelay: PropTypes.number,
  /* Whether the header indicator for expandable row children should be hidden. */
  expandRowChildrenShowHeader: PropTypes.bool,
};

Table.defaultProps = {
  bordered: undefined,
  mode: TABLE_MODE_BORDERS,
  className: '',
  keyField: 'id',
  data: [],
  columns: [{}],
  fixed: true,
  responsive: false,
  valign: false,
  paginate: false,
  pagination: null,
  page: 1,
  paginationSize: 10,
  sizePerPage: 10,
  sizePerPageList: [5, 10, 25, 50],
  showSizePerPageList: false,
  showTotal: false,
  paginationInput: false,
  dynamicPaginationTypeLimit: 20,
  paginationOptions: {
    pageStartIndex: 1,
    withFirstAndLast: false,
    alwaysShowAllBtns: true,
    firstPageText: '\u00ab',
    prePageText: '\u2039',
    nextPageText: '\u203a',
    lastPageText: '\u00bb',
    nextPageTitle: 'Next page',
    prePageTitle: 'Previous page',
    firstPageTitle: 'First page',
    lastPageTitle: 'Last page',
    sizePerPageLabel: 'Rows per page:',
    totalLabel: '{from}-{to} of {dataSize} records',
    hideSizePerPage: false,
    hidePageListOnlyOnePage: null,
  },
  hidePageListOnlyOnePage: false,
  loading: false,
  showMessageWhenEmpty: false,
  whenEmptyLabel: 'There are currently no records available to view.',
  expandRow: null,
  expandRowChildren: null,
  expandRowIconHeight: 14,
  expandRowRenderDelay: 10,
  expandRowChildrenShowHeader: true,
};

export default Table;

const TablePagination = { paginationFactory };
export {
  TablePagination,
  TABLE_MODE_BORDERS,
  TABLE_MODE_NO_BORDERS,
  TABLE_MODE_NO_BORDERS_INDENTED,
};
