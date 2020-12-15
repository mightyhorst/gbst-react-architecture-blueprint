You can group a series of buttons together by wrapping them inside a Button Group. Button groups can appear either vertical, justified or in a block depending on the prop used.

### Examples

```js
import { Button, ButtonToolbar, ButtonGroup } from 'gel-generic';

<ButtonToolbar>
  <ButtonGroup>
    <Button mode="success">Success</Button>
    <Button mode="success">Success</Button>
    <Button mode="success">Success</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button mode="info">Info</Button>
    <Button mode="info">Info</Button>
    <Button mode="info">Info</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button mode="warning">Warning</Button>
    <Button mode="warning">Warning</Button>
    <Button mode="warning">Warning</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button mode="danger">Danger</Button>
    <Button mode="danger">Danger</Button>
    <Button mode="danger">Danger</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button>Default</Button>
    <Button>Default</Button>
    <Button>Default</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button mode="primary">Primary</Button>
    <Button mode="primary">Primary</Button>
    <Button mode="primary">Primary</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button mode="secondary">Secondary</Button>
    <Button mode="secondary">Secondary</Button>
    <Button mode="secondary">Secondary</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button mode="link">Link</Button>
    <Button mode="link">Link</Button>
    <Button mode="link">Link</Button>
  </ButtonGroup>
</ButtonToolbar>;
```

### Vertical Examples

```js
import { Button, ButtonToolbar, ButtonGroup } from 'gel-generic';

<ButtonToolbar>
  <ButtonGroup vertical>
    <Button mode="success">Success</Button>
    <Button mode="success">Success</Button>
    <Button mode="success">Success</Button>
  </ButtonGroup>

  <ButtonGroup vertical>
    <Button mode="info">Info</Button>
    <Button mode="info">Info</Button>
    <Button mode="info">Info</Button>
  </ButtonGroup>

  <ButtonGroup vertical>
    <Button mode="warning">Warning</Button>
    <Button mode="warning">Warning</Button>
    <Button mode="warning">Warning</Button>
  </ButtonGroup>

  <ButtonGroup vertical>
    <Button mode="danger">Danger</Button>
    <Button mode="danger">Danger</Button>
    <Button mode="danger">Danger</Button>
  </ButtonGroup>

  <ButtonGroup vertical>
    <Button>Default</Button>
    <Button>Default</Button>
    <Button>Default</Button>
  </ButtonGroup>

  <ButtonGroup vertical>
    <Button mode="primary">Primary</Button>
    <Button mode="primary">Primary</Button>
    <Button mode="primary">Primary</Button>
  </ButtonGroup>

  <ButtonGroup vertical>
    <Button mode="secondary">Secondary</Button>
    <Button mode="secondary">Secondary</Button>
    <Button mode="secondary">Secondary</Button>
  </ButtonGroup>

  <ButtonGroup vertical>
    <Button mode="link">Link</Button>
    <Button mode="link">Link</Button>
    <Button mode="link">Link</Button>
  </ButtonGroup>
</ButtonToolbar>;
```

### Size Examples

```js
import { Button, ButtonToolbar, ButtonGroup } from 'gel-generic';

<ButtonToolbar>
  <ButtonGroup>
    <Button size="lg">Large Button #1</Button>
    <Button size="lg">Large Button #2</Button>
    <Button size="lg">Large Button #3</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button>Medium Button #1</Button>
    <Button>Medium Button #2</Button>
    <Button>Medium Button #3</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button size="sm">Small Button #1</Button>
    <Button size="sm">Small Button #2</Button>
    <Button size="sm">Small Button #3</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button size="xs">Extra Small Button #1</Button>
    <Button size="xs">Extra Small Button #2</Button>
    <Button size="xs">Extra Small Button #3</Button>
  </ButtonGroup>
</ButtonToolbar>;
```

### Button Group Justified

Button Groups can appear justified by setting the `justified` prop to true.

```js
import { Button, ButtonGroup } from 'gel-generic';

<ButtonGroup justified>
  <Button mode="default">Justified Button #1</Button>
  <Button mode="default">Justified Button #2</Button>
  <Button mode="default">Justified Button #3</Button>
</ButtonGroup>;
```

### Button Group Block

Button Groups can appear in a block by setting the `block` prop to true. Works well paired with `vertical`.

```js
import { Button, ButtonGroup } from 'gel-generic';

<ButtonGroup block vertical>
  <Button mode="default">Block Button #1</Button>
  <Button mode="default">Block Button #2</Button>
  <Button mode="default">Block Button #3</Button>
</ButtonGroup>;
```
