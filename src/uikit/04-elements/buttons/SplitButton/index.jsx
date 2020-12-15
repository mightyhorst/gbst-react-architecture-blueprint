import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../other/Base';
import BSSplitButton from '../../../../vendor/bs3/js/SplitButton';
import CustomPropTypes from '../../../../utils/CustomProps';

class SplitButton extends Base {
  render() {
    const { size, mode, bsSize, bsStyle, ...props } = this.props;

    return <BSSplitButton bsSize={size || bsSize} bsStyle={mode || bsStyle} {...props} />;
  }
}

SplitButton.propTypes = {
  children: CustomPropTypes.children,
  /** Applies a pre defined style to the component. */
  mode: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
  ]),
  /** @deprecated Use 'mode' instead. */
  bsStyle: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
  ]),
  /** Applies pre defined sizing to the component. */
  size: PropTypes.oneOf(['lg', 'sm', 'xs']),
  /** @deprecated Use 'size' instead. */
  bsSize: PropTypes.oneOf(['lg', 'sm', 'xs']),
  /** Link for the primary action */
  href: PropTypes.string,
  onClick: PropTypes.func,
  /** The text for the SplitButton */
  title: PropTypes.node.isRequired,
  /** Accessible label for the toggle; the value of `title` if not specified. */
  toggleLabel: PropTypes.string,
};

SplitButton.defaultProps = {
  ...BSSplitButton.defaultProps,
  bsStyle: 'default',
};

SplitButton.Toggle = BSSplitButton.Toggle;

export default SplitButton;
