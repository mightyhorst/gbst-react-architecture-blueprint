import React from 'react';


/*
### InputNumeric Examples
Displays a numeric type input with min/max values.

*/
import {
    Form, 
    FormGroup, 
    ControlLabel,
    Layouts, 
    Button,
    InlineError,
    InputNumeric, 
    Table,
} from 'gel-generic';

export const InputNumericExamples = <Form>
    <FormGroup>
        <ControlLabel>Numeric (min 5, max 20)</ControlLabel>
        <InputNumeric min={5} max={20} />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Numeric (min 5, max 20)</ControlLabel>
        <InputNumeric min={5} max={20} />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Numeric (min decimals 2, max decimals 4)</ControlLabel>
        <InputNumeric minDecimalPlaces={2} maxDecimalPlaces={4} />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Numeric (prefix)</ControlLabel>
        <InputNumeric prefix="%" />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Numeric (suffix)</ControlLabel>
        <InputNumeric suffix="%" />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Numeric (german locale)</ControlLabel>
        <InputNumeric locale="de" />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Colour Negatives</ControlLabel>
        <InputNumeric colourNegatives value="-71" />
    </FormGroup>

    <FormGroup>
        <ControlLabel>A specified starting value</ControlLabel>
        <InputNumeric value={50000} />
    </FormGroup>

    <FormGroup>
        <ControlLabel>A specified starting default</ControlLabel>
        <InputNumeric defaultValue={50000} />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Numeric (disabled)</ControlLabel>
        <InputNumeric defaultValue={5000} disabled />
    </FormGroup>

    <hr />

    <FormGroup>
        <ControlLabel>Numeric (decimals, negatives allowed)</ControlLabel>
        <InputNumeric />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Numeric (decimals, no negatives)</ControlLabel>
        <InputNumeric allowNegatives={false} />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Numeric (integers, negatives allowed)</ControlLabel>
        <InputNumeric allowDecimals={false} />
    </FormGroup>

    <FormGroup>
        <ControlLabel>Numeric (integers, no negatives)</ControlLabel>
        <InputNumeric allowDecimals={false} allowNegatives={false} />
    </FormGroup>
</Form>;


/*
### Validation Examples

*/
export const InputNumericValidationExamples = <React.Fragment>
    <FormGroup validationState="success">
        <ControlLabel>A numeric control with an success state and message</ControlLabel>
        <InputNumeric value={5000} />
        <InlineError>This is a success message!</InlineError>
    </FormGroup>

    <FormGroup validationState="error">
        <ControlLabel>A numeric control with an error state and message</ControlLabel>
        <InputNumeric />
        <InlineError>This is an error message!</InlineError>
    </FormGroup>

    <FormGroup validationState="warning">
        <ControlLabel>A numeric control with an warning state and message</ControlLabel>
        <InputNumeric />
        <InlineError>This is a warning message!</InlineError>
    </FormGroup>

    <FormGroup validationState="info">
        <ControlLabel>A numeric control with an info state and message</ControlLabel>
        <InputNumeric />
        <InlineError>This is an info message!</InlineError>
    </FormGroup>
</React.Fragment>;


/*
### Size Examples with Buttons

*/

export const InputNumericSizeExamples = <React.Fragment>
    <Layouts template="single-line-action">
        <InputNumeric value={999999.99} />
        <Button>Default</Button>
    </Layouts>

    <Layouts template="single-line-action">
        <InputNumeric value={999999.99} size="lg" />
        <Button size="lg">Large</Button>
    </Layouts>

    <Layouts template="single-line-action">
        <InputNumeric value={999999.99} size="sm" />
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
        formatter: (cell, row) => <InputNumeric value={cell} size={row.size} />,
    },
];
const tableInputTestData  = [{
    id: 1,
    name: 'Name',
    savings: 100
}]
export const InputNumericTableExamples = <Table id="inputNumeric-table" keyField="id" data={tableInputTestData} columns={columnData} />;


/*
### Depending Inputs Example

The below provides an example of multiple fields that depend on the same state value.

*/

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 5000,
        };
    }

    render() {
        const { value } = this.state;

        return (
            <Form>
                <FormGroup>
                    <ControlLabel>Numeric (min 5, max 20)</ControlLabel>
                    <InputNumeric value={value} onChange={e => this.setState({ value: e.target.value })} />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Numeric (min 5, max 20)</ControlLabel>
                    <InputNumeric value={value} onChange={e => this.setState({ value: e.target.value })} />
                </FormGroup>
            </Form>
        );
    }
}


