# 💅 UIKit - Step 3: Add Compounds

### 3.2. Refactor Form Wells to their own components

The JSX is getting a little long, let's refactor the wells to their own components to keep things tidy

```js
import {
  Page,
  Journey,
} from './uikit';

import {
  ProductWell,
  AdvisorWell,
  PersonalDetailsWell,
} from './

<Page>
  <Journey>
    <JourneyNav>
        <JourneyNavStep step={0}>

        </JourneyNavStep>
        <JourneyNavStep step={1}>

        </JourneyNavStep>
        <JourneyNavStep step={2}>

        </JourneyNavStep>
    </JourneyNav>
    <JourneyContent>
        <JourneyStep step={0}>
            <ProductWell />
            <AdvisorWell />
            <PersonalDetailsWell />
        </JourneyStep>
        <JourneyStep step={1}>
            <JourneyWell>
                <ExampleTable />
            </JourneyWell>
        </JourneyStep>
        <JourneyStep step={2}>
            <JourneyWell>
                <SummaryWell />
            </JourneyWell>
        </JourneyStep>
    </JourneyContent>
  </Journey>
</Page>
```

It's important to note that we can still break up and abstract React components, but we should keep them as JSX compound components rather than config's where possible.

```js
export function ProductWell({ children }) {
  return <JourneyWell>{children}</JourneyWell>;
}
```

```js
export function AdvisorWell({ children }) {
  return <JourneyWell>{children}</JourneyWell>;
}
```

```js
export function PersonalDetailsWell({ children }) {
  return <JourneyWell>{children}</JourneyWell>;
}
```

```js
export function ExampleTable({ children }) {
  return <JourneyWell>{children}</JourneyWell>;
}
```

```js
export function SummaryWell({ children }) {
  return <JourneyWell>{children}</JourneyWell>;
}
```
