Displays the same currency input but with a "from" and "to" field.

### InputCurrencyRange Examples

`InputCurrencyRange` functions much the same way as `InputCurrency`, and as such has the same props, see the examples in `InputCurrency` for additional customisations.

```js
import { FormGroup, ControlLabel, InputCurrencyRange } from 'gel-generic';

<React.Fragment>
  <FormGroup>
    <ControlLabel>Currency Range (USD)</ControlLabel>
    <InputCurrencyRange />
  </FormGroup>

  <FormGroup>
    <ControlLabel>With Prefix</ControlLabel>
    <InputCurrencyRange prefix="ABC" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>No Suffix</ControlLabel>
    <InputCurrencyRange suffix="" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Disabled</ControlLabel>
    <InputCurrencyRange startValue={5000} endValue={10000} disabled />
  </FormGroup>
</React.Fragment>;
```

### Validation Examples

```js
import { FormGroup, ControlLabel, InputCurrencyRange, InlineError } from 'gel-generic';

<React.Fragment>
  <FormGroup validationState="success">
    <ControlLabel>A currency control with an success state and message</ControlLabel>
    <InputCurrencyRange startValue={5000} endValue={10000} />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>A currency control with an error state and message</ControlLabel>
    <InputCurrencyRange prefix="ABC" />
    <InlineError>This is an error message!</InlineError>
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>A currency control with an warning state and message</ControlLabel>
    <InputCurrencyRange suffix="" />
    <InlineError>This is a warning message!</InlineError>
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>A currency control with an info state and message</ControlLabel>
    <InputCurrencyRange prefix="ABC" suffix="" />
    <InlineError>This is an info message!</InlineError>
  </FormGroup>
</React.Fragment>;
```

### Size Examples with Buttons

```js
import { Layouts, InputCurrencyRange, Button } from 'gel-generic';

<React.Fragment>
  <Layouts template="single-line-action">
    <InputCurrencyRange />
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputCurrencyRange size="lg" />
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputCurrencyRange size="sm" />
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;
```

### Table Example

```js
import { InputCurrencyRange, Table } from 'gel-generic';

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
    dataField: 'savingsPer',
    text: 'Savings',
    headerAlign: 'right',
    align: 'right',
    formatter: (cell, row) => (
      <InputCurrencyRange startValue={cell.startValue} endValue={cell.endValue} size={row.size} />
    ),
  },
];

<Table
  id="inputCurrencyRange-table"
  keyField="id"
  data={tableInputTestData}
  fixed={false}
  columns={columnData}
/>;
```
