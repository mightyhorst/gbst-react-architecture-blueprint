A SplitToggle is a dropdown arrow button. It is used as the dropdown arrow in a SplitButton.

### SplitToggle Style Examples

You can include an Aria label for the SplitToggle by using the `toggleLabel` prop on a SplitButton.

```js
import { ButtonToolbar, SplitToggle, SplitButton, MenuItem } from 'gel-generic';

<ButtonToolbar>
  <SplitToggle></SplitToggle>

  <SplitButton
    id="splitToggleButton-1"
    mode="default"
    title="Default Split Button"
    toggleLabel="Toggle"
  >
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </SplitButton>
</ButtonToolbar>;
```
