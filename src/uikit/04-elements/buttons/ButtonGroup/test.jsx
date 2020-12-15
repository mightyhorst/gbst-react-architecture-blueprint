import React from 'react';
import { mount } from 'enzyme';

import ButtonGroup from './index';

describe('<ButtonGroup /> rendering: ', () => {
  const component = mount(<ButtonGroup>Test</ButtonGroup>);

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
