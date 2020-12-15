import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Children from 'react-children-utilities';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';

import Base from '../../other/Base';
import { TABLE_MODE_BORDERS } from '../Table';
import { withResizing } from '../../../../utils/ResizingProvider';

import { getPositionToBody, getParentBackgroundColor } from '../../../../utils/ElementHelpers';

const doesBrowserHaveScrollbar = () => window.document.body.clientHeight > window.innerHeight;

class SectionTable extends Base {
  constructor(props) {
    super(props);

    this.wrapper = React.createRef();
    this.header = React.createRef();

    this.readPositionTables = this.readPositionTables.bind(this);
    this.readTables = this.readTables.bind(this);
    this.resetSizing = this.resetSizing.bind(this);
    this.positionHeaders = this.positionHeaders.bind(this);
    this.setSizing = this.setSizing.bind(this);

    this.fixedHeaderWatchersEnabled = false;
    this.headerIsFixed = false;
    this.startCheckHeadersOffScreen = this.startCheckHeadersOffScreen.bind(this);
    this.checkFixedHeaderHorizontalScrolling = this.checkFixedHeaderHorizontalScrolling.bind(this);

    this.renderHeaders = this.renderHeaders.bind(this);

    this.browserHasScrollbar = doesBrowserHaveScrollbar();
    this.scrollbarVisibilityInterval = null;
    this.startBrowserScrollbarWatchers = this.startBrowserScrollbarWatchers.bind(this);
    this.clearBrowserScrollbarWatchers = this.clearBrowserScrollbarWatchers.bind(this);
    this.checkScrollbarVisibilityChange = this.checkScrollbarVisibilityChange.bind(this);

    this.isResetting = false;
  }

  componentDidMount() {
    this.startFixedHeaderWatchers();
    this.startBrowserScrollbarWatchers();

    if (!this.wrapper || !this.wrapper.current) {
      // eslint-disable-next-line no-console
      console.warn(
        'We could not find the component reference for the wrapper, ' +
          'thus maintaining column sizing across multiple tables is not available.',
      );
      return;
    }

    const { loading } = this.props;

    if (!loading) {
      this.readPositionTables();
    }
  }

  componentDidUpdate(prevProps) {
    const { resizing, fixedHeader, loading } = this.props;
    const {
      resizing: previousResizing,
      fixedHeader: previousFixHeader,
      loading: previousLoading,
    } = prevProps;

    if (fixedHeader !== previousFixHeader) {
      if (fixedHeader) {
        this.startFixedHeaderWatchers();
      } else {
        this.clearFixedHeaderWatchers();
      }
    }

    // If the table was previously loading, but now they are not loading, reread
    // and reposition all of the tables again as the content of what is in the
    // section table may have changed.
    if (!loading && loading !== previousLoading) {
      this.readPositionTables();
    }

    // If we are not in the process of resizing the window, redo the sizing
    // calculations and make sure all of the columns are the same width again,
    // in case something that affects this has changed.
    else if (!resizing && resizing !== previousResizing) {
      if (this.isResetting) {
        return;
      }

      this.isResetting = true;
      this.resetSizing();
      this.setSizing();
      this.isResetting = false;
    }

    // Whenever something changes in the component, it might affect our header
    // position when fixed headers are enabled. So reset and recalculate.
    this.calculateHeaderPosition();
    this.startCheckHeadersOffScreen();
  }

  componentWillUnmount() {
    this.clearFixedHeaderWatchers();
    this.clearBrowserScrollbarWatchers();
  }

  /* Start watchers that keep track of whether the header should be fixed to the
   * top of the screen. */
  startFixedHeaderWatchers() {
    const { fixedHeader } = this.props;

    if (!this.wrapper || !this.wrapper.current) {
      return;
    }

    if (fixedHeader && !this.fixedHeaderWatchersEnabled) {
      this.calculateHeaderPosition();

      window.addEventListener('scroll', this.startCheckHeadersOffScreen);
      this.wrapper.current.addEventListener('scroll', this.checkFixedHeaderHorizontalScrolling);
      this.fixedHeaderWatchersEnabled = true;

      this.startCheckHeadersOffScreen();
    }
  }

  /* Terminate watchers that keep track of whether the header should be fixed to
   * the top of the screen. */
  clearFixedHeaderWatchers() {
    window.removeEventListener('scroll', this.startCheckHeadersOffScreen);

    if (this.wrapper && this.wrapper.current) {
      this.wrapper.current.removeEventListener('scroll', this.checkFixedHeaderHorizontalScrolling);
    }

    this.fixedHeaderWatchersEnabled = false;
  }

  /* Start watchers to keep track of whether a browser scrollbar has been added
   * to the page, meaning the page width changed and we have to reposition tables
   * probably. */
  startBrowserScrollbarWatchers() {
    window.addEventListener('click', this.checkScrollbarVisibilityChange);
  }

  /** Clear watchers that keep track of whether a scrollbar appears. */
  clearBrowserScrollbarWatchers() {
    window.removeEventListener('click', this.checkScrollbarVisibilityChange);
    clearInterval(this.scrollbarVisibilityInterval);
  }

  /** When a scrollbar appears or disappears, we need to probably reposition
   * tables as the document width changes. This needs a delay to account for any
   * accordion animations. */
  checkScrollbarVisibilityChange() {
    clearInterval(this.scrollbarVisibilityInterval);

    // Don't exceed checking for more than a second as by that point all
    // animations will definitely have completed.
    let maximumCheckInterval = 1000;
    const intervalStep = 10;

    this.scrollbarVisibilityInterval = setInterval(() => {
      const scrollbarVisible = doesBrowserHaveScrollbar();

      if (this.browserHasScrollbar !== scrollbarVisible) {
        this.readPositionTables();
        this.browserHasScrollbar = scrollbarVisible;
        clearInterval(this.scrollbarVisibilityInterval);
      }

      if (maximumCheckInterval === 0) {
        clearInterval(this.scrollbarVisibilityInterval);
      }

      maximumCheckInterval -= intervalStep;
    }, intervalStep);
  }

  /** Full process for reading and positioning tables. */
  readPositionTables() {
    if (this.isResetting) {
      return;
    }

    this.isResetting = true;
    this.readTables(); // Find all of the tables, rows and cells and store the content
    this.resetSizing(); // Make sure any sizing that has been explicitly set is stripped out
    this.positionHeaders(); // Make sure headers are appropriately indented on the left and right
    this.setSizing(); // Make sure all columns are the same width
    this.isResetting = false;
  }

  /* Read and record all of the table columns and cells for easy and quick parsing. */
  readTables() {
    this.headerLastCellIsSection = false;
    this.tables = Array.from(this.wrapper.current.querySelectorAll('table'));
    this.headers = this.wrapper.current.querySelector('.headers');

    if (this.headers) {
      this.headers.style.paddingLeft = '';
      this.headers.style.paddingRight = '';
      this.headers.style.marginRight = '';
    }

    this.columns = [];
    this.cells = [];

    // We don't want to manage internal expansion tables.
    this.tables = this.tables.filter(table => {
      const tableParent = table.closest('.row-expansion-style, .SectionTable');
      return !tableParent.classList.contains('row-expansion-style');
    });

    // For every table, find every row, and for every row, find every associated
    // cell that is only one cell wide. Then store all of this information later for easy parsing.
    this.tables.forEach(table => {
      const rows = Array.from(table.querySelectorAll('tr'));

      rows.forEach((row, r) => {
        const cells = Array.from(
          row.querySelectorAll('th:not(.hidden):not(.blank), td:not(.hidden):not(.blank)'),
        ).filter(cell => {
          // We don't want to manage internal expansion tables.
          const cellParent = cell.closest('.row-expansion-style, .SectionTable');
          return !cellParent.classList.contains('row-expansion-style');
        });

        cells.forEach((cell, i) => {
          if (!this.columns[i]) {
            this.columns[i] = [];
          }

          if (cell.colSpan === 1) {
            this.cells.push(cell);
            this.columns[i].push(cell);
          }

          if (
            table.classList.contains('header') &&
            rows.length - 1 === r &&
            cells.length - 1 === i
          ) {
            if (cell.classList.contains('section')) {
              this.headerLastCellIsSection = true;
            }
          }
        });
      });
    });
  }

  /* Specify sizing based on provided column data. */
  resetSizing() {
    if (!this.tables || !this.cells) {
      return;
    }

    const containerWidth = this.wrapper.current.clientWidth;
    const containerBounds = this.wrapper.current.getBoundingClientRect();

    this.cells.forEach(c => {
      const cell = c;
      cell.style.width = '';
    });

    let tableWidth = 0;

    // Calculate how wide table should be, taking into account any nesting in
    // panels.
    this.tables.forEach(t => {
      const table = t;
      table.style.width = '';

      const tableBounds = table.getBoundingClientRect();
      const leftDiff = tableBounds.left - containerBounds.left;
      const rightDiff = containerBounds.right - tableBounds.right;

      const width = Math.ceil(containerWidth - leftDiff - rightDiff);

      if (tableWidth === 0) {
        tableWidth = width;
      } else if (width < tableWidth) {
        tableWidth = width;
      }
    });

    this.tableWidth = tableWidth;
  }

  /* Make sure that the header is appropriately indented to the same level as
   * the tables, to allow for things like having the tables nested in a panel. */
  positionHeaders() {
    // If there are no columns recorded in this table, we don't have to do
    // anything.
    if (this.columns && this.columns.length >= 1) {
      if (!this.headers) {
        return;
      }

      // Determine the boundaries of our container.
      const wrapperBoundaries = this.wrapper.current.getBoundingClientRect();
      let offsetLeft = 0;
      let offsetRight = 0;

      const { hasExpandableRowMarkers, expandableRowMarkersPosition } = this.props;
      const hasRightMarker = hasExpandableRowMarkers && expandableRowMarkersPosition === 'right';

      const firstColumn = this.columns[0];
      const lastColumn = this.columns[this.columns.length - 1];

      // Then for the first column, go through each cell and find it's left
      // offset as related to the window, and use that to calculate the offset
      // relative to the container.
      firstColumn.forEach(cell => {
        const cellBoundaries = cell.getBoundingClientRect();
        const cellLeft = cellBoundaries.left - wrapperBoundaries.left;

        if (
          cell.classList.contains('expand-cell-header') &&
          !cell.classList.contains('expand-cell-header-section')
        ) {
          return;
        }

        if (cellLeft > offsetLeft) {
          offsetLeft = cellLeft;
        }
      });

      // And for the last column, go through each cell and find it's right
      // offset as related to the window, and use that to calculate the offset
      // relative to the container.
      lastColumn.forEach(cell => {
        const cellBoundaries = cell.getBoundingClientRect();
        const cellRight = wrapperBoundaries.right - cellBoundaries.right;

        if (cellRight > offsetRight) {
          offsetRight = cellRight;
        }
      });

      // Then use that offset as the padding for the header.
      this.headers.style.paddingLeft = offsetLeft ? `${offsetLeft}px` : '';
      this.headers.style.paddingRight = offsetRight ? `${offsetRight}px` : '';

      if (this.headerLastCellIsSection && !hasRightMarker && lastColumn.length > 0) {
        const firstCell = lastColumn[0];

        if (window && window.getComputedStyle) {
          const firstCellStyles = window.getComputedStyle(firstCell);
          this.headers.style.marginRight = `-${firstCellStyles.paddingRight}`;
        }
      }
    }
  }

  /* Make sure the column widths across all tables are consistent. */
  setSizing() {
    if (!this.tables || !this.cells) {
      return;
    }

    // If there are no internal tables this will be zero, in which case we
    // shouldn't attempt to adjust our wrappers based on their width.
    if (this.tableWidth === 0) {
      return;
    }

    // Give the table a specific width so that the column sizes across multiple
    // pages can be calculated in a consistent manner by the browser
    this.tables.forEach(t => {
      const table = t;
      let width = this.tableWidth;

      if (table.classList.contains('header') && this.headerLastCellIsSection) {
        width += this.headerLastCellWidthAdjustment;
      }

      table.style.width = width ? `${width}px` : '';
    });

    const { columns, mode } = this.props;

    let fixedColumns = 0;
    let fixedSize = 0;

    // Determine how many columns have a fixed size and thus how much space in
    // the table they are taking up
    columns.forEach((item, i) => {
      const size = parseFloat(item.width) || 0;
      const border = mode === TABLE_MODE_BORDERS && i > 0 ? 1 : 0;

      fixedSize += size + border;

      if (size > 0) {
        fixedColumns++;
      }
    });

    // Calculate the average width of those columns which don't have a fixed
    // size and distribute the remaining table space. Assign the widths of fixed
    // cells as well.
    const expandCell = this.wrapper.current.querySelector('.expand-cell');
    const expandRowMarker = expandCell ? 1 : 0;
    const expandCellWidth = expandCell ? expandCell.clientWidth : 0;

    const availableTableSpace = this.tableWidth - fixedSize - expandCellWidth;
    const unfixedColumns = this.columns.length - fixedColumns - expandRowMarker;
    const averageSize = availableTableSpace / unfixedColumns;

    this.columns.forEach((column, i) => {
      column.forEach(c => {
        const cell = c;

        if (
          cell.classList.contains('expand-cell') ||
          cell.classList.contains('expand-cell-header')
        ) {
          return;
        }

        let average = averageSize;

        // If this is a header and this is the last cell and is a section, it
        // needs to be adjusted to contain any extra offset width from panels
        if (cell.classList.contains('section') && i === this.columns.length - 1) {
          average += this.headerLastCellWidthAdjustment;
        }

        const averageWidth = average ? `${average}px` : '';
        const width = columns[i] && columns[i].width ? columns[i].width : averageWidth;
        cell.style.width = width || '';
      });
    });

    // If the table has expandable row columns, adjust the associated column in
    // the header to be the correct width.
    if (expandCell) {
      const expandHeaderCells = Array.from(
        this.wrapper.current.querySelectorAll('.headers .expand-cell-header'),
      );

      if (expandCell) {
        expandHeaderCells.forEach(item => {
          const cell = item;
          cell.style.width = expandCellWidth ? `${expandCellWidth}px` : '';
        });
      }
    }
  }

  /* Stores the position of the headers for reference in calculating whether
   * they are off the screen and thus should be fixed. */
  calculateHeaderPosition() {
    if (!this.header || !this.header.current) {
      return;
    }

    const headerWrapper = this.header.current;
    const header = headerWrapper.firstElementChild;
    const headerInner = header.firstElementChild;

    header.classList.remove('fixed');
    header.style.background = '';
    header.style.width = '';
    headerInner.style.width = '';
    headerInner.style.marginLeft = '';
    headerWrapper.style.height = '';

    this.headerPosition = getPositionToBody(headerWrapper);
    this.headerIsFixed = false;
  }

  /* Called when the component changes, or whenever the users scrolls to start
   * to check whether the table headers are still on screen or should be fixed. */
  startCheckHeadersOffScreen() {
    const { fixedHeader } = this.props;
    if (!fixedHeader) {
      return;
    }

    if (this.isValidating) {
      return;
    }

    this.isValidating = true;
    this.checkHeadersOffScreen();
    this.isValidating = false;
  }

  /* Checks whether headers are still on screen completely, and if not fixes
   * them to the top of the screen. */
  checkHeadersOffScreen() {
    if (!this.header || !this.header.current || !this.wrapper || !this.wrapper.current) {
      return;
    }

    const wrapper = this.wrapper.current;
    const headerWrapper = this.header.current;
    const header = headerWrapper.firstElementChild;
    const headerInner = header.firstElementChild;

    const top = this.headerPosition.y;
    const scrollPosY = window.pageYOffset;

    // Possibly fix headers if we've scrolled past where they start.
    const headerScrolledPast = scrollPosY > top;
    let tableStillVisible = false;

    // Don't fix headers if we've scrolled past the table.
    if (headerScrolledPast) {
      const wrapperBottomEdge = top + wrapper.offsetHeight - header.offsetHeight;
      tableStillVisible = scrollPosY < wrapperBottomEdge;
    }

    if (headerScrolledPast && tableStillVisible) {
      // The order of these is important.
      headerWrapper.style.height = headerWrapper.offsetHeight
        ? `${headerWrapper.offsetHeight}px`
        : '';

      headerInner.style.width = headerInner.clientWidth ? `${headerInner.clientWidth}px` : '';
      header.style.width = wrapper.clientWidth ? `${wrapper.clientWidth}px` : '';

      // Makes sure that a header which is generally transparent still retains a
      // background color.
      header.style.background = getParentBackgroundColor(headerWrapper);

      header.classList.add('fixed');
      this.headerIsFixed = true;
      this.checkFixedHeaderHorizontalScrolling();
      //
    } else {
      this.calculateHeaderPosition();
    }
  }

  /* Checks to see if a fixed position header should be moved left or right due
   * to scrolling horizontally. */
  checkFixedHeaderHorizontalScrolling() {
    if (!this.header || !this.header.current || !this.wrapper || !this.wrapper.current) {
      return;
    }

    if (!this.headerIsFixed) {
      return;
    }

    const wrapper = this.wrapper.current;
    const headerWrapper = this.header.current;
    const header = headerWrapper.firstElementChild;
    const headerInner = header.firstElementChild;

    const scrollPosX = wrapper.scrollLeft;

    if (scrollPosX === 0) {
      headerInner.style.marginLeft = '';
    } else {
      headerInner.style.marginLeft = `${scrollPosX * -1}px`;
    }
  }

  static renderExpandableRowsHeader(id, key, isLastRow) {
    return (
      <th
        key={`${id}-${key}-expand-cell-header`}
        className={classNames([
          'expand-cell-header-section',
          'expand-cell-header',
          isLastRow ? null : 'blank',
        ])}
      >
        <i />
      </th>
    );
  }

  /* Render the section table headers. */
  renderHeaders(rows) {
    const { id, hasExpandableRowMarkers, expandableRowMarkersPosition } = this.props;

    if (rows && rows.length) {
      const sections = [];

      return rows.map((row, r) => {
        const key = r;
        let c = 0;

        const cells = row.map(cell => {
          const style = {
            textAlign: cell.align,
          };

          let extraClasses = null;

          if (cell.section) {
            if (!sections[cell.section]) {
              sections[cell.section] = 1;
            } else {
              sections[cell.section] += 1;
            }

            // If the preceding element was a section, don't round the left corner
            if (c > 0 && row[c - 1].section) {
              extraClasses = classNames([extraClasses, 'leftSibling']);
            }

            // If the next element is a section, don't round the right corner
            if (c + 1 < row.length && row[c + 1].section) {
              extraClasses = classNames([extraClasses, 'rightSibling']);
            }
          }

          c += 1;

          const isFirstColumn = c === 1;
          const isLastColumn = c === row.length;
          const isLastRow = r === rows.length - 1;

          return (
            <Fragment key={`${id}-${key}-${c}-wrapper`}>
              {hasExpandableRowMarkers &&
                isFirstColumn &&
                expandableRowMarkersPosition === 'left' &&
                SectionTable.renderExpandableRowsHeader(id, key, isLastRow)}

              <th
                key={`${id}-${key}-${c}`}
                colSpan={cell.colspan}
                className={classNames([
                  cell.className,
                  cell.text ? null : 'blank',
                  cell.section ? `section section-${cell.section}` : null,
                  sections[cell.section] === 1 ? 'first' : null,
                  extraClasses,
                ])}
                style={style}
              >
                <div className="content">{cell.text}</div>
              </th>

              {hasExpandableRowMarkers &&
                isLastColumn &&
                expandableRowMarkersPosition === 'right' &&
                SectionTable.renderExpandableRowsHeader(id, key, isLastRow)}
            </Fragment>
          );
        });

        return <tr key={`${id}-${key}`}>{cells}</tr>;
      });
    }

    return null;
  }

  render() {
    const { className, children, headers: headerData, minWidth, breakword, mode, id } = this.props;

    const headers = this.renderHeaders(headerData);
    let t = 0;

    // Pass certain table properties to the table children.
    const parsedChildren = Children.deepMap(children, child => {
      if (child && child.type && child.type.componentName === 'Table') {
        t++;

        const options = {
          mode,
        };

        if (child.props && !child.props.id) {
          options.id = `${id}-${t}`;
        }

        options.index = t;
        return React.cloneElement(child, options);
      }

      return child;
    });

    return (
      <div
        className={classNames(
          'SectionTable',
          minWidth ? 'responsive' : null,
          breakword ? 'breakword' : null,
          className,
        )}
        data-component-name="SectionTable"
        ref={this.wrapper}
      >
        <div className="wrapper" style={{ minWidth }}>
          {headers && headers.length > 0 ? (
            <div ref={this.header} className="header-wrapper">
              <div className="headers">
                <div className="header-inner">
                  <table
                    id={`${id}-header`}
                    className={classNames('table Table header', `mode-${mode}`)}
                    role="presentation"
                  >
                    <thead>{headers}</thead>
                  </table>
                </div>
              </div>
            </div>
          ) : null}

          {parsedChildren}
        </div>
      </div>
    );
  }
}

SectionTable.propTypes = {
  /** The id of the table that can be used to identify any form elements for accessibility. */
  id: isRequiredForA11y(PropTypes.string),
  /** Additional class to add to the Table element. */
  className: PropTypes.string,
  /** Define which column is unique. */
  keyField: PropTypes.string,
  /** Provides data for your table. */
  data: PropTypes.arrayOf(PropTypes.object),
  /** Defines the minimum width of the section table and adds a scrollbar when
   * the content no longer fits. */
  minWidth: PropTypes.string,
  /** Whether content that does not fit should be broken across words. */
  breakword: PropTypes.bool,
  /** Whether or not the header should be fixed to the top of the screen when
   * scrolling vertically. */
  fixedHeader: PropTypes.bool,
  /** Definition of required props
   * (for optional props see https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/column-props.html#optional) */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      /** Specify what field should be applied on this column.
       * You can use dataField with dot(.) to describe nested objects */
      dataField: PropTypes.string.required,
      /** Specify the column text. If your header is not only text or
       * you want to customize the header column, please use headerFormatter */
      text: PropTypes.string.required,
    }),
  ),
  /** Indicates whether or not there are loading tables. When no longer loading,
   * the table positions and columns are recalculated. */
  loading: PropTypes.bool,
  /** Whether the section table headers need to take into account expandable row
   * markers within the tables. */
  hasExpandableRowMarkers: PropTypes.bool,
  /** Indicates where the expandable row markers are placed. */
  expandableRowMarkersPosition: PropTypes.oneOf(['left', 'right']),
};

SectionTable.defaultProps = {
  breakword: true,
  fixedHeader: false,
  minWidth: null,
  className: '',
  keyField: 'id',
  data: [],
  columns: [{}],
  loading: false,
  hasExpandableRowMarkers: false,
  expandableRowMarkersPosition: 'left',
};

export default withResizing(SectionTable);
