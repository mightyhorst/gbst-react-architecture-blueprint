import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  Typeahead as ReactTypeahead,
  Menu,
  MenuItem,
  Highlighter,
} from 'react-bootstrap-typeahead';

import Base from '../../other/Base';
import AsyncTypeahead from './AsyncTypeahead';

// Based on [react-bootstrap-typeahead](https://www.npmjs.com/package/react-bootstrap-typeahead)
class Typeahead extends Base {
  render() {
    const { className, size, bsSize, typeaheadRef, validationState, ...props } = this.props;

    return (
      <div className={classNames('Typeahead', className)} data-component-name="Typeahead">
        <ReactTypeahead bsSize={size || bsSize} {...props} ref={typeaheadRef} />
      </div>
    );
  }
}

Typeahead.propTypes = {
  /** For localized accessibility: Should return a string indicating the number of
  results for screen readers. Receives the current results. */
  a11yNumResults: PropTypes.func,
  /** For localized accessibility: Should return a string indicating the number of
  selections for screen readers. Receives the current selections. */
  a11yNumSelected: PropTypes.func,
  /** Specify menu alignment. The default value is justify, which makes the menu as
  wide as the input and truncates long values. Specifying left or right will align
  the menu to that side and the width will be determined by the length of menu item values. */
  align: PropTypes.oneOf(['justify', 'left', 'right']),
  /** Allows the creation of new selections on the fly. Any new items will be added to the
  list of selections, but not the list of original options unless handled as such by Typeahead's
  parent. The newly added item will always be returned as an object even if the other options are
  simply strings, so be sure your onChange callback can handle this. If a function is specified,
  it will be used to determine whether a custom option should be included. The return value should
  be true or false. */
  allowNew: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  /** Autofocus the input when the component initially mounts. */
  autoFocus: PropTypes.bool,
  /** DEPRECATED. Whether to render the menu inline or attach to document.body. */
  bodyContainer: PropTypes.bool,
  /** Applies pre defined sizing to the component. */
  size: PropTypes.oneOf(['lg', 'sm', null]),
  /** @deprecated Use 'size' instead. */
  bsSize: PropTypes.oneOf(['lg', 'sm', null]),
  /** Whether or not filtering should be case-sensitive. */
  caseSensitive: PropTypes.bool,
  /** Displays a button to clear the input when there are selections. */
  clearButton: PropTypes.bool,
  /** The initial value displayed in the text input. */
  defaultInputValue: PropTypes.string,
  /** Specify any pre-selected options. Use only if you want the component to be uncontrolled. */
  // eslint-disable-next-line react/forbid-prop-types
  defaultSelected: PropTypes.array,
  /** Whether to disable the input. Will also disable selections when multiple={true}. */
  disabled: PropTypes.bool,
  /** Specify whether the menu should appear above the input. */
  dropup: PropTypes.bool,
  /** Message displayed in the menu when there are no valid results. Passing a falsy value will
  hide the menu if no matches are found [DEPRECATED]. */
  emptyLabel: PropTypes.node,
  /** Either an array of fields in option to search, or a custom filtering callback. */
  filterBy: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  /** Whether or not to automatically adjust the position of the menu when it reaches the viewport
   boundaries. */
  flip: PropTypes.bool,
  /** Highlights the menu item if there is only one result and allows selecting that item by
  hitting enter. Does not work with allowNew. */
  highlightOnlyResult: PropTypes.bool,
  /** Whether the filter should ignore accents and other diacritical marks. */
  ignoreDiacritics: PropTypes.bool,
  /** Props to be applied directly to the input. onBlur, onChange, onFocus,
  and onKeyDown are ignored. */
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
  /** Adds the is-invalid classname to the form-control. Only affects Bootstrap 4 */
  isInvalid: PropTypes.bool,
  /** Indicate whether an asynchronous data fetch is happening. */
  isLoading: PropTypes.bool,
  /** Adds the is-valid classname to the form-control. Only affects Bootstrap 4. */
  isValid: PropTypes.bool,
  /** Specify which option key to use for display or a render function.
  By default, the selector will use the label key. */
  labelKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Maximum height of the dropdown menu. */
  maxHeight: PropTypes.string,
  /** Maximum number of results to display by default. Mostly done for performance
  reasons so as not to render too many DOM nodes in the case of large data sets. */
  maxResults: PropTypes.number,
  /** DEPRECATED. Id applied to the top-level menu element. Required for accessibility. */
  menuId: PropTypes.string,
  /** Number of input characters that must be entered before showing results. */
  minLength: PropTypes.number,
  /** Whether or not multiple selections are allowed. */
  multiple: PropTypes.bool,
  /** Provides the ability to specify a prefix before the user-entered text to indicate that
  the selection will be new. No-op unless allowNew={true}. */
  newSelectionPrefix: PropTypes.string,
  /** Invoked when the input is blurred. Receives an event. */
  onBlur: PropTypes.func,
  /** Invoked whenever items are added or removed. Receives an array of the selected options. */
  onChange: PropTypes.func,
  /** Invoked when the input is focused. Receives an event. */
  onFocus: PropTypes.func,
  /** Invoked when the input value changes. Receives the string value of the input. */
  onInputChange: PropTypes.func,
  /** Invoked when a key is pressed. Receives an event. */
  onKeyDown: PropTypes.func,
  /** DEPRECATED. Invoked when the menu is hidden. */
  onMenuHide: PropTypes.func,
  /** DEPRECATED. Invoked when the menu is shown. */
  onMenuShow: PropTypes.func,
  /** Invoked when the pagination menu item is clicked. */
  onPaginate: PropTypes.func,
  /** Full set of options, including any pre-selected options. */
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object.isRequired),
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]),
  /** Give user the ability to display additional results if the number of
  results exceeds maxResults. */
  paginate: PropTypes.bool,
  /** Prompt displayed when large data sets are paginated. */
  paginationText: PropTypes.string,
  /** Placeholder text for the input. */
  placeholder: PropTypes.string,
  /** Callback for custom menu rendering. */
  renderMenu: PropTypes.func,
  /** Provides a hook for customized rendering of menu item contents. */
  renderMenuItemChildren: PropTypes.func,
  /** Provides a hook for customized rendering of tokens when multiple
  selections are enabled. */
  renderToken: PropTypes.func,
  /** The selected option(s) displayed in the input. Use this prop if you want to
  control the component via its parent. */
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.array,
  /** Allows selecting the hinted result by pressing enter. */
  selectHintOnEnter: PropTypes.bool,
  /** Allows access to typeahead ref */
  typeaheadRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

Typeahead.Menu = Menu;
Typeahead.MenuItem = MenuItem;
Typeahead.Highlighter = Highlighter;

export default Typeahead;
export { AsyncTypeahead };
