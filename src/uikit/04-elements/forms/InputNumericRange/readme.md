Displays the same numeric type input but with a "from" and "to" field.

### InputNumericRange Examples

```js
import { Form, FormGroup, ControlLabel, InputNumericRange } from 'gel-generic';

<Form>
  <FormGroup>
    <ControlLabel>Numeric Range</ControlLabel>
    <InputNumericRange />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Numeric Range (min 5, max 10)</ControlLabel>
    <InputNumericRange min={5} max={10} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Numeric Range (min decimals 2, max decimals 4)</ControlLabel>
    <InputNumericRange minDecimalPlaces={2} maxDecimalPlaces={4} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Numeric Range</ControlLabel>
    <InputNumericRange locale="de" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Numeric Range</ControlLabel>
    <InputNumericRange startValue={3} endValue={33} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Numeric Range (disabled)</ControlLabel>
    <InputNumericRange startValue={5000} endValue={10000} disabled />
  </FormGroup>
</Form>;
```

### Prefix / Suffix Examples

```js
import { FormGroup, ControlLabel, InputNumericRange } from 'gel-generic';

<React.Fragment>
  <FormGroup>
    <ControlLabel>A numeric range control with a prefix</ControlLabel>
    <InputNumericRange prefix="ABC" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>A numeric range control with a suffix</ControlLabel>
    <InputNumericRange suffix="123" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>A numeric range control with both a prefix and a suffix</ControlLabel>
    <InputNumericRange prefix="ABC" suffix="123" />
  </FormGroup>
</React.Fragment>;
```

### Validation Examples

```js
import { FormGroup, ControlLabel, InputNumericRange, InlineError } from 'gel-generic';

<React.Fragment>
  <FormGroup validationState="success">
    <ControlLabel>A currency control with an success state and message</ControlLabel>
    <InputNumericRange startValue={5000} endValue={10000} />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>A currency control with an error state and message</ControlLabel>
    <InputNumericRange prefix="ABC" />
    <InlineError>This is an error message!</InlineError>
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>A currency control with an warning state and message</ControlLabel>
    <InputNumericRange suffix="123" />
    <InlineError>This is a warning message!</InlineError>
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>A currency control with an info state and message</ControlLabel>
    <InputNumericRange prefix="ABC" suffix="123" />
    <InlineError>This is an info message!</InlineError>
  </FormGroup>
</React.Fragment>;
```

### Size Examples with Buttons

```js
import { Layouts, InputNumericRange, Button } from 'gel-generic';

<React.Fragment>
  <Layouts template="single-line-action">
    <InputNumericRange />
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputNumericRange size="lg" />
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputNumericRange size="sm" />
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;
```

### Table Example

```js
import { InputNumericRange, Table } from 'gel-generic';

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
      <InputNumericRange startValue={cell.startValue} endValue={cell.endValue} size={row.size} />
    ),
  },
];

<Table
  id="inputNumericRange-table"
  keyField="id"
  data={tableInputTestData}
  fixed={false}
  columns={columnData}
/>;
```
