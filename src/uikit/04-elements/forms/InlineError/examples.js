import React from 'react';

/*
### InlineError Examples
Displays help text underneath a form field, which reads validation errors from a validation state.
*/

import { Form, FormGroup, ControlLabel, InputControl, InlineError } from 'gel-generic';

export const InlineErrorExamples = props => (<Form>
  <FormGroup validationState="success">
    <ControlLabel>Input with success</ControlLabel>
    <InputControl />
    <InlineError>This is an inline error.</InlineError>
    <InlineError icon>This is an inline error with an icon.</InlineError>
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>Input with warning</ControlLabel>
    <InputControl />
    <InlineError>This is an inline error.</InlineError>
    <InlineError icon>This is an inline error with an icon.</InlineError>
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>Input with error</ControlLabel>
    <InputControl />
    <InlineError>This is an inline error.</InlineError>
    <InlineError icon>This is an inline error with an icon.</InlineError>
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>Input with info</ControlLabel>
    <InputControl />
    <InlineError>This is an inline error.</InlineError>
    <InlineError icon>This is an inline error with an icon.</InlineError>
  </FormGroup>
</Form>);

