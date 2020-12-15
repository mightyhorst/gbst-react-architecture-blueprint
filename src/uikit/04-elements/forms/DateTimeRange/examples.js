import React from 'react';
import { Layouts , DateTimeRange, Form, FormGroup, ControlLabel, Table, Button } from 'gel-generic';

 

/* 
### DateTimeRange Examples

Displays the same date and time picker, but with a "from" and "to" field.
DateTimeRange has the majority of the same available props as a regular [DateTime](#/Forms?id=datetime) component. The key difference is that they can be passed in as global, by setting them directly, or by passing in an object with the desired props to `startDateProps` or `endDateProps`. See the below example for details.


*/
const defaultDate = new Date(1993, 3, 8);
const startDateProps = {
  defaultValue: defaultDate,
  dateFormat: 'DD.MM.YYYY',
  timeFormat: 'hh.mm.ss',
};
const endDateProps = {
  defaultValue: new Date(2003, 3, 8),
  dateFormat: 'DD.MM.YYYY',
  timeFormat: 'hh,mm,ss',
};

export const DateTimeRangeExample = props => <Form>
  <FormGroup>
    <ControlLabel>Basic date time range</ControlLabel>
    <DateTimeRange
      startDateProps={{
        defaultValue: defaultDate,
      }}
      endDateProps={{
        defaultValue: defaultDate,
      }}
    />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Date time range with custom placeholders</ControlLabel>
    <DateTimeRange
      startDateProps={{
        inputProps: { placeholder: 'Pick start date' },
      }}
      endDateProps={{
        inputProps: { placeholder: 'Pick end date' },
      }}
    />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Date time range with different close settings</ControlLabel>
    <DateTimeRange
      closeOnSelect={false}
      startDateProps={startDateProps}
      endDateProps={endDateProps}
    />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Date time range (disabled)</ControlLabel>
    <DateTimeRange
      closeOnSelect={false}
      startDateProps={startDateProps}
      endDateProps={endDateProps}
      disabled
    />
  </FormGroup>
</Form>;


/* 
### Validation Examples

*/

export const DateTimeRangeValidationExample = props => <React.Fragment>
  <FormGroup validationState="success">
    <ControlLabel>Date time range in a success state</ControlLabel>
    <DateTimeRange
      startDateProps={{ defaultValue: defaultDate }}
      endDateProps={{ defaultValue: defaultDate }}
    />
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>Date time range in an error state</ControlLabel>
    <DateTimeRange />
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>Date time range in a warning state</ControlLabel>
    <DateTimeRange />
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>Date time range in an info state</ControlLabel>
    <DateTimeRange />
  </FormGroup>
</React.Fragment>;


/* 
### Size Examples with Buttons


*/

export const DateTimeRangeSizeExample = props => <React.Fragment>
  <Layouts template="single-line-action">
    <DateTimeRange />
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <DateTimeRange size="lg" />
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <DateTimeRange size="sm" />
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;


/* 
### Table Example


*/
// import { DateTimeRange, Table } from 'gel-generic';

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
    dataField: 'dob',
    text: 'DOB',
    formatter: (cell, row) => <DateTimeRange value={cell} size={row.size} />,
  },
];

const tableInputTestData  = [{
  id: 1,
  name: 'name',
  dob: '1990-01-01'
}]

export const DateTimeRangeTableExample = props => <Table
  id="dateTimeRange-table"
  keyField="id"
  data={tableInputTestData}
  fixed={false}
  columns={columnData}
/>;

