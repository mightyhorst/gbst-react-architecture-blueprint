import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../other/Base';
import BSCloseButton from '../../../../vendor/bs3/js/CloseButton';

class CloseButton extends Base {
  render() {
    const { ...props } = this.props;

    return <BSCloseButton {...props} />;
  }
}

CloseButton.propTypes = {
  /** Label for Screen Readers */
  label: PropTypes.string.isRequired,
  /** Function that is triggered when CloseButton is clicked. */
  onClick: PropTypes.func,
};

CloseButton.defaultProps = { ...BSCloseButton.defaultProps };

export default CloseButton;
