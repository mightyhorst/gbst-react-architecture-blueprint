import React from 'react';
import PropTypes from 'prop-types';

import Base from '../../other/Base';
import ToggleButton from './ToggleButton';
import BSToggleButtonGroup from '../../../../vendor/bs3/js/ToggleButtonGroup';

class ToggleButtonGroup extends Base {
  render() {
    const { block, ...props } = this.props;

    return <BSToggleButtonGroup className={{ block }} {...props} />;
  }
}

ToggleButtonGroup.propTypes = {
  /**
   * An HTML `<input>` name for each child button.
   *
   * __Required if `type` is set to `'radio'`__
   */
  name: PropTypes.string,

  /**
   * Sets the group to be full width.
   */
  block: PropTypes.bool,

  /**
   * The value, or array of values, of the active (pressed) buttons
   *
   * @controllable onChange
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),

  /**
   * Callback fired when a button is pressed, depending on whether the `type`
   * is `'radio'` or `'checkbox'`, `onChange` will be called with the value or
   * array of active values
   *
   * @controllable values
   */
  onChange: PropTypes.func,

  /**
   * The input `type` of the rendered buttons, determines the toggle behavior
   * of the buttons
   */
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
};

ToggleButtonGroup.defaultProps = {
  ...BSToggleButtonGroup.defaultProps,
  block: false,
};

ToggleButtonGroup.Button = ToggleButton;

export default ToggleButtonGroup;
