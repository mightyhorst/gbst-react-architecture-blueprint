import React from 'react';
import { mount } from 'enzyme';

import CloseButton from './index';

describe('<CloseButton /> rendering: ', () => {
  const component = mount(<CloseButton />);

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
