import React from 'react';
import { mount } from 'enzyme';

import SplitToggle from './index';

describe('<SplitToggle /> rendering: ', () => {
  const component = mount(<SplitToggle>Test</SplitToggle>);

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
