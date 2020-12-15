import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { get } from 'lodash';

import Toggle from 'react-toggle';

import Base from '../../other/Base';
import SVGIcon from '../../display/SVGIcon';
import LoadingSpinner from '../../display/LoadingSpinner';
import { asField } from '../Field/index';

// Wrapper around https://github.com/aaronshaf/react-toggle
class ToggleSwitch extends Base {
  render() {
    const { children, icons: providedIcons, loading, ...props } = this.props;

    let icons = providedIcons;

    if (icons === undefined) {
      const uncheckedIcon = get(icons, 'unchecked') || <SVGIcon icon="cross" />;
      const checkedIcon = get(icons, 'checked') || <SVGIcon icon="tick" />;

      icons = {
        checked: checkedIcon,
        unchecked: uncheckedIcon,
      };
    }

    if (icons && loading) {
      icons = {
        checked: <LoadingSpinner />,
        unchecked: <LoadingSpinner />,
      };
    }

    return (
      <div
        className={classNames('ToggleSwitch', props.className)}
        data-component-name="ToggleSwitch"
      >
        <Toggle {...props} icons={icons} />
        {children}
      </div>
    );
  }
}

ToggleSwitch.propTypes = {
  /**
   * If `true`, the toggle is checked. If `false`, the toggle is unchecked.
   * Use this if you want to treat the toggle as a controlled component.
   * The user will not be able to toggle the switch directly though you
   * can wire it to a variable.
   */
  checked: PropTypes.bool,
  /**
   *  If `true`, the toggle is disabled. If `false`, the toggle is enabled
   */
  disabled: PropTypes.bool,
  /**
   *  If `true`, the toggle switch icons are replaced with a loading spinner.
   */
  loading: PropTypes.bool,
  /**
   * If `true` on initial render, the toggle is checked. If `false` on initial render,
   * the toggle is unchecked. Use this if you want to treat the toggle as an uncontrolled
   * component
   */
  defaultChecked: PropTypes.bool,
  /**
   * Callback function to invoke when the user clicks on the toggle.
   * The function signature should be the following: `function(e) { }`.
   * To get the current checked status from the event, use `e.target.checked`.
   */
  onChange: PropTypes.func,
  /**
   * Callback function to invoke when field has focus.
   * The function signature should be the following: `function(e) { }`
   */
  onFocus: PropTypes.func,
  /**
   * Callback function to invoke when field loses focus.
   * The function signature should be the following: `function(e) { }`
   */
  onBlur: PropTypes.func,
  /**
   * The value of the name attribute of the wrapped `<input>` element
   */
  name: PropTypes.string,
  /**
   * The value of the value attribute of the wrapped `<input>` element.
   * To elaborate, `<ToggleSwitch value="12" />` is equivalent to
   * `<input type="checkbox" value="12" />`
   */
  value: PropTypes.string,
  /**
   * The value of the id attribute of the wrapped `<input>` element
   */
  id: PropTypes.string,
  /**
   * The value of the aria-labelledby attribute of the wrapped `<input>` element
   */
  'aria-labelledby': PropTypes.string,
  /**
   * The value of the aria-label attribute of the wrapped `<input>` element
   */
  'aria-label': PropTypes.string,
  /**
   * If `false`, no icons are displayed. You may also pass custom icon components
   * in `icons={{{checked: <CheckedIcon />, unchecked: <UncheckedIcon />}}`
   */
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
};

export default ToggleSwitch;

// Export validatable variant.
const ToggleSwitchField = asField(ToggleSwitch);
export { ToggleSwitchField };
