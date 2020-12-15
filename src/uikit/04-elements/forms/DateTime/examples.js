import React from 'react';

import { Button , DateTime, Form, FormGroup, ControlLabel, Table } from 'gel-generic';






/* 
### DateTime Examples
Displays a date and time picker.
You can set a specific default value using the `defaultValue` prop, if one is not set, it will default to today. You can customise the input for your DateTime by using the `placeholder` prop to set placeholder text.


*/

var defaultDate = new Date(1993, 3, 8, 0, 0, 0, 0);
var inputProps = { placeholder: 'Pick a Date!' };


export const DateTimeExamples = (props) => <Form>
  <FormGroup>
    <ControlLabel>Date and time picker</ControlLabel>
    <DateTime defaultValue={defaultDate} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Date only picker (No time picker)</ControlLabel>
    <DateTime defaultValue={defaultDate} timeFormat={false} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTime picker with placeholder</ControlLabel>
    <DateTime inputProps={inputProps} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTime picker with the icon on the right side</ControlLabel>
    <DateTime inputProps={inputProps} iconPosition="right" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTime picker with no icon</ControlLabel>
    <DateTime inputProps={inputProps} hideIcon />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Date and time picker (disabled)</ControlLabel>
    <DateTime defaultValue={defaultDate} disabled />
  </FormGroup>
</Form>;


/* 
### Formatting Examples

You can specify a different Date or Time format using the `dateFormat` and `timeFormat` props respectively.

*/


export const DateTimeFormattingExamples = (props) => <Form>
  <FormGroup>
    <ControlLabel>DateTimePicker (DateFormat DD.MM.YYYY)</ControlLabel>
    <DateTime dateFormat="DD.MM.YYYY" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTimePicker (TimeFormat hh.mm.ss)</ControlLabel>
    <DateTime timeFormat="hh.mm.ss" />
  </FormGroup>
</Form>;


/* 
### TimeZone & Locale Examples

You can set the `utc` prop to determine whether the dateTime picked is representative of UTC time or not. `locale` is used to manually set the locale for the datetime instance. When `displayTimeZone` is specified, input time values will be displayed in the given timezone. Otherwise they will default to the user's local timezone (unless `utc` is specified).


*/

export const DateTimeTimezoneExamples = (props) => <Form>
  <FormGroup>
    <ControlLabel>DateTimePicker (UTC)</ControlLabel>
    <DateTime utc />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTimePicker (locale de)</ControlLabel>
    <DateTime locale="de" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTimePicker (DisplayTimeZone LA)</ControlLabel>
    <DateTime displayTimeZone="America/Los_Angeles" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTimePicker (DisplayTimeZone Taipei)</ControlLabel>
    <DateTime displayTimeZone="Asia/Taipei" />
  </FormGroup>
</Form>;


/* 
### ViewDate Example

The `viewDate` prop works in a similar fashion to `defaultDate`, however instead of selecting the date, it will open to the month and year of the supplied date.
*/


const viewDate = new Date(1993, 3, 8, 0, 0, 0, 0);

export const DateTimeViewDateExamples = (props) => <FormGroup>
  <ControlLabel>DateTimePicker (ViewDate)</ControlLabel>
  <DateTime viewDate={viewDate} />
</FormGroup>;


/* 
### Open Example

The `open` prop is used to dictate whether the picker is open. Note that if the prop is set explicitly, the picker will no longer be able to display the opposite state. As can be seen in the example below, where the picker is permanently closed.

*/

export const DateTimeOpenExamples = (props) => <FormGroup>
  <ControlLabel>DateTimePicker (Open)</ControlLabel>
  <DateTime open={false} />
</FormGroup>;


/* 
### Parsing Example

Setting `strictParsing` to true will use moment.js's strict parsing, meaning that input and format must match exactly to be valid.

*/

export const DateTimeParsingExamples = (props) => <FormGroup>
  <ControlLabel>DateTimePicker (StrictParsing)</ControlLabel>
  <DateTime strictParsing />
</FormGroup>;


/* 
### Close Behaviour Examples

You can set the `closeOnSelect`, `closeOnTab` or `disableCloseOnClickOutside` props to define when the picker will minimise. See the Examples below.

*/

export const DateTimeCloseBehaviourExamples = (props) => <Form>
  <FormGroup>
    <ControlLabel>DateTimePicker (CloseOnSelect True)</ControlLabel>
    <DateTime closeOnSelect />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTimePicker (CloseOnSelect False)</ControlLabel>
    <DateTime closeOnSelect={false} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTimePicker (CloseOnTab True)</ControlLabel>
    <DateTime closeOnTab />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTimePicker (CloseOnTab False)</ControlLabel>
    <DateTime closeOnTab={false} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTimePicker (DisableCloseOnClickOutside True)</ControlLabel>
    <DateTime disableCloseOnClickOutside />
  </FormGroup>

  <FormGroup>
    <ControlLabel>DateTimePicker (DisableCloseOnClickOutside False)</ControlLabel>
    <DateTime disableCloseOnClickOutside={false} />
  </FormGroup>
</Form>;


/* 
### Validation Examples
*/

// const defaultDate = new Date(1993, 3, 8, 0, 0, 0, 0);

export const DateTimeValidationExamples = (props) => <React.Fragment>
  <FormGroup validationState="success">
    <ControlLabel>Date time in a success state</ControlLabel>
    <DateTime defaultValue={defaultDate} inputProps={{ placeholder: 'Pick a date time' }} />
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>Date time in an error state</ControlLabel>
    <DateTime inputProps={{ placeholder: 'Pick a date time' }} />
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>Date time in a warning state</ControlLabel>
    <DateTime inputProps={{ placeholder: 'Pick a date time' }} />
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>Date time in an info state</ControlLabel>
    <DateTime inputProps={{ placeholder: 'Pick a date time' }} />
  </FormGroup>
</React.Fragment>;


/* 
### Size Examples with Buttons


*/

export const DateTimeSizeExamples = (props) => <React.Fragment>
  <Layouts template="single-line-action">
    <DateTime inputProps={{ placeholder: 'Pick a date time' }} />
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <DateTime inputProps={{ placeholder: 'Pick a date time' }} size="lg" />
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <DateTime inputProps={{ placeholder: 'Pick a date time' }} size="sm" />
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;


/* 
### Table Example


*/

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
    formatter: (cell, row) => <DateTime value={cell} size={row.size} />,
  },
];

const tableInputTestData = [
  {
    id: 1,
    name: 'name',
    dob: '2020-12-12'
  }
]

export const DateTimeTableExamples = (props) => <Table id="dateTime-table" keyField="id" data={tableInputTestData} columns={columnData} />;
