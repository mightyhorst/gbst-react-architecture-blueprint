# 💅 UIKit - Step 3: Add Compounds

### 3.1. Add Form Wells 
```js
import {
  Page, 
  Journey, 
} from './uikit';

<Page>
  <Journey>
    <Journey.Nav>
        <JourneyNavStep step={0}>

        </Journey.NavStep>
        <Journey.NavStep step={1}>
        
        </Journey.NavStep>
        <Journey.NavStep step={2}>
        
        </Journey.NavStep>
    </Journey.Nav>
    <Journey.Content>
        <Journey.Step step={0}>
            <Journey.Well>
            
            </Journey.Well>
        </Journey.Step>
        <Journey.Step step={1}>
            <Journey.Well>
            
            </Journey.Well>
        </Journey.Step>
        <Journey.Step step={2}>
            <Journey.Well>
            
            </Journey.Well>
        </Journey.Step>
    </Journey.Content> 
  </Journey>
</Page>
```

### 3.2. Refactor Form Wells to their own components
The JSX is getting a little long, let's refactor the wells to their own components to keep things tidy 

```js
import {
  Page, 
  Journey, 
  JourneyNav, 
  JourneyContent, 
  JourneyStep, 
  JourneyNavStep,
  JourneyWell,
} from './uikit';

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
            <JourneyWell>
            
            </JourneyWell>
        </JourneyStep>
        <JourneyStep step={1}>
            <JourneyWell>
            
            </JourneyWell>
        </JourneyStep>
        <JourneyStep step={2}>
            <JourneyWell>
            
            </JourneyWell>
        </JourneyStep>
    </JourneyContent> 
  </Journey>
</Page>
```

