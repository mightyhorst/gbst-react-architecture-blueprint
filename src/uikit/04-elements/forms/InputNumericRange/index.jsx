import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Base from '../../other/Base';
import InputGroup from '../InputGroup';
import InputNumeric from '../InputNumeric';

class InputNumericRange extends Base {
  render() {
    const { className, startValue, endValue, suffix, prefix, size, ...props } = this.props;

    // Provide overrides to the InputGroup plugin since it can't calcualte
    // whether it has a prefix/suffix from this structure.
    const hasPrefix = !!prefix;
    const hasSuffix = !!suffix;

    return (
      <InputGroup
        hasPrefix={hasPrefix}
        hasSuffix={hasSuffix}
        className={classNames('InputNumericRange', this.props.className)}
        bsSize={size}
      >
        <InputNumeric
          {...props}
          prefix={prefix}
          suffix={null}
          value={this.props.startValue}
          size={size}
        />
        <InputGroup.Addon bsSize={size}>to</InputGroup.Addon>
        <InputNumeric
          {...props}
          prefix={null}
          suffix={suffix}
          value={this.props.endValue}
          size={size}
        />
      </InputGroup>
    );
  }
}

InputNumericRange.propTypes = {
  className: PropTypes.string,
  /** The default start value. */
  startValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The default end value. */
  endValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The minimum decimal places allowed for inputs. Will be auto set to this if less are used. */
  minDecimalPlaces: PropTypes.number,
  /** The maximum decimal places allowed for inputs. Will be auto set to this if more are used. */
  maxDecimalPlaces: PropTypes.number,
  /** The minumum number allowed by the input. Will be auto set to this if a
  smaller input is entered. */
  min: PropTypes.number,
  /** The maximum number allowed by the input. Will be auto set to this if a
  larger input is entered. */
  max: PropTypes.number,
  /** Used for formatting foreign numbers. More info:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString */
  locale: PropTypes.string,
  /** Applies pre defined sizing to the component. */
  size: PropTypes.oneOf(['sm', 'lg', null]),
};

InputNumericRange.defaultProps = {
  'data-component-name': 'InputNumericRange',
  size: null,
};

export default InputNumericRange;
