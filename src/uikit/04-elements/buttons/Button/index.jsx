import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BSButton from '../../../../vendor/bs3/js/Button';

import Base from '../../other/Base';
import { isString } from '../../../../utils/Comparison';
import SVGIcon from '../../display/SVGIcon';

class Button extends Base {
  render() {
    const {
      activeKey,
      activeHref,
      className: buttonClassName,
      inverse,
      bsSize,
      size,
      bsStyle,
      mode,
      icon,
      iconPosition,
      children,
      ...props
    } = this.props;

    const className = classNames(inverse ? 'btn-inverse' : '', buttonClassName);
    let buttonIconClassName = classNames(
      (isString(icon) || icon) && !children ? 'icon-button' : '',
    );

    if (iconPosition === 'right') {
      buttonIconClassName = classNames(buttonIconClassName, 'right');
    }

    return (
      <BSButton
        className={classNames(className, buttonIconClassName)}
        bsSize={size || bsSize}
        bsStyle={mode || bsStyle}
        {...props}
      >
        {iconPosition === 'right' && children}
        {isString(icon) ? <SVGIcon icon={icon} /> : icon}
        {iconPosition === 'left' && children}
      </BSButton>
    );
  }
}

Button.propTypes = {
  /** Applies a pre defined style to the component. */
  mode: PropTypes.oneOf([
    'success',
    'warning',
    'danger',
    'info',
    'default',
    'primary',
    'secondary',
    'link',
  ]),
  /** @deprecated Use 'mode' instead. */
  bsStyle: PropTypes.oneOf([
    'success',
    'warning',
    'danger',
    'info',
    'default',
    'primary',
    'secondary',
    'link',
  ]),
  /** Applies pre defined sizing to the component. */
  size: PropTypes.oneOf(['xl', 'lg', 'sm', 'xs', null]),
  /** @deprecated Use 'size' instead. */
  bsSize: PropTypes.oneOf(['lg', 'sm', 'xs', null]),
  /** Manually set the visual state of the button to :active. */
  active: PropTypes.bool,
  /** Disables the Button, preventing mouse events, even if the underlying
  component is an <a> element. */
  disabled: PropTypes.bool,
  /** Spans the full width of the Button parent */
  block: PropTypes.bool,
  onClick: PropTypes.func,
  componentClass: PropTypes.elementType,
  /** Providing a href will render an <a> element, styled as a button. */
  href: PropTypes.string,
  /** Defines HTML button type attribute. Set to 'button' by default. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** Alternates the apperance of the button to suit and inverse background colour. */
  inverse: PropTypes.bool,
  /** Icon name or component to display inside the Button */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Position of the icon, left or right, left by default. */
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

Button.defaultProps = {
  ...BSButton.defaultProps,
  inverse: false,
  bsSize: null,
  bsStyle: 'default',
  icon: null,
  iconPosition: 'left',
};

export default Button;
