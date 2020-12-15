import React from 'react';
import { mount } from 'enzyme';

import LoadingButton from './index';

describe('<LoadingButton /> rendering: ', () => {
  const component = mount(<LoadingButton loading>Test</LoadingButton>);

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
