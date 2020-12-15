Displays a toggle switch, which behaves like a checkbox.

### ToggleSwitch Examples

```js
import { Form, FormGroup, ToggleSwitch, SVGIcon } from 'gel-generic';

<Form>
  <FormGroup>
    <ToggleSwitch id="toggleSwitch-1">
      <span htmlFor="toggleSwitch-1">This is a label</span>
    </ToggleSwitch>
  </FormGroup>

  <FormGroup>
    <ToggleSwitch id="toggleSwitch-2" icons={false}>
      <span htmlFor="toggleSwitch-2">I have no icons</span>
    </ToggleSwitch>
  </FormGroup>

  <FormGroup>
    <ToggleSwitch
      id="toggleSwitch-3"
      icons={{
        checked: <SVGIcon icon="heart" />,
        unchecked: null,
      }}
    >
      <span htmlFor="toggleSwitch-3">I have an SVGIcon</span>
    </ToggleSwitch>
  </FormGroup>

  <FormGroup>
    <ToggleSwitch disabled id="toggleSwitch-4">
      <span htmlFor="toggleSwitch-4">You can't click me</span>
    </ToggleSwitch>
  </FormGroup>

  <FormGroup>
    <ToggleSwitch disabled defaultChecked id="toggleSwitch-5">
      <span htmlFor="toggleSwitch-5">You can't click me but I'm active</span>
    </ToggleSwitch>
  </FormGroup>
</Form>;
```
