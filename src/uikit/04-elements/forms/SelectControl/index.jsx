import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Bowser from 'bowser';

import Select, { components } from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';
import AsyncSelect from 'react-select/lib/Async';
import AsyncCreatable from 'react-select/lib/AsyncCreatable';

import Base from '../../other/Base';
import { withResizing } from '../../../../utils/ResizingProvider';
import SVGIcon from '../../display/SVGIcon';

import { asField } from '../Field/index';
import { isObject } from '../../../../utils/Comparison';
import { isOutOfViewport } from '../../../../utils/ElementHelpers';

const alignBoundsLeft = (bounds, parentBounds) => {
  const adjustedBounds = { ...bounds };
  adjustedBounds.left = parentBounds.left;
  adjustedBounds.right = parentBounds.left + bounds.width;
  return adjustedBounds;
};

const alignBoundsRight = (bounds, parentBounds) => {
  const adjustedBounds = { ...bounds };
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  adjustedBounds.right = parentBounds.right;
  adjustedBounds.left = windowWidth - (windowWidth - parentBounds.right) - bounds.width;
  return adjustedBounds;
};

const ACTION_SELECT_OPTION = 'select-option';

const Option = ({ innerProps, value, ...otherProps }) => {
  const updatedInnerProps = innerProps ? { ...innerProps } : {};
  updatedInnerProps['data-value'] = value;

  return <components.Option innerProps={updatedInnerProps} value={value} {...otherProps} />;
};

Option.propTypes = {
  ...components.Option.propTypes,
};

class SelectControl extends Base {
  constructor(props) {
    super(props);

    this.selectRef = React.createRef();
    const { menuIsOpen } = props;

    this.state = {
      menuIsOpen,
      flippedMenuPosition: null,
    };

    this.setSelectElement = this.setSelectElement.bind(this);
    this.setMenuElement = this.setMenuElement.bind(this);
    this.setElementHeight = this.setElementHeight.bind(this);
    this.renderDropDownIndicator = this.renderDropDownIndicator.bind(this);

    this.calculateMenuWidth = this.calculateMenuWidth.bind(this);
    this.calculateMenuPosition = this.calculateMenuPosition.bind(this);

    this.onMenuOpen = this.onMenuOpen.bind(this);
    this.onMenuClose = this.onMenuClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);

    const bowser = Bowser.getParser(window.navigator.userAgent);
    this.browser = bowser.getBrowser();
    this.isInternetExplorer = this.browser.name === 'Internet Explorer';
  }

  componentDidMount() {
    this.setSelectElement();
    this.setMenuElement();

    if (this.parentElement) {
      this.parentElement.setAttribute('data-component-name', 'SelectControl');
    }

    this.setElementHeight();
    this.forwardEvents();

    const { menuIsOpen } = this.state;
    if (menuIsOpen) {
      this.calculateMenuWidth();
      this.calculateMenuPosition();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.setMenuElement();
    this.setElementHeight();

    const { menuIsOpen } = this.state;
    const menuOpenStateHasChanged = prevState.menuIsOpen !== menuIsOpen;
    const resizingHasChanged = prevProps.resizing !== this.props.resizing && !this.props.resizing;

    if (menuIsOpen && (menuOpenStateHasChanged || resizingHasChanged)) {
      this.calculateMenuWidth();

      // Sometimes the full render of the select control hasn't completely
      // finished which results in an incorrect width. Just quickly fix that up
      // if it happens.
      if (resizingHasChanged) {
        this.menuWidthTimeout = setTimeout(() => {
          this.calculateMenuWidth();
        }, 10);
      }
    }

    if (
      menuIsOpen &&
      (menuOpenStateHasChanged ||
        resizingHasChanged ||
        prevProps.menuAutoSizedAlignment !== this.props.menuAutoSizedAlignment ||
        prevProps.options !== this.props.options)
    ) {
      // Position the menu if it is to be a dynamic width and position automatically.
      this.calculateMenuPosition();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.elementHeightTimeout);
    clearTimeout(this.menuWidthTimeout);
  }

  setSelectElement() {
    if (this.selectRef && this.selectRef.current && this.selectRef.current.select) {
      let path = this.selectRef.current.select;

      while (!this.parentElement) {
        if (path.controlRef && path.controlRef.parentNode) {
          this.parentElement = path.controlRef.parentNode;
          this.controlElement = path.controlRef;
          this.inputRef = path.inputRef;

          break;
        } else if (path.select) {
          path = path.select;
        } else {
          break;
        }
      }
    }
  }

  setMenuElement() {
    this.menuElement = null;
    const { menuIsOpen } = this.state;

    if (this.parentElement && menuIsOpen) {
      this.menuElement = this.parentElement.querySelector('.gel__menu');
    }
  }

  /* This hack is designed to get around IE11 not effectively aligning flex
   * based elements vertically, when the container does not have a height
   * specified. */
  setElementHeight() {
    if (window && window.getComputedStyle && this.controlElement && this.isInternetExplorer) {
      clearTimeout(this.elementHeightTimeout);

      this.elementHeightTimeout = setTimeout(() => {
        this.controlElement.style.height = 'auto';
        const styles = window.getComputedStyle(this.controlElement);
        this.controlElement.style.height = styles.height;
      }, 10);
    }
  }

  calculateMenuWidth() {
    const { menuShouldSizeAuto } = this.props;

    if (menuShouldSizeAuto) {
      if (this.parentElement && this.menuElement) {
        const parentWidth = this.parentElement.clientWidth;
        this.menuElement.style.minWidth = `${parentWidth}px`;
      }
    }
  }

  /** This method allows us to determine whether a dynamic width menu fits onto
   * the screen in it's given position, and to adjust the width to enable
   * scrolling if necessary. This method is not necessary for positioning that
   * does not flip, as that functionality is handled by css directly. */
  calculateMenuPosition() {
    const { menuShouldSizeAuto, menuAutoSizedAlignment, menuAutoSizedScaleToFit } = this.props;
    const { flippedMenuPosition } = this.state;

    if (
      menuShouldSizeAuto &&
      menuAutoSizedAlignment &&
      menuAutoSizedAlignment.indexOf('auto') >= 0
    ) {
      if (this.parentElement && this.menuElement) {
        if (menuAutoSizedScaleToFit) {
          this.menuElement.style.width = '';
        }

        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const parentBounds = this.parentElement.getBoundingClientRect();
        const menuBounds = this.menuElement.getBoundingClientRect();

        let menuObjectBounds = {
          width: menuBounds.width,
          top: menuBounds.top,
          left: menuBounds.left,
          bottom: menuBounds.bottom,
          right: menuBounds.right,
        };

        const isLeftAligned = menuAutoSizedAlignment.indexOf('left') >= 0;
        const isRightAligned = menuAutoSizedAlignment.indexOf('right') >= 0;

        // Set the default positions for left and right depending on our
        // starting alignment, as the current render might actually be the
        // flipped variant and we want to make sure if that is still correct.
        if (isLeftAligned) {
          menuObjectBounds = alignBoundsLeft(menuObjectBounds, parentBounds);
        } else if (isRightAligned) {
          menuObjectBounds = alignBoundsRight(menuObjectBounds, parentBounds);
        }

        const isOutside = isOutOfViewport(menuObjectBounds);

        let newMenuPosition = null;
        let limitedWidth = null;

        // If this is a left aligned object that is out of bounds to the right,
        // we should see if flipping it helps.
        if (isLeftAligned) {
          if (isOutside.right) {
            const adjustedBounds = alignBoundsRight(menuObjectBounds, parentBounds);
            const adjustedOutOfViewport = isOutOfViewport(adjustedBounds);

            if (!adjustedOutOfViewport.right && !adjustedOutOfViewport.left) {
              newMenuPosition = 'right';
            } else {
              const spaceToEdgeOnLeftAligned = windowWidth - menuObjectBounds.left;
              const spaceToEdgeOnRightAligned = adjustedBounds.right;

              // If we can't position the menu either left or right effectively,
              // determine which side has more space and use that.
              if (spaceToEdgeOnRightAligned > spaceToEdgeOnLeftAligned) {
                newMenuPosition = 'right';
                limitedWidth = spaceToEdgeOnRightAligned;
              } else {
                limitedWidth = spaceToEdgeOnLeftAligned;
              }
            }
          }
        }

        // If this is a right aligned object that is out of bounds to the left,
        // we should see if flipping it helps.
        if (isRightAligned) {
          if (isOutside.left) {
            const adjustedBounds = alignBoundsLeft(menuObjectBounds, parentBounds);
            const adjustedOutOfViewport = isOutOfViewport(adjustedBounds);

            if (!adjustedOutOfViewport.right && !adjustedOutOfViewport.left) {
              newMenuPosition = 'left';
            } else {
              const spaceToEdgeOnLeftAligned = windowWidth - adjustedBounds.left;
              const spaceToEdgeOnRightAligned = menuObjectBounds.right;

              // If we can't position the menu either left or right effectively,
              // determine which side has more space and use that.
              if (spaceToEdgeOnLeftAligned > spaceToEdgeOnRightAligned) {
                newMenuPosition = 'left';
                limitedWidth = spaceToEdgeOnLeftAligned;
              } else {
                limitedWidth = spaceToEdgeOnRightAligned;
              }
            }
          }
        }

        // Adjust the menu so that it fits onto the screen with scrolling, if it
        // would otherwise need to appear off the edge.
        if (limitedWidth && menuAutoSizedScaleToFit) {
          const browserHasScrollbar = window.document.body.clientHeight > window.innerHeight;
          const scrollbarWidth = browserHasScrollbar
            ? window.innerWidth - document.documentElement.offsetWidth + 1
            : 0;

          this.menuElement.style.width = `${limitedWidth - scrollbarWidth}px`;
        }

        if (flippedMenuPosition !== newMenuPosition) {
          this.setState({ flippedMenuPosition: newMenuPosition });
        }
      }
    }
  }

  onMenuOpen() {
    const { onMenuOpen } = this.props;
    if (onMenuOpen) {
      onMenuOpen();
    }

    this.setState({ menuIsOpen: true });
  }

  onMenuClose() {
    const { onMenuClose } = this.props;
    if (onMenuClose) {
      onMenuClose();
    }

    this.setState({ menuIsOpen: false });
  }

  onChange(value, action) {
    const { onChange } = this.props;

    this.setState({ value });
    this.sendEvent('change', onChange, value, action);

    // When selecting an option blur the select
    if (action.action === ACTION_SELECT_OPTION) {
      this.selectRef.current.select.blur();
    }
  }

  onFocus() {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(this.selectRef);
    }
  }

  // Allows us to send the event object for this pretend select box.
  sendEvent(eventName, func, value, action) {
    // When working with an available input field.
    if (this.inputRef) {
      const event = this.createNewEvent(eventName);
      event.simulated = true;

      this.value = value;
      this.inputRef.dispatchEvent(event);

      // Otherwise just pass onChange directly, since inputRef doesn't exist.
    } else if (func) {
      func(value, action);
    }
  }

  // In IE11 intiailising a new Event is failing, check if it can first
  createNewEvent = eventName => {
    let event;
    if (typeof Event === 'function') {
      event = new Event(eventName, { bubbles: true });
    } else {
      event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
    }
    return event;
  };

  // Forward events via the input field, so we have access to an event object
  // for formik and other implementations. We don't need to do this for onblur
  // or onfocus and inputRef already parses those events.
  forwardEvents() {
    const { onChange } = this.props;
    this.forwardEvent(onChange, 'onchange');
  }

  forwardEvent(func, onFunc) {
    if (this.inputRef && func) {
      this.inputRef[onFunc] = e => {
        func(e, this.value ? this.value.value : '');
      };
    }
  }

  renderDropDownIndicator(props) {
    const { size: providedSize, bsSize } = this.props;
    const { menuIsOpen } = this.state;
    const size = providedSize || bsSize;

    let height = '6px';
    switch (size) {
      case 'lg':
        height = '10px';
        break;
      case 'sm':
        height = '6px';
        break;
      default:
        break;
    }

    return (
      <components.DropdownIndicator {...props}>
        <SVGIcon icon={menuIsOpen ? 'chevronUp' : 'chevronDown'} height={height} />
      </components.DropdownIndicator>
    );
  }

  render() {
    const {
      clearable: isClearable,
      disabled: isDisabled,
      loading: isLoading,
      multi: isMulti,
      pullRight: isRtl,
      searchable: isSearchable,
      creatable,
      async,
      className,
      bsSize,
      size,
      bsStyle,
      mode,
      onChange,
      onFocus,
      name: selectControlName,
      options,
      value: providedValue,
      defaultValue,
      menuShouldSizeAuto,
      menuAutoSizedScaleToFit: _1,
      menuAutoSizedAlignment,
      ...props
    } = this.props;

    const { value: stateValue, flippedMenuPosition } = this.state || {};

    let Component = Select;

    if (creatable && async) {
      Component = AsyncCreatable;
    } else if (creatable) {
      Component = CreatableSelect;
    } else if (async) {
      Component = AsyncSelect;
    }

    let sizeClass = null;
    if (bsSize === 'sm' || size === 'sm') {
      sizeClass = 'select-sm';
    } else if (bsSize === 'lg' || size === 'lg') {
      sizeClass = 'select-lg';
    } else {
      sizeClass = 'select-md';
    }

    // Make sure we always generate an input field associated with these text
    // boxes, so that we can always include a proper event object.
    const name = selectControlName || uuid();

    let value = defaultValue;

    if (stateValue !== undefined) {
      value = stateValue;
    }

    if (providedValue !== undefined) {
      value = providedValue;
    }

    if (options) {
      if (!isObject(value)) {
        value = options.find(item => item.value === value);
      }
    }

    if (value === undefined) {
      value = '';
    }

    const customComponents = {
      DropdownIndicator: this.renderDropDownIndicator,
      Option,
    };

    return (
      <Component
        classNamePrefix="gel"
        components={customComponents}
        name={name}
        options={options}
        value={value}
        ref={this.selectRef}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isRtl={isRtl}
        isSearchable={isSearchable}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onMenuOpen={this.onMenuOpen}
        onMenuClose={this.onMenuClose}
        bsStyle={mode || bsStyle}
        className={classNames(
          'SelectControl',
          sizeClass,
          menuShouldSizeAuto ? 'menu-auto-width' : '',
          menuShouldSizeAuto ? `menu-${flippedMenuPosition || menuAutoSizedAlignment}` : '',
          className,
        )}
        {...props}
      />
    );
  }
}

SelectControl.propTypes = {
  /** Focus the control when it is mounted */
  autoFocus: PropTypes.bool,
  /** Remove the currently focused option when the user presses backspace */
  backspaceRemovesValue: PropTypes.bool,
  /** Remove focus from the input when the user selects an option (handy for
  dismissing the keyboard on touch devices) */
  blurInputOnSelect: PropTypes.bool,
  /** When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent  */
  captureMenuScroll: PropTypes.bool,
  /** Sets a className attribute on the outer component */
  className: PropTypes.string,
  /** Close the select menu when the user selects an option */
  closeMenuOnSelect: PropTypes.bool,
  /**
    If `true`, close the select menu when the user scrolls the document/body.
    If a function, takes a standard javascript `ScrollEvent` you return a PropTypes.bool:
    `true` => The menu closes
    `false` => The menu stays open
    This is useful when you have a scrollable modal and want to portal the menu out,
    but want to avoid graphical issues.
  */
  closeMenuOnScroll: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  /** Delimiter used to join multiple values into a single HTML Input value */
  delimiter: PropTypes.string,
  /** Clear all values when the user presses escape AND the menu is closed */
  escapeClearsValue: PropTypes.bool,
  /** Hide the selected option from the menu */
  hideSelectedOptions: PropTypes.bool,
  /** The id to set on the SelectContainer component. */
  id: PropTypes.string,
  /** The value of the search input */
  inputValue: PropTypes.string,
  /** Is the select value clearable */
  clearable: PropTypes.bool,
  /** Is the select disabled */
  disabled: PropTypes.bool,
  /** Is the select in a state of loading (async) */
  loading: PropTypes.bool,
  /** Support multiple selected options */
  multi: PropTypes.bool,
  /** Is the select direction right-to-left */
  pullRight: PropTypes.bool,
  /** Whether to enable search functionality */
  searchable: PropTypes.bool,
  /** Whether the user is able to create new options in the select list */
  creatable: PropTypes.bool,
  /** Whether to load data and execute searches against an external method */
  async: PropTypes.bool,
  /** Async: Text to display when loading options */
  loadingMessage: PropTypes.shape({ inputValue: PropTypes.string }),
  /** Minimum height of the menu before flipping */
  minMenuHeight: PropTypes.number,
  /** Maximum height of the menu before scrolling */
  maxMenuHeight: PropTypes.number,
  /** Whether the menu is open */
  menuIsOpen: PropTypes.bool,
  /** Default placement of the menu in relation to the control. 'auto' will flip
    when there isn't enough space below the control. */
  menuPlacement: PropTypes.oneOf(['top', 'bottom', 'auto']),
  /** Whether to block scroll events when the menu is open */
  menuShouldBlockScroll: PropTypes.bool,
  /** Whether the menu should be scrolled into view when it opens */
  menuShouldScrollIntoView: PropTypes.bool,
  /** Whether the menu should auto size to fit content */
  menuShouldSizeAuto: PropTypes.bool,
  /** How the auto sized to fit menu should be aligned */
  menuAutoSizedAlignment: PropTypes.oneOf(['left', 'right', 'auto-left', 'auto-right']),
  /** Whether the auto sized menu should attempt to limit it's width to still
   * fit in the screen on whichever side has the most space, if it can't
   * directly fit anywhere */
  menuAutoSizedScaleToFit: PropTypes.bool,
  /** Name of the HTML Input (optional - without this, no input will be rendered) */
  name: PropTypes.string,
  /** Text to display when there are no options */
  noOptionsMessage: PropTypes.shape({ inputValue: PropTypes.string }),
  /** Handle blur events on the control */
  onBlur: PropTypes.func,
  /** Handle change events on the select */
  onChange: PropTypes.func,
  /** Handle focus events on the control */
  onFocus: PropTypes.func,
  /** Handle change events on the input */
  onInputChange: PropTypes.func,
  /** Handle key down events on the select */
  onKeyDown: PropTypes.func,
  /** Handle the menu opening */
  onMenuOpen: PropTypes.func,
  /** Handle the menu closing */
  onMenuClose: PropTypes.func,
  /** Fired when the user scrolls to the top of the menu */
  onMenuScrollToTop: PropTypes.func,
  /** Fired when the user scrolls to the bottom of the menu */
  onMenuScrollToBottom: PropTypes.func,
  /** Allows control of whether the menu is opened when the Select is focused */
  openMenuOnFocus: PropTypes.bool,
  /** Allows control of whether the menu is opened when the Select is clicked */
  openMenuOnClick: PropTypes.bool,
  /** Array of options that populate the select menu */
  options: PropTypes.arrayOf(PropTypes.object),
  /** Number of options to jump in menu when page{up|down} keys are used */
  pageSize: PropTypes.number,
  /** Placeholder for the select value */
  placeholder: PropTypes.node,
  /** Sets the tabIndex attribute on the input */
  tabIndex: PropTypes.string,
  /** Select the currently focused option when the user presses tab */
  tabSelectsValue: PropTypes.bool,
  /** The starting value of the select */
  // eslint-disable-next-line react/forbid-prop-types
  defaultValue: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  /** Usable with async. Function that returns a promise, which is the set of
   options to be used once the promise resolves. */
  loadOptions: PropTypes.func,
  /** Usable with async. The default set of options to show before the user
   starts searching. When set to `true`, the results for loadOptions('') will
   be autoloaded. */
  defaultOptions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.bool]),
  /** Usable with async. If cacheOptions is truthy, then the loaded data will
   be cached. The cache will remain until `cacheOptions` changes value. */
  // eslint-disable-next-line react/forbid-prop-types
  cacheOptions: PropTypes.any,
  /** Usable with creatable. Allow options to be created while the `isLoading`
   prop is true. Useful to prevent the "create new ..." option being displayed
   while async results are still being loaded. */
  allowCreateWhileLoading: PropTypes.bool,
  /** Usable with creatable. Determines whether the "create new ..." option
    should be displayed based on the current input value, select value and
    options array. */
  isValidNewOption: PropTypes.func,
  /** Usable with creatable. Returns the data for the new option when it is
    created. Used to display the value, and is passed to `onChange`. */
  getNewOptionData: PropTypes.func,
  /** Usable with creatable. If provided, this will be called with the input
    value when a new option is created, and `onChange` will **not** be called.
    Use this when you need more control over what happens when new options are
    created. */
  onCreateOption: PropTypes.func,
  /** Usable with creatable. Sets the position of the createOption element in
  your options list. Defaults to 'last' */
  createOptionPosition: PropTypes.oneOf(['first', 'last']),
  /** Applies pre defined sizing to the component. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** @deprecated Use 'size' instead. */
  bsSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Applies a pre defined style to the component. */
  mode: PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'default', 'primary']),
  /** @deprecated Use 'mode' instead. */
  bsStyle: PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'default', 'primary']),
};

SelectControl.defaultProps = {
  menuShouldSizeAuto: false,
  menuAutoSizedAlignment: 'auto-left',
  menuAutoSizedScaleToFit: true,
};

// User resizing so the height for IE11 is recalculated when the window size is changed
export default withResizing(SelectControl);

const SelectControlField = withResizing(asField(SelectControl));
export { SelectControlField };
