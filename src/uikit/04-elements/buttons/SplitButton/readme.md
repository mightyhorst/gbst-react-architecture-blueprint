A Split Button comprises of a primary link or action, and a dropdown to secondary actions.

Split buttons can be used alongside regular buttons in a ButtonToolbar or a ButtonGroup. For primary link in the split button, include the link in the `href` prop and the label in the `title` prop on the SplitButton element. For the additional links, use `<MenuItem />`.

### Examples

```js
import { ButtonToolbar, SplitButton, MenuItem } from 'gel-generic';

<React.Fragment>
  <ButtonToolbar>
    <SplitButton id="splitButton-success" mode="success" title="Success">
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>

    <SplitButton id="splitButton-info" mode="info" title="Info">
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>

    <SplitButton id="splitButton-warning" mode="warning" title="Warning">
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>

    <SplitButton id="splitButton-danger" mode="danger" title="Danger">
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>
  </ButtonToolbar>

  <br />
  <br />

  <ButtonToolbar>
    <SplitButton id="splitButton-default" title="Default">
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>

    <SplitButton id="splitButton-primary" mode="primary" title="Primary">
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>

    <SplitButton id="splitButton-secondary" mode="secondary" title="Secondary">
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>

    <SplitButton id="splitButton-link" mode="link" title="Link">
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>
  </ButtonToolbar>

  <br />
  <br />

  <ButtonToolbar style={{ backgroundColor: '#212737', padding: '15px' }}>
    <SplitButton id="splitButton-defaultInverse" title="Default" inverse>
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>

    <SplitButton id="splitButton-primaryInverse" mode="primary" title="Primary" inverse>
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>

    <SplitButton id="splitButton-secondaryInverse" mode="secondary" title="Secondary" inverse>
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>

    <SplitButton id="splitButton-linkInverse" mode="link" title="Link" inverse>
      <MenuItem>Item #1</MenuItem>
      <MenuItem>Item #2</MenuItem>
    </SplitButton>
  </ButtonToolbar>
</React.Fragment>;
```

### Size Examples

SplitButtons are defined by the `mode` and `size` props on the SplitButton tag, just as they are on a regular Button.

```js
import { ButtonToolbar, SplitButton, MenuItem } from 'gel-generic';

<ButtonToolbar>
  <SplitButton id="splitButton-lg" size="lg" title="Default Lg Split Btn">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </SplitButton>

  <SplitButton id="splitButton-md" title="Default Split Btn">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </SplitButton>

  <SplitButton id="splitButton-sm" size="sm" title="Default Sm Split Btn">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </SplitButton>

  <SplitButton id="splitButton-xs" size="xs" title="Default Xs Split Btn">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </SplitButton>
</ButtonToolbar>;
```
