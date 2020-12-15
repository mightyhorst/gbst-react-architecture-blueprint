import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../other/Base';
import BSDropdownButton from '../../../../vendor/bs3/js/DropdownButton';
import CustomPropTypes from '../../../../utils/CustomProps';

class DropdownButton extends Base {
  render() {
    const { size, mode, bsSize, bsStyle, ...props } = this.props;

    return <BSDropdownButton bsSize={size || bsSize} bsStyle={mode || bsStyle} {...props} />;
  }
}

DropdownButton.propTypes = {
  /** Applies a pre defined style to the component. */
  mode: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'link']),
  /** @deprecated Use 'mode' instead. */
  bsStyle: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'link']),
  /** Applies pre defined sizing to the component. */
  size: PropTypes.oneOf(['lg', 'sm', 'xs']),
  /** @deprecated Use 'size' instead. */
  bsSize: PropTypes.oneOf(['lg', 'sm', 'xs']),
  /** This provides the text for the DropdownButton */
  title: PropTypes.node.isRequired,
  /** Setting this removes the down arrow icon */
  noCaret: PropTypes.bool,
  /**
   * @private
   */
  children: CustomPropTypes.children,
};

DropdownButton.defaultProps = {
  ...BSDropdownButton.defaultProps,
  bsStyle: 'default',
};

export default DropdownButton;
