import React from 'react';
import {
  Checkbox,
  FormGroup
} from 'gel-generic';
import {
  Table
} from 'gel-generic';
import {
  InlineError
} from 'gel-generic';
import {
  Layouts,
  InputControl,
  Button
} from 'gel-generic';

/*
### Inline Examples

You can set your checkboxes to appear `inline` by setting the corresponding prop.
*/


export function CheckboxInlineExample() {
  return <FormGroup>
    <Checkbox inline>Checkbox example</Checkbox>
      <Checkbox inline disabled>
        Disabled checkbox example
    </Checkbox>
      <Checkbox inline checked disabled>
        Disabled checkbox example
    </Checkbox>
  </FormGroup>;
}

/*
### Validation Examples
*/


export function CheckboxValidationExample() {
  return <React.Fragment>
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
}

/*
### Size Examples with Buttons
*/


export function CheckboxSizeExample() {
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
}
/*

### Table Example
*/


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
const tableInputTestData = [{
  id: 'id',
  name: 'name',
  email: 'nick@email.com'
}] 
export function CheckboxTableExample() {
  return <Table
    id="checkbox-table"
    keyField="id"
    data={tableInputTestData}
    fixed={false}
    columns={columnData}
  />;
}
