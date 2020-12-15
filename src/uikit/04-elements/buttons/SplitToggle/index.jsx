import React from 'react';
import Base from '../../other/Base';
import BSSplitToggle from '../../../../vendor/bs3/js/SplitToggle';

class SplitToggle extends Base {
  render() {
    const { ...props } = this.props;

    return <BSSplitToggle {...props} />;
  }
}

SplitToggle.defaultProps = { ...BSSplitToggle.defaultProps };

export default SplitToggle;
