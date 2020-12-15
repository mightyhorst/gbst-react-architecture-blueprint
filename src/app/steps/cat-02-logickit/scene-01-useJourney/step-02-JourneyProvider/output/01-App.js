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
];

export const App = () => {
  return (
    <JourneyProvider steps={initialSteps}>
        <ExampleJourney />
    </JourneyProvider>
  );
};
