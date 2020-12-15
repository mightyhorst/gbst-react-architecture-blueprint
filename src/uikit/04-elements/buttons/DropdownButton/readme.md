Dropdown buttons can be used alongside regular buttons in a ButtonToolbar or a ButtonGroup. For the Dropdown Label, use the `title` prop. For the dropdown items, use `<MenuItem />`.

### DropdownButton Style Examples

Dropdowns are defined by the `mode` and `size` props on the DropdownButton tag, just as they are on a regular Button.

```js
import { ButtonToolbar, DropdownButton, MenuItem } from 'gel-generic';

<ButtonToolbar>
  <DropdownButton id="dropdownButton-1" mode="default" size="lg" title="Default Large Dropdown">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </DropdownButton>

  <DropdownButton id="dropdownButton-2" mode="primary" size="lg" title="Primary Large Dropdown">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </DropdownButton>

  <DropdownButton id="dropdownButton-3" mode="success" size="sm" title="Success Small Dropdown">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </DropdownButton>

  <DropdownButton id="dropdownButton-4" mode="info" size="sm" title="Info Small Dropdown">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </DropdownButton>

  <DropdownButton id="dropdownButton-5" mode="warning" size="xs" title="Warning X-Small Dropdown">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </DropdownButton>

  <DropdownButton id="dropdownButton-6" mode="danger" size="xs" title="Danger X-Small Dropdown">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </DropdownButton>

  <DropdownButton id="dropdownButton-7" mode="link" size="xs" title="Link X-Small Dropdown">
    <MenuItem>Item #1</MenuItem>
    <MenuItem>Item #2</MenuItem>
  </DropdownButton>
</ButtonToolbar>;
```

### NoCaret Example

If you set the `noCaret` prop, the dropdown arrow will not appear on the button.

```js
import { DropdownButton, MenuItem } from 'gel-generic';

<DropdownButton
  id="dropdownButton-noCaret"
  mode="success"
  size="lg"
  title="No Caret DropdownButton"
  noCaret
>
  <MenuItem>Item #1</MenuItem>
  <MenuItem>Item #2</MenuItem>
</DropdownButton>;
```
