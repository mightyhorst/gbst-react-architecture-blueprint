Used to display a select box form control.

### Example

```js
import { Form, FormGroup, ControlLabel, SelectControl, Alert } from 'gel-generic';

const states = [
  { value: 'QLD', label: 'Queensland' },
  { value: 'NSW', label: 'New South Wales' },
  { value: 'VIC', label: 'Victoria', isDisabled: true },
  { value: 'ACT', label: 'Australian Capital Territory' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'SA', label: 'South Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'NT', label: 'Northern Territory' },
];

const flavours = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const groupedOptions = [
  {
    label: 'States',
    options: states,
  },
  {
    label: 'Flavours',
    options: flavours,
  },
];

<Form>
  <FormGroup>
    <ControlLabel>Example</ControlLabel>
    <SelectControl defaultValue="NSW" options={states} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Example (disabled)</ControlLabel>
    <SelectControl options={states} disabled />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Example (loading)</ControlLabel>
    <SelectControl options={states} loading />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Example (right)</ControlLabel>
    <SelectControl options={states} pullRight />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Example (not searchable, clearable)</ControlLabel>
    <SelectControl defaultValue="QLD" searchable={false} clearable options={states} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Example (grouped)</ControlLabel>
    <SelectControl options={groupedOptions} />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Example (creatable)</ControlLabel>
    <SelectControl options={states} creatable />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Example (multi select)</ControlLabel>
    <SelectControl options={states} multi />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Example (multi select, small)</ControlLabel>
    <SelectControl size="sm" options={states} multi />
  </FormGroup>

  <FormGroup>
    <ControlLabel>Example (multi select, large)</ControlLabel>
    <SelectControl size="lg" options={states} multi />
  </FormGroup>

  <div style={{ width: '400px' }}>
    <FormGroup>
      <ControlLabel>Example (multi select when wrapped)</ControlLabel>
      <SelectControl defaultValue={states} options={states} multi />
    </FormGroup>
  </div>

  <FormGroup>
    <ControlLabel>
      Example (left aligned dynamic width menu that adjusts when off screen)
    </ControlLabel>

    <div style={{ width: '100px' }}>
      <SelectControl defaultValue="NSW" options={states} menuShouldSizeAuto />
    </div>
  </FormGroup>

  <FormGroup>
    <ControlLabel>
      Example (right aligned dynamic width menu that adjusts when off screen)
    </ControlLabel>

    <div style={{ width: '100px' }}>
      <SelectControl
        defaultValue="NSW"
        options={states}
        menuShouldSizeAuto
        menuAutoSizedAlignment="auto-right"
      />
    </div>
  </FormGroup>

  <Alert mode="info">You can find additional examples of various options below.</Alert>
</Form>;
```

### Validation Examples

Form controls can receive these states either as a consequence of validation, or just manually.

```js
import { Form, FormGroup, ControlLabel, SelectControl, InlineError } from 'gel-generic';

const flavours = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

<Form>
  <FormGroup validationState="success">
    <ControlLabel>A form control with an success state and message</ControlLabel>
    <SelectControl name="name" options={flavours} value="chocolate" />
    <InlineError>This is a success message!</InlineError>
  </FormGroup>

  <FormGroup validationState="error">
    <ControlLabel>A form control with an error state and message</ControlLabel>
    <SelectControl name="name" options={flavours} />
    <InlineError>This is an error message!</InlineError>
  </FormGroup>

  <FormGroup validationState="warning">
    <ControlLabel>A form control with an warning state and message</ControlLabel>
    <SelectControl name="name" options={flavours} />
    <InlineError>This is a warning message!</InlineError>
  </FormGroup>

  <FormGroup validationState="info">
    <ControlLabel>A form control with an info state and message</ControlLabel>
    <SelectControl name="name" options={flavours} />
    <InlineError>This is an info message!</InlineError>
  </FormGroup>
</Form>;
```

### Size Examples with Buttons

```js
import { Layouts, SelectControl, Button } from 'gel-generic';

const flavours = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

<React.Fragment>
  <Layouts template="single-line-action">
    <SelectControl options={flavours} />
    <Button>Default</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <SelectControl options={flavours} size="lg" />
    <Button size="lg">Large</Button>
  </Layouts>

  <Layouts template="single-line-action">
    <SelectControl options={flavours} size="sm" />
    <Button size="sm">Small</Button>
  </Layouts>
</React.Fragment>;
```

### Async Example

The below example demonstrates a search against an api. Open up the select box and have a look at the options, then start typing something into the box. Note how one of the options is disabled.

```js
import { SelectControl } from 'gel-generic';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const filterColors = inputValue => {
  return colourOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

class WithCallbacks extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      inputValue: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(newValue) {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  }

  render() {
    return (
      <SelectControl
        async
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={this.handleInputChange}
      />
    );
  }
}

<WithCallbacks />;
```

### Table Example

```js
import { SelectControl, Table } from 'gel-generic';

const flavours = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

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
    dataField: 'flavour',
    text: 'Flavour',
    formatter: (cell, row) => (
      <SelectControl defaultValue={cell} options={flavours} size={row.size} />
    ),
  },
];

<Table id="select-table" keyField="id" data={tableInputTestData} columns={columnData} />;
```

### Dynamic Width Menus

Dynamic or automatic width menus adjust the width of the drop down menu to match the content. Normally, the drop down menu is always the width of the select control itself. When using small controls, this can make the options difficult to read without having to resort to scrolling. Dynamic width menus are an alternative to that behaviour.

These menus are at minimum the width of the control, but can grow bigger to accommodate larger data. When using one of the auto positioning options, these menus also change whether they expand left or right depending on the space available. Where they cannot completely fit onto the screen one way or another, they will fit into the largest space available and allow for scrolling to see any content that may have been cut off.

Note that for default automatic left and right alignment, the 'left' or 'right' designation simply refers to which side the menu sticks to under ideal circumstances.

To see behaviours below, try growing and shrinking your screen.

```js
import { Form, FormGroup, ControlLabel, SelectControl } from 'gel-generic';

const states = [
  { value: 'QLD', label: 'Queensland' },
  { value: 'NSW', label: 'New South Wales' },
  { value: 'VIC', label: 'Victoria' },
  { value: 'ACT', label: 'Australian Capital Territory' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'SA', label: 'South Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'NT', label: 'Northern Territory' },
];

const longOptions = [
  {
    value: 'long1',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    value: 'long2',
    label:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  ...states,
];

const longOptionsCantWrap = [...longOptions];
longOptionsCantWrap.push({
  value: 'long3',
  label:
    'Aaskldjaslkjdalkjdalskjdalskjdalskjdalskjdlaskjdlaskjdalskjdlaskjdlaskjdlaskjdlaskjdiqwueyiqu' +
    'risjdhfkjshfd2309123801923801382019283ahsidjhaksjdhakjhdkajhdakjhdkasjhdksjh',
});

<Form>
  <FormGroup>
    <ControlLabel>Example</ControlLabel>
    <SelectControl
      className="dynamic-menu"
      defaultValue="NSW"
      options={longOptions}
      menuShouldSizeAuto
    />
  </FormGroup>

  <FormGroup>
    <ControlLabel>
      Example (default left aligned dynamic width menu that adjusts when off screen)
    </ControlLabel>

    <div style={{ width: '200px' }}>
      <SelectControl
        className="dynamic-menu-left"
        defaultValue="NSW"
        options={longOptionsCantWrap}
        menuShouldSizeAuto
        menuAutoSizedAlignment="auto-left"
      />
    </div>
  </FormGroup>

  <FormGroup>
    <ControlLabel>
      Example (left aligned dynamic width menu that adjusts when off screen, and does not limit it's
      width when off the screen)
    </ControlLabel>

    <div style={{ width: '200px' }}>
      <SelectControl
        className="dynamic-menu-left-scaled-fit"
        defaultValue="NSW"
        options={longOptionsCantWrap}
        menuShouldSizeAuto
        menuAutoSizedScaleToFit={false}
        menuAutoSizedAlignment="auto-left"
      />
    </div>
  </FormGroup>

  <FormGroup>
    <ControlLabel>
      Example (default right aligned dynamic width menu that adjusts when off screen)
    </ControlLabel>

    <div style={{ width: '200px' }}>
      <SelectControl
        className="dynamic-menu-right"
        defaultValue="NSW"
        options={longOptionsCantWrap}
        menuShouldSizeAuto
        menuAutoSizedAlignment="auto-right"
      />
    </div>
  </FormGroup>

  <FormGroup>
    <ControlLabel>
      Example (right aligned dynamic width menu that adjusts when off screen, and does not limit
      it's width when off the screen)
    </ControlLabel>

    <div style={{ width: '200px' }}>
      <SelectControl
        className="dynamic-menu-right-scaled-fit"
        defaultValue="NSW"
        options={longOptionsCantWrap}
        menuShouldSizeAuto
        menuAutoSizedScaleToFit={false}
        menuAutoSizedAlignment="auto-right"
      />
    </div>
  </FormGroup>
</Form>;
```
