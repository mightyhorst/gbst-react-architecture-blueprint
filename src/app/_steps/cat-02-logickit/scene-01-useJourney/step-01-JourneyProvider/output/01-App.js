import React from 'react';

import {
  JourneyProvider,
} from './logickit';

import { ExampleJourney } from './02-ExampleJourney';

const initialSteps = [
  {
    title: 'Step 1'
  },
  {
    title: 'Step 2'
  },
  {
    title: 'Summary'
  },
];

export const App = () => {
  return (
    <JourneyProvider steps={initialSteps}>
        <ExampleJourney />
    </JourneyProvider>
  );
};

export default App;
