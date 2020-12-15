import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';

import Base from '../../other/Base';
import Layouts from '../../layout/Layouts';
import Button from '../../buttons/Button';
import SVGIcon from '../../display/SVGIcon';
import FilterGroupBase from '../../data/FilterGroup';
import FilterResults from '../../data/FilterResults';
import InputSearch from '../../forms/InputSearch';
import InPageNav from '../../navigation/InPageNav';
import Tab from '../../panels/Tab';
import Table from '../Table';

const FilterGroup = (filters, labels, props) => (
  <FilterGroupBase id={labels.filterTitle} title={labels.filterTitle} {...props}>
    {filters.map(f => (
      <FilterGroupBase.Item key={f.name} id={f.name} filterName={f.name}>
        {f.children}
      </FilterGroupBase.Item>
    ))}
  </FilterGroupBase>
);

class FilteredTable extends Base {
  constructor(props) {
    super(props);

    this.setActiveView = this.setActiveView.bind(this);

    const activeViews = props.views.filter(v => v.defaultActive);
    const activeKey = activeViews && activeViews.length ? activeViews[0].id : null;

    this.state = {
      activeViewId: activeKey,
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSearchClear = this.onSearchClear.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.searchElementFocusTimeout);
    clearTimeout(this.searchTimeout);
  }

  setActiveView(activeViewId) {
    const { activeViewChanged } = this.props;
    this.setState({ activeViewId });

    if (activeViewChanged) {
      activeViewChanged(activeViewId);
    }
  }

  onSearch(e) {
    const { onSearch, searchDelay, searchCharacterMin } = this.props;
    const { value } = e.currentTarget;
    this.searchElement = e.target;

    if (onSearch) {
      clearTimeout(this.searchTimeout);

      // Execute search only if the user has typed the minimum amount of required characters
      if (value.length >= searchCharacterMin) {
        this.searchTimeout = setTimeout(() => {
          onSearch(value);
        }, searchDelay);
      } else if (e.key) {
        // Check if search has been backspaced to less than searchCharacterMin chars
        if (e.key === 'Backspace') {
          this.searchTimeout = setTimeout(() => {
            onSearch('');
          }, searchDelay);
        }
      }
    }
  }

  onSearchClear(...args) {
    const { onSearchClear } = this.props;

    // Since we're using a default value below to prevent multiple updates, make
    // sure that the input field is updated directly on clear
    if (this.searchElement) {
      this.searchElement.value = '';
    }

    if (onSearchClear) {
      onSearchClear(...args);
    }

    // On clear, focus the search element
    if (this.searchElement) {
      clearTimeout(this.searchElementFocusTimeout);
      this.searchElementFocusTimeout = setTimeout(() => {
        this.searchElement.focus();
      }, 1);
    }
  }

  render() {
    const {
      id,
      className,
      labels,
      views,
      filters,
      activeFilters,
      onFilterClearAll,
      filterClearAllIcon,
      hasSearch,
      onSearch,
      onSearchClear,
      searchBy,
      updatedVariant,
      ...props
    } = this.props;

    const { activeViewId } = this.state;
    const activeView = views.find(item => `${item.id}` === `${activeViewId}`);

    const hasViews = views && views.length > 1;
    const hasFilters = filters && filters.length > 0;
    const hasActiveFilters = activeFilters && activeFilters.length > 0;

    return (
      <div className={classNames('FilteredTable', className)} data-component-name="FilteredTable">
        {(hasSearch || hasViews || hasFilters) && (
          <Layouts className="filterContainer" template="flex-left">
            <div className="search-wrapper">
              {hasSearch && (
                <>
                  <InputSearch
                    defaultValue={searchBy}
                    name={`${id}-search`}
                    onInput={this.onSearch}
                    onKeyUp={this.onSearch}
                    placeholder={labels.searchPlaceholder}
                  />

                  {!!searchBy && !!onSearchClear && (
                    <Button
                      className="clearButton"
                      mode="link"
                      icon={<SVGIcon icon="cross" height="12px" />}
                      onClick={this.onSearchClear}
                    />
                  )}
                </>
              )}
            </div>

            {hasViews && (
              <InPageNav
                id={`${id}-views`}
                className="viewTabs"
                size="sm"
                activeKey={`${activeViewId}`}
                onSelect={this.setActiveView}
              >
                {views.map(v => (
                  <Tab key={v.name} eventKey={`${v.id}`} title={v.name} tabClassName={v.name} />
                ))}
              </InPageNav>
            )}

            {hasFilters && (
              <FilterGroupBase.Trigger
                placement="bottom-end"
                overlay={FilterGroup(filters, labels, { activeFilters, updatedVariant })}
              >
                <Button icon={<SVGIcon icon="adjust" height="20px" />} mode="link">
                  {labels.filterButton}
                </Button>
              </FilterGroupBase.Trigger>
            )}
          </Layouts>
        )}

        {hasActiveFilters && (
          <FilterResults>
            <FilterResults.Label>{labels.activeFilters}</FilterResults.Label>

            <FilterResults.Filters>
              {activeFilters.map(a => (
                <FilterResults.Filter key={a.text} onDismiss={a.onDismiss}>
                  {a.text}
                </FilterResults.Filter>
              ))}
            </FilterResults.Filters>

            <FilterResults.Clear icon={filterClearAllIcon} onClose={onFilterClearAll}>
              {labels.filterResultsClearButton}
            </FilterResults.Clear>
          </FilterResults>
        )}

        <Table id={id} keyField="id" columns={activeView.columns} paginate {...props} />
      </div>
    );
  }
}

FilteredTable.propTypes = {
  /** The id of the table that can be used to identify any form elements for accessibility. */
  id: isRequiredForA11y(PropTypes.string),
  /** Custom class to be added to the component */
  className: PropTypes.string,
  /** Contains the labels for all non-value text on the screen
   *  (excluding column headers) */
  labels: PropTypes.shape({
    searchPlaceholder: PropTypes.string,
    filterButton: PropTypes.string,
    filterTitle: PropTypes.string,
    filterResultsClearButton: PropTypes.string,
    activeFilters: PropTypes.string,
  }),
  /** Specifies the views available and the associated columns shape for that
   *  specific view, and which view is active on initialisation.
   *  If only a single view provided, the option tabs are not rendered. */
  views: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      defaultActive: PropTypes.bool,
      name: PropTypes.string,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          dataField: PropTypes.string,
          text: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  /**  Specifies the filters that are available. If not provided, no filters rendered. */
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      children: PropTypes.node,
    }),
  ),
  /** Specifies what filters are currently active.
   *  If not provided, no active filters rendered */
  activeFilters: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      onDismiss: PropTypes.func,
      type: PropTypes.string,
    }),
  ),
  /** Function provided to the filter clear all button */
  onFilterClearAll: PropTypes.func,
  /** Optional icon to prepend to the filter clear all button */
  filterClearAllIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Is fired onChange from the search field */
  onSearch: PropTypes.func,
  /** Is fired when the search box clear button is clicked */
  onSearchClear: PropTypes.func,
  /** Contains the data set for the table */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** If the table is in a loading state.
   *  If the `overlay` prop is not given, the table will ignore the overlay rendering */
  loading: PropTypes.bool,
  /** Overlay displayed when the table is in a loading state.
   *  Accepts a factory function which returns a higher order component. */
  overlay: PropTypes.func,
  /** Whether or not the columns in the table should all be of equal size or obey size settings. */
  fixed: PropTypes.bool,
  /** Function called when the active view changes */
  activeViewChanged: PropTypes.func,
  /** The current value of the search field */
  searchBy: PropTypes.string,
  /** How long to wait before triggering the search, in milliseconds. */
  searchDelay: PropTypes.number,
  /** Minimum number of characters the user has to enter before the search runs. */
  searchCharacterMin: PropTypes.number,
};

FilteredTable.defaultProps = {
  className: null,
  labels: {
    searchPlaceholder: 'Enter search term ...',
    filterButton: 'Filter Results',
    filterTitle: 'Filter Results',
    filterResultsClearButton: 'Clear All',
    activeFilters: 'Filters:',
  },
  filters: [],
  activeFilters: [],
  loading: false,
  fixed: false,
  hasSearch: true,
  searchBy: '',
  searchCharacterMin: 3,
  searchDelay: 300,
  filterClearAllIcon: null,
};

export default FilteredTable;
