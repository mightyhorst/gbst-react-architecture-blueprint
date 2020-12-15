You can use this component to render tables based on dynamic data.

### Basic Table Example

To create a basic data table, you need to provide both `columns` and `data`. Note that by default tables are `fixed` so that their column width can be predicted. If you find that your data is overflowing a column, make sure to set the width of that column under `columns`. Alternatively, if you are not using an advanced data table functionality, you can just set `fixed` to `false`.

```js
import { Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
    headerAlign: 'right',
    align: 'right',
  },
];

const rowData = [
  {
    id: '1',
    name: 'Laptop',
    price: '$500',
  },
  {
    id: '2',
    name: 'Monitor',
    price: '$50',
  },
  {
    id: '3',
    name: 'Monitor',
    price: '$50',
  },
];

<Table id="table-default" keyField="id" data={rowData} columns={columnData} />;
```

### Unbordered Table Example

To create a basic data table, you need to provide both `columns` and `data`. Note that by default tables are `fixed` so that their column width can be predicted. If you find that your data is overflowing a column, make sure to set the width of that column under `columns`. Alternatively, if you are not using an advanced data table functionality, you can just set `fixed` to `false`.

```js
import { Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
    headerAlign: 'right',
    align: 'right',
  },
];

const rowData = [
  {
    id: '1',
    name: 'Laptop',
    price: '$500',
  },
  {
    id: '2',
    name: 'Monitor',
    price: '$50',
  },
  {
    id: '3',
    name: 'Monitor',
    price: '$50',
  },
];

<>
  <h4>Standard table with no borders</h4>
  <Table id="table-default" keyField="id" data={rowData} columns={columnData} mode="no-borders" />
  <h4>Table with no borders, but with indenting on the left and right</h4>
  <p>
    This option works better when you have a background colour on the table that might differ to the
    surrounding background.
  </p>
  <Table
    id="table-default"
    keyField="id"
    data={rowData}
    columns={columnData}
    mode="no-borders-indented"
  />
</>;
```

### Vertically Aligned Table Example

To create a basic data table, you need to provide both `columns` and `data`. You can add the `valign` property to vertically align `td`s

```js
import { Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
    headerAlign: 'right',
    align: 'right',
  },
];

const rowData = [
  {
    id: '1',
    name: 'Laptop with a really really really really really really really abnormally large name',

    price: '$500',
  },
  {
    id: '2',
    name: 'Monitor',
    price: '$50',
  },
  {
    id: '3',
    name: 'Monitor',
    price: '$50',
  },
];

<Table
  id="table-default"
  keyField="id"
  data={rowData}
  columns={columnData}
  mode="no-borders"
  valign
/>;
```

### Pagination Example

To use pagination, the size per page selector, or view a page total, you must enable the `paginate` property.

```js
import { Table } from 'gel-generic';

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
    dataField: 'email',
    text: 'Email',
  },
];

<Table
  id="table-pagination"
  keyField="id"
  data={tableTestData}
  columns={columnData}
  fixed={false}
  paginate
  showSizePerPageList={true}
  showTotal={true}
/>;
```

### Input Pagination Example

When using pagination, you can set `paginationInput` to `true`. This renders a different form of pagination which allows
the user to type the page they want to go to. This is useful for very large data sets.

```js
import { Table } from 'gel-generic';

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
    dataField: 'email',
    text: 'Email',
  },
];

<Table
  id="table-inputPagination"
  keyField="id"
  data={tableTestData}
  columns={columnData}
  fixed={false}
  paginate
  paginationInput={true}
/>;
```

### Table Formatters

You can affect how a cell is displayed by using formatters. There are several different value formatters available that can be used within our outside of tables.

- `numberFormatter(number, props)`
- `currencyFormatter(number, props)`
- `percentageFormatter(number, props)`
- `dateFormatter(number, props)`

* `cellCurrencyInputFormatter(cell)`
* `cellPopoverFormatter(id, cell, row, placement)`
* `cellSelectFormatter(cell, options, props)`
* `cellButtonFormatter(cell, props)`
* `cellIconTextPairFormatter(cell)`
* `cellLinkFormatter(cell, to)`

You can also craft your own relatively easily. Each formatter is passed properties based on whether it is a cell, header or footer formatter:

- `formatter(cell, row)` (where cell is the value of the current cell and row is the object as provided by the data for that row)
- `headerFormatter(column, colIndex)` (where column is the object provided by the column definition)
- `footerFormatter(column, colIndex)` (where column is the object provided by the column definition)

Below is an example of several different kinds of formatters.

```js
import {
  Table,
  Layouts,
  SVGIcon,
  Checkbox,
  currencyFormatter,
  InputControl,
  cellPopoverFormatter,
  cellSelectFormatter,
  cellButtonFormatter,
} from 'gel-generic';

// Content to be shown in the popover.
const PopoverContent = () => <React.Fragment>Hello World!</React.Fragment>;

// Data to be provided to the table.
const data = [
  {
    id: 1,
    name: 'Ariel',
    email: 'nec.quam.Curabitur@Suspendissesagittis.edu',
    savings: 50000.2,
    details: 'Lorem ipsum',
    checked: false,
    popover: <PopoverContent />,
    role: 'Preparer',
  },
  {
    id: 2,
    name: 'Ursa',
    email: 'id.risus.quis@lorem.net',
    savings: 12345,
    details: 'Dolor sit amet',
    checked: true,
    popover: <PopoverContent />,
    role: 'Preparer',
    currentStatus: '',
  },
  {
    id: 3,
    name: 'Lara',
    email: 'dolor.sit.amet@Cumsociisnatoque.net',
    savings: 15,
    details: 'Consectetur adipiscing elit',
    checked: false,
    popover: <PopoverContent />,
    role: 'Preparer',
    currentStatus: '',
  },
  {
    id: 4,
    name: 'Oliver',
    email: 'Aliquam.auctor.velit@ante.co.uk',
    savings: 612.12,
    details: 'Proin vitae',
    checked: false,
    popover: <PopoverContent />,
    role: 'Preparer',
    currentStatus: '',
  },
  {
    id: 5,
    name: 'Adena',
    email: 'Nunc.sollicitudin.commodo@risusa.ca',
    savings: 9001,
    details: 'Augue at mi posuere',
    checked: false,
    popover: <PopoverContent />,
    role: 'Preparer',
    currentStatus: '',
  },
];

// Various formatters

const checkboxFormatter = (cell, row) => (
  <Checkbox value={cell} defaultChecked={row.checked} name="id" inline />
);

const iconFormatter = (cell, row) => (
  <Layouts template="flex-right">
    <SVGIcon icon="user" />
    {cell}
  </Layouts>
);

const inputEmailFormatter = (cell, row) => <InputControl name="email" defaultValue={cell} />;

const headerFormatter = (column, colIndex) => (
  <Layouts template="flex-right">
    <SVGIcon icon="user" />
    {column.text}
  </Layouts>
);

const savingsTotal = (column, colIndex) => {
  const total = data.reduce((prev, cur) => prev + cur.savings, 0);
  return currencyFormatter(total);
};

const selectOptions = [
  { value: 'Preparer', label: 'Preparer' },
  { value: 'Beep', label: 'Beep' },
  { value: 'Boop', label: 'Boop' },
];

// Column specification
const columnData = [
  {
    dataField: 'id',
    text: 'ID',
    formatter: checkboxFormatter,
    headerStyle: {
      width: '74px',
    },
    footer: '',
  },
  {
    dataField: 'name',
    text: 'Name',
    formatter: iconFormatter,
    headerFormatter,
    footer: 'Total',
  },
  {
    dataField: 'email',
    text: 'Email',
    formatter: inputEmailFormatter,
    footer: '',
  },
  {
    dataField: 'savings',
    text: 'Savings',
    headerAlign: 'right',
    formatter: (cell, row) => currencyFormatter(cell),
    align: 'right',
    footer: 0,
    footerFormatter: savingsTotal,
    footerAlign: 'right',
  },
  {
    dataField: 'details',
    text: 'Details',
    formatter: (cell, row) => cellPopoverFormatter(`${row.id}-popover`, cell, row, 'top'),
    footer: '',
  },
  {
    text: 'Role',
    dataField: 'role',
    formatter: cell =>
      cellSelectFormatter(cell, selectOptions, {
        name: 'trustRole',
        size: 'sm',
      }),
    footer: '',
  },
  {
    text: 'Current Status',
    dataField: 'currentStatus',
    formatter: cell => cellButtonFormatter(cell, { icon: 'star' }),
    footer: '',
  },
];

// Now render the table!
<Table id="table-formatters" keyField="id" data={data} columns={columnData} responsive />;
```

### Forms and Table Validation

You can use tables in combination with the `ValidationProvider` to craft complex forms. You can use lodash paths as field names to refer to a specific row in a list of data (https://lodash.com/docs/4.17.11#get). For example:

- `[1].investments`
- `[3].extra.id` (if you had an array of objects, with other internal objects)

<br />

It's important to understand that **changing state data won't change what the `ValidationProvider` considers it's internal values to be**, even if you map a state value to the initial values. Although the render method will run, the internal initial values of the `ValidationProvider` won't be updated. If you need to keep track of what the `ValidationProvider` thinks the current values are (such as might be needed for totals or other calculations), implement a method like `updateInitialValues` in the example below, to keep track of the current values yourself.

<br />

If you don't need to keep track of what the `ValidationProvider` thinks the values are until submission, you can implement the below statelessly. Simply pass the props directly to the validation provider and the table.

```js
import {
  Table,
  ValidationProvider,
  Form,
  FormGroup,
  ControlLabel,
  Checkbox,
  currencyFormatter,
  InputControlField,
  useValidationSequence,
  MandatoryValidator,
  InlineError,
  Button,
  InputCurrencyField,
  NumericRangeValidator,
} from 'gel-generic';

const lodash = require('lodash');

// The initial data as might be retrieved from an api

const initialData = {
  name: '', // Use empty strings rather than null or undefined values to create a controlled input from the start and avoid the console errors
  rows: [
    {
      id: 1,
      name: 'Ariel',
      email: 'nec.quam.Curabitur@Suspendissesagittis.edu',
      investment: 50123.09,
      checked: false,
    },
    {
      id: 2,
      name: 'Ursa',
      email: '', // Use empty strings rather than null or undefined values to create a controlled input from the start and avoid the console errors
      investment: 0,
      checked: true,
    },
    {
      id: 3,
      name: 'Lara',
      email: 'dolor.sit.amet@Cumsociisnatoque.net',
      investment: 15,
      checked: false,
    },
    {
      id: 4,
      name: 'Oliver',
      email: 'Aliquam.auctor.velit@ante.co.uk',
      investment: 612.12,
      checked: false,
    },
    {
      id: 5,
      name: 'Adena',
      email: 'Nunc.sollicitudin.commodo@risusa.ca',
      investment: 9001,
      checked: false,
    },
  ],
};

// Various stateless formatters

const checkboxFormatter = (cell, row) => {
  const fieldName = `rows.[${row.id - 1}].checked`;

  return (
    <FormGroup fieldName={fieldName}>
      <Checkbox name={fieldName} defaultChecked={row.checked} inline />
      <InlineError fieldName={fieldName} />
    </FormGroup>
  );
};

const inputEmailFormatter = (cell, row) => {
  const fieldName = `rows.[${row.id - 1}].email`;

  return (
    <FormGroup fieldName={fieldName}>
      <InputControlField name={fieldName} validate={useValidationSequence(MandatoryValidator())} />
      <InlineError fieldName={fieldName} />
    </FormGroup>
  );
};

const inputInvestmentFormatter = (cell, row) => {
  const fieldName = `rows.[${row.id - 1}].investment`;

  return (
    <FormGroup fieldName={fieldName}>
      <InputCurrencyField
        name={fieldName}
        validate={useValidationSequence(MandatoryValidator(), NumericRangeValidator({ min: 1 }))}
      />
      <InlineError fieldName={fieldName} />
    </FormGroup>
  );
};

// Our stateful validated form and table.
class ValidatedTable extends React.Component {
  constructor(props) {
    super(props);

    const { data } = props;

    this.state = {
      data,
    };

    this.updateInitialValues = this.updateInitialValues.bind(this);
    this.updateChecked = this.updateChecked.bind(this);
    this.getTotalInvestments = this.getTotalInvestments.bind(this);

    this.columns = [
      {
        dataField: 'id',
        text: 'ID',
        formatter: checkboxFormatter,
        headerStyle: {
          width: '74px',
        },
        footer: '',
        events: {
          onChange: this.updateChecked,
        },
      },
      {
        dataField: 'name',
        text: 'Name',
        footer: 'Total',
      },
      {
        dataField: 'email',
        text: 'Email',
        formatter: inputEmailFormatter,
        footer: '',
      },
      {
        dataField: 'investment',
        text: 'Investment',
        headerAlign: 'right',
        formatter: inputInvestmentFormatter,
        align: 'right',
        footer: 0,
        footerFormatter: (column, colIndex) => currencyFormatter(this.getTotalInvestments()),
        footerAlign: 'right',
      },
    ];
  }

  // Note that blur events are not triggered for the checkbox meaning we can handle that separately in updateChecked.
  updateInitialValues(e) {
    const { data } = this.state;

    const nativeEvent = e.nativeEvent;
    const fieldName = nativeEvent.target.name;
    const fieldValue = nativeEvent.target.value;
    lodash.set(data, fieldName, fieldValue);

    // This causes the content to redraw meaning our investment total to update as the formatter is rerun.
    this.setState({ data });
  }

  updateChecked(e, row, value) {
    const { data } = this.state;
    const index = data.rows.indexOf(row);

    if (index !== -1) {
      // Get the current value of the checkbox and toggle it to the opposite value.
      // This works because we are using this checked state as the default checked status of the checkbox.
      const checked = lodash.get(data, `rows.[${index}].checked`);
      lodash.set(data, `rows.[${index}].checked`, !checked);
    }

    this.setState({ data });
  }

  getTotalInvestments() {
    const { data } = this.state;
    return data.rows.reduce((prev, cur) => prev + parseFloat(cur.investment), 0);
  }

  render() {
    const { data } = this.state;
    console.log('Current data = ', data);

    return (
      <ValidationProvider
        initialValues={data}
        onBlur={this.updateInitialValues}
        onSubmit={values => {
          console.log('Submitting data = ', values);
          this.setState({ data: values });
        }}
      >
        <Form>
          <FormGroup fieldName="name">
            <ControlLabel fieldName="name">A validated field outside of the table</ControlLabel>
            <InputControlField name="name" validate={useValidationSequence(MandatoryValidator())} />
            <InlineError fieldName="name" />
          </FormGroup>

          <h3>A validated table</h3>
          <Table
            id="table-validation"
            keyField="id"
            data={data.rows}
            columns={this.columns}
            responsive
          />

          <Button type="submit" mode="primary">
            Submit
          </Button>
        </Form>
      </ValidationProvider>
    );
  }
}

// Now render the table as a form!
<ValidatedTable data={initialData} />;
```

### Table Loading State

The table can be configured to show a loading state.

```js
import { Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
    headerAlign: 'right',
    align: 'right',
  },
];

const rowData = [
  {
    id: '1',
    name: 'Laptop',
    price: '$500',
  },
  {
    id: '2',
    name: 'Monitor',
    price: '$50',
  },
  {
    id: '3',
    name: 'Monitor',
    price: '$50',
  },
];

<Table id="table-default" keyField="id" data={rowData} columns={columnData} loading={true} />;
```

### Table Empty State

The table can be configured to show a message when it is passed an empty data set.

```js
import { Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
    headerAlign: 'right',
    align: 'right',
  },
];

<Table
  id="table-default"
  keyField="id"
  data={[]}
  columns={columnData}
  showMessageWhenEmpty
  whenEmptyLabel="This table is empty!"
/>;
```

### Expandable Content

```js
import { Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
    headerAlign: 'right',
    align: 'right',
  },
];

const expandRow = {
  renderer: row => (
    <div>
      <p>{`This expand row belongs to rowKey = ${row.id}`}</p>
      <p>You can render anything here, also you can add additional data on every row object.</p>
      <p>See the example below to see what happens when you directly nest a table.</p>
    </div>
  ),
  showExpandColumn: true,
};

const rowData = [
  {
    id: '1',
    name: 'Laptop',
    price: '$500',
  },
  {
    id: '2',
    name: 'Monitor',
    price: '$50',
  },
  {
    id: '3',
    name: 'Monitor',
    price: '$50',
  },
];

<Table
  id="table-expandableContent"
  keyField="id"
  data={rowData}
  columns={columnData}
  expandRow={expandRow}
/>;
```

### Expandable Rows

```js
import { Table } from 'gel-generic';

const columnData = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
    headerAlign: 'right',
    align: 'right',
  },
];

const expandRow = (props = {}) => {
  const { mode = 'borders' } = props;

  return {
    renderer: row => {
      return (
        <Table
          id={`table-expandableRows-${row.id}`}
          keyField="id"
          data={row.children}
          columns={columnData}
          mode={mode}
        />
      );
    },
  };
};

const rowData = [
  {
    id: '1',
    name: 'Laptop',
    price: '$500',

    children: [
      {
        id: 'A',
        name: 'Lorem',
        price: '$500',
      },
      {
        id: 'B',
        name: 'Ipsum dolor sit amert',
        price: '$5,000',
      },
      {
        id: 'C',
        name:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis dignissim vestibulum. Curabitur at risus libero. Duis sollicitudin, elit eget viverra sollicitudin, lorem est pulvinar nisl, id dignissim enim justo sed dui. Cras lacinia rhoncus libero a ultricies. Ut viverra ac purus condimentum semper. Sed et lorem varius, pellentesque elit quis, bibendum urna. Fusce placerat interdum tortor in condimentum. Pellentesque vitae libero vel justo commodo molestie ac quis nisl. Vestibulum nec congue lacus, dapibus tristique justo. Duis pharetra lectus eu vehicula pretium. Quisque vulputate, nisi in sodales finibus, arcu felis bibendum quam, in interdum sem purus ac leo. Integer non ullamcorper erat, nec efficitur neque.',
        price: '$5',
      },
    ],
  },
  {
    id: '2',
    name: 'Monitor',
    price: '$50',
  },
  {
    id: '3',
    name: 'Monitor',
    price: '$50',

    children: [
      {
        id: 'D',
        name: 'Something something',
        price: '$1,999,999',
      },
      {
        id: 'E',
        name: 'Lorem ipsum dolor sit amet',
        price: '$50,999,000',
      },
    ],
  },
];

<>
  <h4>Standard bordered table with expandable rows</h4>

  <Table
    id="table-expandableRows-bordered"
    keyField="id"
    data={rowData}
    columns={columnData}
    expandRowChildren={expandRow()}
    mode="borders"
  />

  <h4>Unbordered table with expandable rows</h4>

  <Table
    id="table-expandableRows"
    keyField="id"
    data={rowData}
    columns={columnData}
    expandRowChildren={expandRow({ mode: 'no-borders' })}
    mode="no-borders"
  />

  <h4>Standard bordered table with expandable rows and indicators</h4>

  <Table
    id="table-expandableRows-bordered-col"
    keyField="id"
    data={rowData}
    columns={columnData}
    expandRowChildren={{ ...expandRow(), showExpandColumn: true }}
    mode="borders"
  />

  <h4>Unbordered table with expandable rows and indicators</h4>

  <Table
    id="table-expandableRows-col"
    keyField="id"
    data={rowData}
    columns={columnData}
    expandRowChildren={{ ...expandRow({ mode: 'no-borders' }), showExpandColumn: true }}
    mode="no-borders"
  />

  <h4>Standard bordered table with expandable rows and indicators on the right</h4>

  <Table
    id="table-expandableRows-bordered-col-right"
    keyField="id"
    data={rowData}
    columns={columnData}
    expandRowChildren={{ ...expandRow(), showExpandColumn: true, expandColumnPosition: 'right' }}
    mode="borders"
  />

  <h4>Unbordered table with expandable rows and indicators on the right</h4>

  <Table
    id="table-expandableRows-col-right"
    keyField="id"
    data={rowData}
    columns={columnData}
    expandRowChildren={{
      ...expandRow({ mode: 'no-borders' }),
      showExpandColumn: true,
      expandColumnPosition: 'right',
    }}
    mode="no-borders"
  />

  <h4>Indicators with no header indicator</h4>

  <Table
    id="table-expandableRows-col-noHeader"
    keyField="id"
    data={rowData}
    columns={columnData}
    expandRowChildren={{
      ...expandRow({ mode: 'no-borders' }),
      showExpandColumn: true,
    }}
    expandRowChildrenShowHeader={false}
    mode="no-borders"
  />
</>;
```
