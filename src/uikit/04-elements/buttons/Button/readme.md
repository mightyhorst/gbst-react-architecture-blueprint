### Button spacing

Because React doesn't output newlines between elements, buttons on the same line are displayed flush against each other. To preserve the spacing between multiple inline buttons, wrap your button group in `<ButtonToolbar />`

### Cross-Browser compatibility

Because `<Button />` will render an `<a>` tag in certain situations. Since anchor tags can't be `disabled`, the behavior is emulated as best it can be. Specifically, `pointer-events: none;` style is added to the anchor to prevent focusing, which is only supported in newer browser versions.

### Button Style Examples

These are defined by the `mode` prop on the button tag

```js
import { Button, ButtonToolbar } from 'gel-generic';

<div>
  <h5>Normal</h5>
  <ButtonToolbar style={{ backgroundColor: '#f0ede6', padding: '15px' }}>
    <Button mode="success">Success</Button>
    <Button mode="info">Info</Button>
    <Button mode="warning">Warning</Button>
    <Button mode="danger">Danger</Button>
  </ButtonToolbar>

  <ButtonToolbar style={{ backgroundColor: '#f0ede6', padding: '15px' }}>
    <Button>Default</Button>
    <Button mode="primary">Primary</Button>
    <Button mode="secondary">Secondary</Button>
    <Button mode="link">Link</Button>
  </ButtonToolbar>

  <h5>Inverse</h5>
  <ButtonToolbar style={{ backgroundColor: '#212737', padding: '15px' }}>
    <Button mode="default" inverse>
      Default
    </Button>
    <Button mode="primary" inverse>
      Primary
    </Button>
    <Button mode="secondary" inverse>
      Secondary
    </Button>
    <Button mode="link" inverse>
      Link
    </Button>
  </ButtonToolbar>
</div>;
```

### Button Size Examples

These are defined by the `size` prop on the button tag

```js
import { Button, ButtonToolbar, LoadingSpinner } from 'gel-generic';

<div>
  <h5>Default</h5>
  <ButtonToolbar>
    <Button size="xl">Extra Large Button</Button>
    <Button size="lg">Large Button</Button>
    <Button>Medium Button</Button>
    <Button size="sm">Small Button</Button>
    <Button size="xs">Extra Small Button</Button>
  </ButtonToolbar>

  <h5>With Loading Spinner</h5>
  <ButtonToolbar>
    <Button size="xl" icon={<LoadingSpinner />}>
      Extra Large Button
    </Button>
    <Button size="lg" icon={<LoadingSpinner />}>
      Large Button
    </Button>
    <Button icon={<LoadingSpinner />}>Medium Button</Button>
    <Button size="sm" icon={<LoadingSpinner />}>
      Small Button
    </Button>
    <Button size="xs" icon={<LoadingSpinner />}>
      Extra Small Button
    </Button>
    <Button size="xs" icon={<LoadingSpinner />}></Button>
  </ButtonToolbar>

  <h5>With SVG Icons</h5>
  <ButtonToolbar>
    <Button size="xl" icon="floppy">
      Extra Large Button
    </Button>
    <Button size="lg" icon="floppy">
      Large Button
    </Button>
    <Button icon="floppy">Medium Button</Button>
    <Button size="sm" icon="floppy">
      Small Button
    </Button>
    <Button size="xs" icon="floppy">
      Extra Small Button
    </Button>
    <Button size="xs" icon="floppy"></Button>
  </ButtonToolbar>
  <br />

  <ButtonToolbar>
    <Button size="xl" icon="tick">
      Extra Large Button
    </Button>
    <Button size="lg" icon="tick">
      Large Button
    </Button>
    <Button icon="tick">Medium Button</Button>
    <Button size="sm" icon="tick">
      Small Button
    </Button>
    <Button size="xs" icon="tick">
      Extra Small Button
    </Button>
    <Button size="xs" icon="tick"></Button>
  </ButtonToolbar>
  <br />

  <ButtonToolbar>
    <Button size="xl" icon="cross">
      Extra Large Button
    </Button>
    <Button size="lg" icon="cross">
      Large Button
    </Button>
    <Button icon="cross">Medium Button</Button>
    <Button size="sm" icon="cross">
      Small Button
    </Button>
    <Button size="xs" icon="cross">
      Extra Small Button
    </Button>
    <Button size="xs" icon="cross"></Button>
  </ButtonToolbar>
  <br />

  <ButtonToolbar>
    <Button size="xl" icon="plus">
      Extra Large Button
    </Button>
    <Button size="lg" icon="plus">
      Large Button
    </Button>
    <Button icon="plus">Medium Button</Button>
    <Button size="sm" icon="plus">
      Small Button
    </Button>
    <Button size="xs" icon="plus">
      Extra Small Button
    </Button>
    <Button size="xs" icon="plus"></Button>
  </ButtonToolbar>
</div>;
```

### Button Type Examples

These are defined by the `type` prop on the button tag

```js
import { Button, ButtonToolbar } from 'gel-generic';

<ButtonToolbar>
  <Button type="button">Button Button</Button>
  <Button type="reset">Reset Button</Button>
  <Button type="submit">Submit Button</Button>
</ButtonToolbar>;
```

### Additonal Button Prop Examples

You can set your buttons to either `active` or `disabled` by setting the respective prop.

```js
import { Button, ButtonToolbar } from 'gel-generic';

<ButtonToolbar>
  <Button active>Active Button</Button>
  <Button disabled>Disabled Button</Button>
  <Button block>Block Button</Button>
</ButtonToolbar>;
```

### Icon Buttons

You can pass in either a string or a component in to the `icon` property.
See `SVGIcon` documentation for examples of strings that can be passed in.

```js
import { Button, ButtonToolbar, LoadingSpinner } from 'gel-generic';

<React.Fragment>
  <ButtonToolbar>
    <Button mode="primary" icon="floppy" />
    <Button mode="primary" icon="floppy" iconPosition="right">
      Icon with text
    </Button>

    <Button mode="default" icon="floppy" />
    <Button mode="default" icon="floppy">
      Icon with text
    </Button>

    <Button mode="link" icon="floppy" />
    <Button mode="link" icon="floppy">
      Icon with text
    </Button>
  </ButtonToolbar>

  <br />

  <ButtonToolbar>
    <Button mode="secondary" icon={<LoadingSpinner />} />
    <Button mode="secondary" icon={<LoadingSpinner />} iconPosition="right">
      Loading with text
    </Button>

    <Button mode="default" icon={<LoadingSpinner />} />
    <Button mode="default" icon={<LoadingSpinner />}>
      Loading with text
    </Button>

    <Button mode="link" icon={<LoadingSpinner />} />
    <Button mode="link" icon={<LoadingSpinner />}>
      Loading with text
    </Button>
  </ButtonToolbar>
</React.Fragment>;
```

### Table Example

```js
import { Button, Table } from 'gel-generic';

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
    dataField: 'actions',
    text: '',
    formatter: (cell, row) => <Button size={row.size}>{row.name}</Button>,
  },
];

<Table id="buttons-table" keyField="id" data={tableInputTestData} columns={columnData} />;
```
