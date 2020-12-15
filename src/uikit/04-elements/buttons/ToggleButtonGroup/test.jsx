import React from 'react';
import { mount } from 'enzyme';

import ToggleButtonGroup from './index';

describe('<ToggleButtonGroup /> rendering: ', () => {
  const component = mount(
    <ToggleButtonGroup name="test" type="radio">
      Test
    </ToggleButtonGroup>,
  );

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
