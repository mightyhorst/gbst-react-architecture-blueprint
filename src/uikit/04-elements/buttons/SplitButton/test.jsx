import React from 'react';
import { mount } from 'enzyme';

import SplitButton from './index';

describe('<SplitButton /> rendering: ', () => {
  const component = mount(
    <SplitButton title="test" id="test">
      Test
    </SplitButton>,
  );

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
