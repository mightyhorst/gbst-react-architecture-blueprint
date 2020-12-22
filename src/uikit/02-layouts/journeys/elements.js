import React from 'react';

import {
    DateTimeRange,
    FormGroup,
    ControlLabel,

    //Toggles
    ToggleSwitch,
    SVGIcon,


} from 'gel-generic';

// CHECKBOX 
import {
    Checkbox,
    Table,
    InlineError,
    Layouts,
    InputControl,
    Button
} from 'gel-generic';


export function TOGGLES() {
    return (
        <>
            <FormGroup>
                <ToggleSwitch id="toggleSwitch-1">
                    <span htmlFor="toggleSwitch-1">This is a label</span>
                </ToggleSwitch>
            </FormGroup>

            <FormGroup>
                <ToggleSwitch id="toggleSwitch-2" icons={false}>
                    <span htmlFor="toggleSwitch-2">I have no icons</span>
                </ToggleSwitch>
            </FormGroup>

            <FormGroup>
                <ToggleSwitch
                    id="toggleSwitch-3"
                    icons={{
                        checked: <SVGIcon icon="heart" />,
                        unchecked: null,
                    }}
                >
                    <span htmlFor="toggleSwitch-3">I have an SVGIcon</span>
                </ToggleSwitch>
            </FormGroup>

            <FormGroup>
                <ToggleSwitch disabled id="toggleSwitch-4">
                    <span htmlFor="toggleSwitch-4">You can't click me</span>
                </ToggleSwitch>
            </FormGroup>

            <FormGroup>
                <ToggleSwitch disabled defaultChecked id="toggleSwitch-5">
                    <span htmlFor="toggleSwitch-5">You can't click me but I'm active</span>
                </ToggleSwitch>
            </FormGroup>
        </>
    )
}

export function DATES() {
    var defaultDate = new Date(1993, 3, 8);

    return <React.Fragment>
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
}


// ### Checkbox Examples
export function CHECKBOX() {

    return <React.Fragment>
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
}

export function CHECKBOX_INLINE() {
    <FormGroup>
        <Checkbox inline>Checkbox example</Checkbox>
        <Checkbox inline disabled>
            Disabled checkbox example
            </Checkbox>
        <Checkbox inline checked disabled>
            Disabled checkbox example
            </Checkbox>
    </FormGroup>;
}

// ### Validation Examples
export function CHECKBOX_VALIDATION() {
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


// ### Size Examples with Buttons
export function CHECKBOX_SIZES() {
    return <React.Fragment>
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


// ### Table Example



export function CHECKBOX_TABLE() {
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

    const isFixed = false; 

    <Table
        id="checkbox-table"
        keyField="id"
        data={tableInputTestData}
        fixed={isFixed}
        columns={columnData}
    />;
}
