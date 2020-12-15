import React from 'react';

import { FormGroup, ControlLabel, InputCurrency, InlineError } from 'gel-generic';
import { Layouts, Button } from 'gel-generic';
import { Table } from 'gel-generic';
import { Form } from 'gel-generic';

/*
### InputCurrency Examples
Displays an input with a suffix for currency.
*/

export const InputCurrencyExample = <Form>
    <FormGroup>
        <ControlLabel>Currency (GBP)</ControlLabel>
        <InputCurrency />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Currency (minDecimalPlaces 2, maxDecimalPlaces 3)</ControlLabel>
        <InputCurrency minDecimalPlaces={2} maxDecimalPlaces={3} />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Currency (min 10, max 20)</ControlLabel>
        <InputCurrency min={10} max={20} />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Currency (prefix)</ControlLabel>
        <InputCurrency prefix="currency" />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Currency (suffix)</ControlLabel>
        <InputCurrency suffix="currency" />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Currency (colour negatives)</ControlLabel>
        <InputCurrency colourNegatives value="-99" />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Currency (disabled)</ControlLabel>
        <InputCurrency defaultValue={1000} disabled />
    </FormGroup>
</Form>;


/*
### Validation Examples
*/
export const InputCurrencyValidationExample = <React.Fragment>
    <FormGroup validationState="success">
        <ControlLabel>A currency control with an success state and message</ControlLabel>
        <InputCurrency value={5000} />
        <InlineError>This is a success message!</InlineError>
    </FormGroup>

    <FormGroup validationState="error">
        <ControlLabel>A currency control with an error state and message</ControlLabel>
        <InputCurrency />
        <InlineError>This is an error message!</InlineError>
    </FormGroup>

    <FormGroup validationState="warning">
        <ControlLabel>A currency control with an warning state and message</ControlLabel>
        <InputCurrency />
        <InlineError>This is a warning message!</InlineError>
    </FormGroup>

    <FormGroup validationState="info">
        <ControlLabel>A currency control with an info state and message</ControlLabel>
        <InputCurrency />
        <InlineError>This is an info message!</InlineError>
    </FormGroup>
</React.Fragment>;

/*
### Size Examples with Buttons
*/
export const InputCurrencySizeExample = <React.Fragment>
    <Layouts template="single-line-action">
        <InputCurrency />
        <Button>Default</Button>
    </Layouts>

    <Layouts template="single-line-action">
        <InputCurrency size="lg" />
        <Button size="lg">Large</Button>
    </Layouts>

    <Layouts template="single-line-action">
        <InputCurrency size="sm" />
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
        dataField: 'savings',
        text: 'Savings',
        headerAlign: 'right',
        align: 'right',
        formatter: (cell, row) => <InputCurrency value={cell} size={row.size} />,
    },
];
const tableInputTestData  = [{
    id: 1,
    name: 'Name',
    savings: 1000
}]
export const InputCurrencyTableExample = <Table id="inputCurrency-table" keyField="id" data={tableInputTestData} columns={columnData} />;

