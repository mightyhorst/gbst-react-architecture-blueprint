Displays a radio field with a label.

### Radio Examples

```js
import { FormGroup, Radio } from 'gel-generic';

<React.Fragment>
  <FormGroup>
    <Radio name="radioGroup">Radio 1 example</Radio>
    <Radio name="radioGroup">Radio 2 example</Radio>
    <Radio name="radioGroup" defaultChecked>
      Radio 3 example
    </Radio>
  </FormGroup>

  <FormGroup>
    <Radio name="radioGroup-disabled" disabled>
      Radio 1 disabled example
    </Radio>
    <Radio name="radioGroup-disabled" disabled>
      Radio 2 disabled example
    </Radio>
    <Radio name="radioGroup-disabled" defaultChecked disabled>
      Radio 3 disabled example
    </Radio>
  </FormGroup>

  <FormGroup>
    <Radio name="radioGroup-long">
      Long label example. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      aliquet aliquam. Nunc vel elit erat. In aliquam, tortor at consectetur ullamcorper, ligula
      turpis hendrerit erat, sit amet gravida eros lectus sed est. Nam at dui sed magna vulputate
      varius. Cras quis pharetra metus, at tincidunt sapien.
    </Radio>

    <Radio name="radioGroup-long">
      Long label example. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat
      aliquet aliquam. Nunc vel elit erat. In aliquam, tortor at consectetur ullamcorper, ligula
      turpis hendrerit erat, sit amet gravida eros lectus sed est. Nam at dui sed magna vulputate
      varius. Cras quis pharetra metus, at tincidunt sapien.
    </Radio>
  </FormGroup>
</React.Fragment>;
```

### Inline Examples

You can set your radio buttons to appear `inline` by setting the corresponding prop.

```js
import { FormGroup, Radio } from 'gel-generic';

<React.Fragment>
  <FormGroup>
    <Radio name="radioGroup-inline" inline>
      Radio 1 example
    </Radio>
    <Radio name="radioGroup-inline" inline>
      Radio 2 example
    </Radio>
    <Radio name="radioGroup-inline" inline>
      Radio 3 example
    </Radio>
  </FormGroup>

  <FormGroup>
    <Radio name="radioGroup-inline-disabled" inline disabled>
      Radio 1 disabled example
    </Radio>
    <Radio name="radioGroup-inline-disabled" inline disabled>
      Radio 2 disabled example
    </Radio>
    <Radio name="radioGroup-inline-disabled" inline defaultChecked disabled>
      Radio 3 disabled example
    </Radio>
  </FormGroup>
</React.Fragment>;
```

### Validation Examples

```js
import { FormGroup, Radio, InlineError } from 'gel-generic';

<React.Fragment>
  <FormGroup validationState="success">
    <Radio>Success Radio Example</Radio>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <FormGroup validationState="success">
    <Radio disabled>Success Disabled Radio Example</Radio>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <FormGroup validationState="success">
    <Radio defaultChecked>Success Checked Radio Example</Radio>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <FormGroup validationState="success">
    <Radio defaultChecked disabled>
      Success Checked and Disabled Radio Example
    </Radio>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <hr />

  <FormGroup validationState="warning">
    <Radio>Warning Radio Example</Radio>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <hr />

  <FormGroup validationState="error">
    <Radio>Error Radio Example</Radio>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>

  <hr />

  <FormGroup validationState="info">
    <Radio>Info Radio Example</Radio>
    <InlineError>This is an error message.</InlineError>
  </FormGroup>
</React.Fragment>;
```

### Size Examples with Buttons

```js
import { Layouts, InputControl, Radio, Button } from 'gel-generic';

<React.Fragment>
  <Layouts template="single-line-action">
    <InputControl placeholder="Input comparison" />
    <Radio defaultChecked>Radio Example</Radio>
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputControl placeholder="Input comparison" size="lg" />
    <Radio defaultChecked size="lg">
      Radio Example
    </Radio>
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputControl placeholder="Input comparison" size="sm" />
    <Radio defaultChecked size="sm">
      Radio Example
    </Radio>
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;
```

### Table Example

```js
import { Radio, Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'ID',
    formatter: (cell, row) => <Radio size={row.size} inline />,
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
  id="radio-table"
  keyField="id"
  data={tableInputTestData}
  fixed={false}
  columns={columnData}
/>;
```
