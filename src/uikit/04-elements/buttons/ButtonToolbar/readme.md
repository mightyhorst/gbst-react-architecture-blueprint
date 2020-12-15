Because React doesn't output newlines between elements, buttons on the same line are displayed flush against each other. To preserve the spacing between multiple inline buttons, wrap your button group in `<ButtonToolbar />`

### Buttons not in a ButtonToolbar

Note that the buttons sit right up next to each other.

```js
import { Button } from 'gel-generic';

<React.Fragment>
  <Button mode="default">Button #1</Button>
  <Button mode="default">Button #2</Button>
  <Button mode="default">Button #3</Button>
</React.Fragment>;
```

### Buttons in a ButtonToolbar

Buttons are now appropriately spaced.

```js
import { Button, ButtonToolbar } from 'gel-generic';

<ButtonToolbar>
  <Button mode="default">Button #1</Button>
  <Button mode="default">Button #2</Button>
  <Button mode="default">Button #3</Button>
</ButtonToolbar>;
```

### Right Aligned Buttons

Buttons are now appropriately spaced.

```js
import { Button, ButtonToolbar } from 'gel-generic';

<ButtonToolbar pullRight>
  <Button mode="default">Button #1</Button>
  <Button mode="default">Button #2</Button>
  <Button mode="default">Button #3</Button>
</ButtonToolbar>;
```
