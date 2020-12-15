import React from 'react';
import { mount } from 'enzyme';

import DropdownButton from './index';

describe('<DropdownButton /> rendering: ', () => {
  const component = mount(
    <DropdownButton id="test" title="test">
      Test
    </DropdownButton>,
  );

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
