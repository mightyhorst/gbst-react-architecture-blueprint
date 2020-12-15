import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Base from '../../other/Base';
import BSButtonToolbar from '../../../../vendor/bs3/js/ButtonToolbar';

class ButtonToolbar extends Base {
  render() {
    const { className: buttonToolbarClassName, pullRight, ...props } = this.props;

    const className = classNames(pullRight ? 'pull-right' : '', buttonToolbarClassName);

    return <BSButtonToolbar className={className} {...props} />;
  }
}

ButtonToolbar.propTypes = {
  pullRight: PropTypes.bool,
  ...BSButtonToolbar.propTypes,
};

ButtonToolbar.defaultProps = {
  pullRight: false,
  ...BSButtonToolbar.defaultProps,
};

export default ButtonToolbar;
