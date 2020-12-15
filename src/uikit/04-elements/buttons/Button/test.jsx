import React from 'react';
import { mount } from 'enzyme';

import Button from './index';

describe('<Button /> rendering: ', () => {
  const component = mount(<Button>Test</Button>);

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
