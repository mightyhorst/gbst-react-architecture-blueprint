For a nicer experience with checked state management use the `<ToggleButtonGroup>` instead of a disparate group of ToggleButton components. The group behaves as a form component, where the value is an array of the selected values for a named checkbox group or the single toggled value in a similarly named radio group.

### Examples

Group ToggleButtons within a ToggleButtonGroup, the ToggleButtonGroup will contain the `type` and `name` for the inner ToggleButtons, which will only have a `value` set on them.

```js
import { ToggleButtonGroup } from 'gel-generic';

<React.Fragment>
  <h5>Checkbox (Multiple Selections)</h5>
  <ToggleButtonGroup type="checkbox" name="checkbox">
    <ToggleButtonGroup.Button value={1}>Checkbox Button #1</ToggleButtonGroup.Button>
    <ToggleButtonGroup.Button value={2}>Checkbox Button #2</ToggleButtonGroup.Button>
  </ToggleButtonGroup>

  <h5>Radio (Single Selection)</h5>
  <ToggleButtonGroup type="radio" name="radio">
    <ToggleButtonGroup.Button value={1}>Radio Button #1</ToggleButtonGroup.Button>
    <ToggleButtonGroup.Button value={2}>Radio Button #2</ToggleButtonGroup.Button>
  </ToggleButtonGroup>
</React.Fragment>;
```

### Style Examples

A ToggleButton can be made full width with the `block` prop. A ToggleButton can be set to `disabled` or `checked` by setting the respective props to true. Custom Labels can also be passed in for both checked and unchecked state by setting `checkedLabel` and `uncheckedLabel` respectively.

The style of the button is dependent on `mode`. The button will use the prop `modeChecked` when in a checked state and `modeUnchecked` in an unchecked state.

```js
import { ToggleButtonGroup } from 'gel-generic';

<React.Fragment>
  <h5>Default</h5>
  <ToggleButtonGroup type="checkbox" name="checkbox">
    <ToggleButtonGroup.Button />
  </ToggleButtonGroup>

  <h5>No Icon</h5>
  <ToggleButtonGroup type="checkbox" name="checkbox">
    <ToggleButtonGroup.Button hasIcons={false} />
  </ToggleButtonGroup>

  <h5>Block</h5>
  <ToggleButtonGroup type="checkbox" name="checkbox" block>
    <ToggleButtonGroup.Button value={1}>One</ToggleButtonGroup.Button>
    <ToggleButtonGroup.Button value={2}>Two</ToggleButtonGroup.Button>
    <ToggleButtonGroup.Button value={3}>Three</ToggleButtonGroup.Button>
  </ToggleButtonGroup>

  <h5>Checked (Multiple Values)</h5>
  <ToggleButtonGroup type="checkbox" name="checkbox" defaultValue={[1, 3]}>
    <ToggleButtonGroup.Button value={1}>One</ToggleButtonGroup.Button>
    <ToggleButtonGroup.Button value={2}>Two</ToggleButtonGroup.Button>
    <ToggleButtonGroup.Button value={3}>Three</ToggleButtonGroup.Button>
  </ToggleButtonGroup>

  <h5>Checked (Single Value)</h5>
  <ToggleButtonGroup type="radio" name="radio" defaultValue={2}>
    <ToggleButtonGroup.Button value={1}>One</ToggleButtonGroup.Button>
    <ToggleButtonGroup.Button value={2}>Two</ToggleButtonGroup.Button>
    <ToggleButtonGroup.Button value={3}>Three</ToggleButtonGroup.Button>
  </ToggleButtonGroup>

  <h5>Disabled</h5>
  <ToggleButtonGroup type="checkbox" name="checkbox" defaultValue={[2]}>
    <ToggleButtonGroup.Button value={1} disabled />
    <ToggleButtonGroup.Button value={2} disabled />
  </ToggleButtonGroup>

  <h5>Custom On and Off Labels</h5>
  <ToggleButtonGroup type="checkbox" name="checkbox">
    <ToggleButtonGroup.Button checked checkedLabel="ON" uncheckedLabel="OFF" value={1} />
    <ToggleButtonGroup.Button checkedLabel="ON" uncheckedLabel="OFF" value={2} />
  </ToggleButtonGroup>

  <h5>Custom Styling</h5>
  <ToggleButtonGroup type="checkbox" name="checkbox">
    <ToggleButtonGroup.Button checked modeChecked="danger" modeUnchecked="secondary" value={1} />
    <ToggleButtonGroup.Button modeChecked="danger" modeUnchecked="secondary" value={2} />
  </ToggleButtonGroup>
</React.Fragment>;
```

### Table Example

```js
import { ToggleButtonGroup, Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'ID',
  },
  {
    dataField: 'name',
    text: 'Name',
  },
  {
    dataField: 'actions',
    text: '',
    formatter: (cell, row) => (
      <ToggleButtonGroup type="checkbox">
        <ToggleButtonGroup.Button value={1} size={row.size} />
      </ToggleButtonGroup>
    ),
  },
];

<Table id="buttons-table" keyField="id" data={tableInputTestData} columns={columnData} />;
```
