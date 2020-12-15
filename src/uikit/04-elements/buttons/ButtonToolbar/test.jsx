import React from 'react';
import { mount } from 'enzyme';

import ButtonToolbar from './index';

describe('<ButtonToolbar /> rendering: ', () => {
  const component = mount(<ButtonToolbar>Test</ButtonToolbar>);

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
