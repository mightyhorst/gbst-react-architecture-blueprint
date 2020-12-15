Displays a checkbox field with a label.

### Checkbox Examples

```js
import { Checkbox, FormGroup } from 'gel-generic';

<React.Fragment>
  <FormGroup>
    <Checkbox>Checkbox example</Checkbox>
    <Checkbox defaultChecked>Checked checkbox example</Checkbox>
  </FormGroup>

  <FormGroup>
    <Checkbox disabled>Disabled checkbox example</Checkbox>
    <Checkbox disabled defaultChecked>
      Disabled and checked checkbox example
    </Checkbox>
  </FormGroup>

  <FormGroup>
    <Checkbox>
      Long label example. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      aliquet aliquam. Nunc vel elit erat. In aliquam, tortor at consectetur ullamcorper, ligula
      turpis hendrerit erat, sit amet gravida eros lectus sed est. Nam at dui sed magna vulputate
      varius. Cras quis pharetra metus, at tincidunt sapien.
    </Checkbox>

    <Checkbox>
      Long label example. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      aliquet aliquam. Nunc vel elit erat. In aliquam, tortor at consectetur ullamcorper, ligula
      turpis hendrerit erat, sit amet gravida eros lectus sed est. Nam at dui sed magna vulputate
      varius. Cras quis pharetra metus, at tincidunt sapien.
    </Checkbox>
  </FormGroup>
</React.Fragment>;
```

### Inline Examples

You can set your checkboxes to appear `inline` by setting the corresponding prop.

```js
import { Checkbox, FormGroup } from 'gel-generic';

<FormGroup>
  <Checkbox inline>Checkbox example</Checkbox>
  <Checkbox inline disabled>
    Disabled checkbox example
  </Checkbox>
  <Checkbox inline checked disabled>
    Disabled checkbox example
  </Checkbox>
</FormGroup>;
```

### Validation Examples

```js
import { Checkbox, FormGroup, InlineError } from 'gel-generic';

<React.Fragment>
  <FormGroup validationState="success">
    <Checkbox>Success Checkbox Example</Checkbox>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <FormGroup validationState="success">
    <Checkbox disabled>Success Disabled Checkbox Example</Checkbox>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <FormGroup validationState="success">
    <Checkbox defaultChecked>Success Checked Checkbox Example</Checkbox>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <FormGroup validationState="success">
    <Checkbox defaultChecked disabled>
      Success Checked and Disabled Checkbox Example
    </Checkbox>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <hr />

  <FormGroup validationState="warning">
    <Checkbox>Warning Checkbox Example</Checkbox>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <hr />

  <FormGroup validationState="error">
    <Checkbox>Error Checkbox Example</Checkbox>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <hr />

  <FormGroup validationState="info">
    <Checkbox>Info Checkbox Example</Checkbox>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>
</React.Fragment>;
```

### Size Examples with Buttons

```js
import { Checkbox, Layouts, InputControl, Button } from 'gel-generic';

<React.Fragment>
  <Layouts template="single-line-action">
    <InputControl placeholder="Input comparison" />
    <Checkbox inline defaultChecked>
      Checkbox Example
    </Checkbox>
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputControl placeholder="Input comparison" size="lg" />
    <Checkbox inline defaultChecked size="lg">
      Checkbox Example
    </Checkbox>
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputControl placeholder="Input comparison" size="sm" />
    <Checkbox inline defaultChecked size="sm">
      Checkbox Example
    </Checkbox>
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;
```

### Table Example

```js
import { Checkbox, Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'ID',
    formatter: (cell, row) => <Checkbox size={row.size} inline />,
  },
  {
    dataField: 'name',
    text: 'Name',
  },
  {
    dataField: 'email',
    text: 'Email',
  },
];

<Table
  id="checkbox-table"
  keyField="id"
  data={tableInputTestData}
  fixed={false}
  columns={columnData}
/>;
```
