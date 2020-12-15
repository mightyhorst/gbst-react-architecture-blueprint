import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../other/Base';
import BSButtonGroup from '../../../../vendor/bs3/js/ButtonGroup';

class ButtonGroup extends Base {
  render() {
    const { ...props } = this.props;

    return <BSButtonGroup {...props} />;
  }
}

ButtonGroup.propTypes = {
  /** Display buttons vertically. */
  vertical: PropTypes.bool,
  /** Display buttons justified. */
  justified: PropTypes.bool,
  /** Display block buttons; only useful when used with the "vertical" prop. */
  block: PropTypes.bool,
};

ButtonGroup.defaultProps = { ...BSButtonGroup.defaultProps };

export default ButtonGroup;
