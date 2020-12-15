The input control displays a standard input field. It can be used for reading text, emails or passwords. The `InputControl` should be used when automatic validation is not present. Please use `InputControlField` instead when validation needs to run (this is effectively exactly the same component as this one, with a different name and additional functionality).

### InputControl Examples

```js
import { Form, FormGroup, ControlLabel, InputControl } from 'gel-generic';

<Form>
  <FormGroup>
    <ControlLabel>Text</ControlLabel>
    <InputControl />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Email</ControlLabel>
    <InputControl type="email" placeholder="jane.doe@example.com" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Textarea</ControlLabel>
    <InputControl componentClass="textarea" placeholder="textarea" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Email (size sm)</ControlLabel>
    <InputControl size="sm" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Email (size lg)</ControlLabel>
    <InputControl size="lg" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Input with suffix</ControlLabel>
    <InputControl suffix="XYZ" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Input with prefix</ControlLabel>
    <InputControl prefix="XYZ" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Input (disabled)</ControlLabel>
    <InputControl placeholder="I am disabled" disabled />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Input (disabled with prefix and suffix)</ControlLabel>
    <InputControl prefix="XYZ" suffix="XYZ" placeholder="I am disabled" disabled />
  </FormGroup>
</Form>;
```

### Validation Examples

Form controls can receive these states either as a consequence of validation, or just manually.

```js
import { FormGroup, ControlLabel, InputControl, InlineError } from 'gel-generic';

<React.Fragment>
  <FormGroup validationState="success">
    <ControlLabel>A form control with an success state and message</ControlLabel>
    <InputControl name="name" type="text" value="Lorem ipsum" />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>A form control with an error state and message</ControlLabel>
    <InputControl name="name" type="text" />
    <InlineError>This is an error message!</InlineError>
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>A form control with an warning state and message</ControlLabel>
    <InputControl name="name" type="text" />
    <InlineError>This is a warning message!</InlineError>
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>A form control with an info state and message</ControlLabel>
    <InputControl name="name" type="text" />
    <InlineError>This is an info message!</InlineError>
  </FormGroup>
</React.Fragment>;
```

### Validation Examples (Prefix and Suffix Combinations)

```js
import { FormGroup, ControlLabel, InputControl, InlineError } from 'gel-generic';

<React.Fragment>
  <FormGroup validationState="success">
    <ControlLabel>A form control with a prefix</ControlLabel>
    <InputControl name="name" type="text" prefix="ABC" />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>

  <FormGroup validationState="success">
    <ControlLabel>A form control with a suffix</ControlLabel>
    <InputControl name="name" type="text" suffix="ABC" />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>

  <FormGroup validationState="success">
    <ControlLabel>A form control with both</ControlLabel>
    <InputControl name="name" type="text" prefix="ABC" suffix="123" />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>
</React.Fragment>;
```

### Size Examples with Buttons

```js
import { Layouts, InputControl, Button, FormGroup } from 'gel-generic';

<React.Fragment>
  <Layouts template="single-line-action">
    <InputControl />
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputControl size="lg" />
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputControl size="sm" />
    <Button size="sm">Small</Button>
  </Layouts>

  <hr />

  <FormGroup validationState="success">
    <InputControl name="name" type="text" />
  </FormGroup>

  <FormGroup validationState="success">
    <InputControl name="name" type="text" size="lg" />
  </FormGroup>

  <FormGroup validationState="success">
    <InputControl name="name" type="text" size="sm" />
  </FormGroup>

  <hr />

  <FormGroup validationState="error">
    <InputControl name="name" type="text" />
  </FormGroup>

  <FormGroup validationState="error">
    <InputControl name="name" type="text" size="lg" />
  </FormGroup>

  <FormGroup validationState="error">
    <InputControl name="name" type="text" size="sm" />
  </FormGroup>

  <hr />

  <FormGroup validationState="warning">
    <InputControl name="name" type="text" />
  </FormGroup>

  <FormGroup validationState="warning">
    <InputControl name="name" type="text" size="lg" />
  </FormGroup>

  <FormGroup validationState="warning">
    <InputControl name="name" type="text" size="sm" />
  </FormGroup>

  <hr />

  <FormGroup validationState="info">
    <InputControl name="name" type="text" />
  </FormGroup>

  <FormGroup validationState="info">
    <InputControl name="name" type="text" size="lg" />
  </FormGroup>

  <FormGroup validationState="info">
    <InputControl name="name" type="text" size="sm" />
  </FormGroup>
</React.Fragment>;
```

### Table Example

```js
import { InputControl, Table } from 'gel-generic';

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
    dataField: 'email',
    text: 'Email',
    formatter: (cell, row) => <InputControl defaultValue={cell} size={row.size} />,
  },
];

<Table id="input-table" keyField="id" data={tableInputTestData} columns={columnData} />;
```
