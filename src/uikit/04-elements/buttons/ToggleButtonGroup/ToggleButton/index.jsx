import React from 'react';
import PropTypes from 'prop-types';

import Base from '../../../other/Base';
import BSToggleButton from '../../../../../vendor/bs3/js/ToggleButton';

import SVGIcon from '../../../display/SVGIcon';

class ToggleButton extends Base {
  render() {
    const {
      children,
      checkedLabel,
      uncheckedLabel,
      modeChecked,
      checked,
      bsStyleChecked,
      modeUnchecked,
      bsStyleUnchecked,
      hasIcons,
      ...props
    } = this.props;

    return (
      <BSToggleButton
        checked={checked}
        bsStyle={checked ? modeChecked || bsStyleChecked : modeUnchecked || bsStyleUnchecked}
        {...props}
      >
        {checked && (
          <>
            {hasIcons ? <SVGIcon icon="tick" /> : null}
            {children || checkedLabel}
          </>
        )}

        {!checked && (
          <>
            {hasIcons ? <SVGIcon icon="plus" /> : null}
            {children || uncheckedLabel}
          </>
        )}
      </BSToggleButton>
    );
  }
}

ToggleButton.propTypes = {
  /**
   * The `<input>` `type`
   * @type {[type]}
   */
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /**
   * The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name: PropTypes.string,
  /**
   * The value of the input, and unique identifier in the ToggleButtonGroup
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The className for the ToggleButton element
   */
  className: PropTypes.string,
  /**
   * The checked state of the input
   */
  checked: PropTypes.bool,
  /**
   * The disabled state of both the label and input
   */
  disabled: PropTypes.bool,
  /**
   * Function executed when the ToggleButton is toggled on/off
   */
  onChange: PropTypes.func,
  /**
   * The label that is displayed when the ToggleButton is in a checked or on state
   */
  checkedLabel: PropTypes.string,
  /**
   * The label that is displayed when the ToggleButton is in an unchecked or off state
   */
  uncheckedLabel: PropTypes.string,
  /**
   * @deprecated Use 'modeChecked' instead.
   */
  bsStyleChecked: PropTypes.string,
  /**
   * The style of the Button when the ToggleButton is in a checked or on state
   */
  modeChecked: PropTypes.string,
  /**
   * @deprecated Use 'modeUnchecked' instead.
   */
  bsStyleUnchecked: PropTypes.string,
  /**
   * The style of the Button when the ToggleButton is in an unchecked or off state
   */
  modeUnchecked: PropTypes.string,
  /**
   * Whether or not icons should be rendered.
   */
  hasIcons: PropTypes.bool,
};

ToggleButton.defaultProps = {
  className: '',
  block: false,
  checked: false,
  disabled: false,
  onChange: null,
  checkedLabel: 'Added',
  uncheckedLabel: 'Add',
  bsStyleChecked: 'success',
  bsStyleUnchecked: 'primary',
  modeChecked: null,
  modeUnchecked: null,
  hasIcons: true,
};

export default ToggleButton;
