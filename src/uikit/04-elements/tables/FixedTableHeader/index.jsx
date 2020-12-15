import React from 'react';
import classnames from 'classnames';

import Base from '../../other/Base';

const FixedTableHeader = WrappedComponent =>
  class extends Base {
    render() {
      const { wrapperClasses, ...otherProps } = this.props;
      return (
        <WrappedComponent
          wrapperClasses={classnames('FixedTable FixedTableHeader', wrapperClasses)}
          {...otherProps}
        />
      );
    }
  };

export default FixedTableHeader;
