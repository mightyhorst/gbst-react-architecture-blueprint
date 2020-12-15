Displays a text input field prepended with a magnifying glass icon. To be used for search bars, typeahead searches etc.

```js
import { FormGroup, ControlLabel, InputSearch } from 'gel-generic';

<React.Fragment>
  <FormGroup>
    <ControlLabel>Text input for search fields</ControlLabel>
    <InputSearch />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Search (disabled)</ControlLabel>
    <InputSearch defaultValue="Lorem ipsum" disabled />
  </FormGroup>
</React.Fragment>;
```

### Validation Examples

```js
import { FormGroup, ControlLabel, InputSearch, InlineError } from 'gel-generic';

<React.Fragment>
  <FormGroup validationState="success">
    <ControlLabel>A search control with an success state and message</ControlLabel>
    <InputSearch value="Lorem ipsum" />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>A search control with an error state and message</ControlLabel>
    <InputSearch />
    <InlineError>This is an error message!</InlineError>
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>A search control with an warning state and message</ControlLabel>
    <InputSearch />
    <InlineError>This is a warning message!</InlineError>
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>A search control with an info state and message</ControlLabel>
    <InputSearch />
    <InlineError>This is an info message!</InlineError>
  </FormGroup>
</React.Fragment>;
```

### Size Examples with Buttons

```js
import { Layouts, InputSearch, Button } from 'gel-generic';

<React.Fragment>
  <Layouts template="single-line-action">
    <InputSearch />
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputSearch size="lg" />
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputSearch size="sm" />
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;
```

### Table Example

```js
import { InputSearch, Table } from 'gel-generic';

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
    formatter: (cell, row) => <InputSearch defaultValue={cell} size={row.size} />,
  },
];

<Table id="inputSearch-table" keyField="id" data={tableInputTestData} columns={columnData} />;
```
