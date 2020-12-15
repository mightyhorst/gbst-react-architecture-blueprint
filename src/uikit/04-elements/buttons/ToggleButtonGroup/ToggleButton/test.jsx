import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './index';

it('it renders', () => {
  const div = document.createElement('div');
  function doTheThing() {}
  ReactDOM.render(
    <ToggleButton onChange={doTheThing} value={1}>
      Test
    </ToggleButton>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
