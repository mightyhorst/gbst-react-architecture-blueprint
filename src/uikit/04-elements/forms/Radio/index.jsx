import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Base from '../../other/Base';
import BSRadio from '../../../../vendor/bs3/js/Radio';

class Radio extends Base {
  render() {
    const { children, className: providedClassName, size, ...props } = this.props;

    const className = classNames(
      !children ? 'empty' : null,
      size === 'lg' ? 'radio-lg' : null,
      size === 'sm' ? 'radio-sm' : null,
      providedClassName,
    );

    return (
      <BSRadio className={className} {...props}>
        {children}
        <div className="check" />
      </BSRadio>
    );
  }
}

Radio.propTypes = {
  /** If set, the checkbox is not surrounded by a div. */
  inline: PropTypes.bool,
  /** Sets the checkbox to disabled. */
  disabled: PropTypes.bool,
  /** Sets a tooltip title on hover of the checkbox. */
  title: PropTypes.string,
  /** Applies pre defined sizing to the component. */
  size: PropTypes.oneOf(['sm', 'lg', null]),
  /**
   * Only valid if `inline` is not set.
   */
  validationState: PropTypes.oneOf(['success', 'warning', 'error', 'info', null]),
  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Radio inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: PropTypes.func,
};

Radio.defaultProps = {
  ...BSRadio.defaultProps,
  size: null,
};

export default Radio;
