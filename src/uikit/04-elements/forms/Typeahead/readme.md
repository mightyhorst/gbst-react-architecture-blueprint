Displays a Bootstrap typeahead component. Supports both single and multi selection.

### Typeahead Examples

The items for the Typeahead are passed into the `options` prop. You can also specify `placeholder` text.

```js
import { Form, FormGroup, ControlLabel, Typeahead } from 'gel-generic';

var options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

<Form>
  <FormGroup>
    <ControlLabel>State Picker Typeahead</ControlLabel>
    <Typeahead id="typeadhead" options={options} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (Placeholder)</ControlLabel>
    <Typeahead
      id="typeahead-placeholder"
      options={options}
      placeholder="Pick a State or Territory"
    />
  </FormGroup>
</Form>;
```

You can use the `align` prop to choose how your options will display. You can choose between "justify", "left" and "right". You can also use `dropup` to make the options appear above the Typeahead, and `flip` to make the it flip the options when they reach the viewport bounds.

```js
import { Form, FormGroup, ControlLabel, Typeahead } from 'gel-generic';

var options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

<Form>
  <FormGroup>
    <ControlLabel>State Picker Typeahead (Justified)</ControlLabel>
    <Typeahead id="typeahead-justified" options={options} align="justify" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (Left)</ControlLabel>
    <Typeahead id="typeahead-left" options={options} align="left" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (Right)</ControlLabel>
    <Typeahead id="typeahead-right" options={options} align="right" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (Dropup)</ControlLabel>
    <Typeahead id="typeahead-up" options={options} dropup />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (Flip)</ControlLabel>
    <Typeahead id="typeahead-flip" options={options} flip />
  </FormGroup>
</Form>;
```

Setting the `allowNew` prop provides the ability to create new options for the data set. You can change the label displayed before the custom option in the menu by using the `newSelectionPrefix` prop.

```js
import { Form, FormGroup, ControlLabel, Typeahead } from 'gel-generic';

var options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

<Form>
  <FormGroup>
    <ControlLabel>State Picker Typeahead (AllowNew, NewSelectionPrefix)</ControlLabel>
    <Typeahead id="typeahead-new-prefix" options={options} allowNew newSelectionPrefix="ADD ME!" />
  </FormGroup>
</Form>;
```

Setting the `bodyContainer` prop will attach the menu to document.body instead of the typeahead.

```js
import { Form, FormGroup, ControlLabel, Typeahead } from 'gel-generic';

var options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

<Form>
  <FormGroup>
    <ControlLabel>State Picker Typeahead (BodyContainer)</ControlLabel>
    <Typeahead id="typeahead-bodyContainer" options={options} bodyContainer />
  </FormGroup>
</Form>;
```

By default, the Typeahead is not case-sensitive and ignores diacritical marks when filtering. You can change these behaviors using the `caseSensitive` and `ignoreDiacritics` props.

```js
import { Form, FormGroup, ControlLabel, Typeahead } from 'gel-generic';

var options = [
  'Warsaw',
  'Kraków',
  'Łódź',
  'Wrocław',
  'Poznań',
  'Gdańsk',
  'Szczecin',
  'Rzeszów',
  'Gorzów Wielkopolski',
  'Białystok',
];

<Form>
  <FormGroup>
    <ControlLabel>State Picker Typeahead (CaseSensitive)</ControlLabel>
    <Typeahead id="typeahead-caseInsensitive" options={options} caseSensitive />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (IgnoreDiacritics)</ControlLabel>
    <Typeahead id="typeahead-ignoreDiacritics" options={options} ignoreDiacritics={false} />
  </FormGroup>
</Form>;
```

Setting the `clearButton` prop will add a clear button to your Typeahead. Setting the `disabled` prop will disable the Typeahead. Setting the `highlightOnlyResult` prop will highlight the only available option from the inputted search.

```js
import { Form, FormGroup, ControlLabel, Typeahead } from 'gel-generic';

var options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

<Form>
  <FormGroup>
    <ControlLabel>State Picker Typeahead (ClearButton)</ControlLabel>
    <Typeahead id="typeahead-clear" options={options} clearButton />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (Disabled)</ControlLabel>
    <Typeahead id="typeahead-disabled" options={options} disabled />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (HighlightOnlyResult)</ControlLabel>
    <Typeahead id="typeahead-highlightOnlyResult" options={options} highlightOnlyResult />
  </FormGroup>
</Form>;
```

You can set the default value for the Typeahead in two ways, by either using the `defaultInputValue`, which is a string, or `defaultSelected` which is a list.

```js
import { Form, FormGroup, ControlLabel, Typeahead } from 'gel-generic';

var options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

<Form>
  <FormGroup>
    <ControlLabel>State Picker Typeahead (DefaultInputValue)</ControlLabel>
    <Typeahead id="typeahead-defaultInput" options={options} defaultInputValue="A" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (DefaultSelected)</ControlLabel>
    <Typeahead id="typeahead-defaultSelected" options={options} defaultSelected={['NSW']} />
  </FormGroup>
</Form>;
```

To improve browser performance, the typeahead paginates large data sets by default. You can set the number of results to be displayed using `maxResults`, or override pagination completely using `paginate`, or set the `paginationText`. You can also specify the minimum amount of characters that need to be inputed before results are shown, or allow multiple selections using the `minLength` and `multiple` props respectively.

```js
import { Form, FormGroup, ControlLabel, Typeahead } from 'gel-generic';

var options = [
  'Warsaw',
  'Kraków',
  'Łódź',
  'Wrocław',
  'Poznań',
  'Gdańsk',
  'Szczecin',
  'Rzeszów',
  'Gorzów Wielkopolski',
  'Białystok',
];

<Form>
  <FormGroup>
    <ControlLabel>State Picker Typeahead (Max Results 25, Next text)</ControlLabel>
    <Typeahead id="typeahead-maxResults" options={options} maxResults={5} paginationText="Next" />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (No Pagination)</ControlLabel>
    <Typeahead id="typeahead-noPaging" options={options} paginate />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (MinLength 2)</ControlLabel>
    <Typeahead id="typeahead-minLength" options={options} minLength={2} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>State Picker Typeahead (Multiple)</ControlLabel>
    <Typeahead id="typeahead-multiple" options={options} multiple />
  </FormGroup>
</Form>;
```

### Validation Examples

Form controls can receive these states either as a consequence of validation, or just manually.

```js
import { Form, FormGroup, ControlLabel, Typeahead, InlineError } from 'gel-generic';

var options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

<Form>
  <FormGroup validationState="success">
    <ControlLabel>A form control with an success state and message</ControlLabel>
    <Typeahead id="typeahead-success" options={options} />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>A form control with an error state and message</ControlLabel>
    <Typeahead id="typeahead-error" options={options} />
    <InlineError>This is an error message!</InlineError>
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>A form control with an warning state and message</ControlLabel>
    <Typeahead id="typeahead-warning" options={options} />
    <InlineError>This is a warning message!</InlineError>
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>A form control with an info state and message</ControlLabel>
    <Typeahead id="typeahead-info" options={options} />
    <InlineError>This is an info message!</InlineError>
  </FormGroup>
</Form>;
```

### Size Examples with Buttons

You can set the size of your Typeahead by using the `size` prop. See the examples below.

```js
import { Layouts, Typeahead, Button } from 'gel-generic';

var options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

<React.Fragment>
  <Layouts template="single-line-action">
    <Typeahead id="typeahead-default" options={options} />
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <Typeahead id="typeahead-lg" options={options} size="lg" />
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <Typeahead id="typeahead-sm" options={options} size="sm" />
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;
```

### Input Group Example

Typeahead within an `InputGroup` component and with addons.

```js
import { Form, FormGroup, ControlLabel, Typeahead, InputGroup, Button } from 'gel-generic';

var options = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC'];

<Form>
  <FormGroup>
    <ControlLabel>Typead with prefix</ControlLabel>
    <InputGroup>
      <InputGroup.Addon>@</InputGroup.Addon>
      <Typeahead
        id="typeahead-placeholder"
        options={options}
        placeholder="Pick a State or Territory"
      />
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <ControlLabel>Typead with suffix</ControlLabel>
    <InputGroup>
      <Typeahead
        id="typeahead-placeholder"
        options={options}
        placeholder="Pick a State or Territory"
      />
      <InputGroup.Addon>@</InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <ControlLabel>Typeahead with prefix and suffix button</ControlLabel>
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
</Form>;
```
