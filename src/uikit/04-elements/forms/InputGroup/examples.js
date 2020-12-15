import React from 'react';


/*
### InputGroup Examples
Use this component to group inputs. It also allows the use of addons and buttons.
*/
import {
  FormGroup,
  ControlLabel,
  InputControl,
  InlineError,
  Typeahead,
  Button,
  Table, 
  Glyphicon,
  DropdownButton,
  MenuItem,
  SVGIcon,
  InputGroup,
  Layouts , 
} from 'gel-generic';

const options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

export const InputGroupExample = <React.Fragment>
  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>@</InputGroup.Addon>
      <InputControl />
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputControl />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>$</InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputControl />
      <InputGroup.Addon>
        <Glyphicon glyph="music" />
      </InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputGroup.Button>
        <Button>Before</Button>
      </InputGroup.Button>
      <InputControl />
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputControl />
      <DropdownButton title="Input Group Menu" id="inputGroupDropdownButton-1">
        <MenuItem key="1">Item</MenuItem>
      </DropdownButton>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>
        <SVGIcon icon="floppy" />
      </InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>
        <SVGIcon icon="floppy" />
      </InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>
        <SVGIcon icon="magnifyingGlass" />
      </InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>
        <SVGIcon icon="magnifyingGlass" />
      </InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker InputGroup Typeahead</ControlLabel>
    <InputGroup>
      <InputGroup.Addon>@</InputGroup.Addon>
      <Typeahead
        id="typeahead-placeholder"
        options={options}
        placeholder="Pick a State or Territory"
      />
      <InputGroup.Button>
        <Button icon="magnifyingGlass" />
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>
</React.Fragment>;


/*
### Validation Examples

*/

export const InputGroupValidationExample = <React.Fragment>
  <FormGroup validationState="success">
    <ControlLabel>A form control with no prefix or suffix</ControlLabel>
    <InputControl name="name" type="text" />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>A typeahead with a prefix and suffix</ControlLabel>
    <InputGroup>
      <InputGroup.Addon>
        <SVGIcon icon="floppy" />
      </InputGroup.Addon>
      <Typeahead
        id="typeahead-placeholder"
        options={options}
        placeholder="Pick a State or Territory"
      />
      <InputGroup.Button>
        <Button icon="magnifyingGlass" />
      </InputGroup.Button>
    </InputGroup>
    <InlineError>This is a error message!</InlineError>
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>A form control with a prefix</ControlLabel>
    <InputGroup>
      <InputGroup.Addon>$</InputGroup.Addon>
      <InputControl />
    </InputGroup>
    <InlineError>This is a warning message!</InlineError>
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>A form control with a prefix and suffix</ControlLabel>
    <InputGroup>
      <InputGroup.Addon>$</InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
    <InlineError>This is an info message!</InlineError>
  </FormGroup>
</React.Fragment>;


/*
### Size Examples with Buttons

*/

export const InputGroupSizeExample = <React.Fragment>
  <Layouts template="single-line-action">
    <InputGroup>
      <InputGroup.Addon>$</InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputGroup size="lg">
      <InputGroup.Addon>$</InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputGroup size="sm">
      <InputGroup.Addon>$</InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
    <Button size="sm">Small</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputGroup>
      <InputGroup.Addon>
        <SVGIcon icon="flag" />
      </InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>
        <SVGIcon icon="magnifyingGlass" />
      </InputGroup.Addon>
    </InputGroup>
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputGroup size="lg">
      <InputGroup.Addon>
        <SVGIcon icon="flag" />
      </InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>
        <SVGIcon icon="magnifyingGlass" />
      </InputGroup.Addon>
    </InputGroup>
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputGroup size="sm">
      <InputGroup.Addon>
        <SVGIcon icon="flag" />
      </InputGroup.Addon>
      <InputControl />
      <InputGroup.Addon>
        <SVGIcon icon="magnifyingGlass" />
      </InputGroup.Addon>
    </InputGroup>
    <Button size="sm">Small</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputGroup>
      <Typeahead
        id="typeahead-placeholder"
        options={options}
        placeholder="Pick a State or Territory"
      />
      <InputGroup.Button>
        <Button icon="magnifyingGlass" />
      </InputGroup.Button>
    </InputGroup>
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputGroup size="lg">
      <Typeahead
        id="typeahead-placeholder"
        options={options}
        placeholder="Pick a State or Territory"
      />
      <InputGroup.Button>
        <Button icon="magnifyingGlass" size="lg" />
      </InputGroup.Button>
    </InputGroup>
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <InputGroup size="sm">
      <Typeahead
        id="typeahead-placeholder"
        options={options}
        placeholder="Pick a State or Territory"
      />
      <InputGroup.Button>
        <Button icon="magnifyingGlass" size="sm" />
      </InputGroup.Button>
    </InputGroup>
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;

