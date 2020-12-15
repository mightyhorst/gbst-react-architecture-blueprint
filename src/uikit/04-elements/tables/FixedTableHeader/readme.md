You can use this component to render a table of fixed height, vertically scrollable and headers are fixed at the top of the table.

### Basic Fixed Header Table Example

This component is used as a higher order component for the Table Component.

```js
import { Table } from 'gel-generic';

const FixedTable = FixedTableHeader(Table);

var columnData = [
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

var rowData = [
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
    name: 'Mouse',
    price: '$10',
  },
  {
    id: '4',
    name: 'Keyboard',
    price: '$20',
  },
  {
    id: '5',
    name: 'Speaker',
    price: '$40',
  },
  {
    id: '6',
    name: 'Computer Table',
    price: '$70',
  },
  {
    id: '7',
    name: 'Headset',
    price: '$50',
  },
  {
    id: '8',
    name: 'Mouse pad',
    price: '$5',
  },
  {
    id: '9',
    name: 'Webcam',
    price: '$20',
  },
];

<FixedTable id="fixedTable" keyField="id" data={rowData} columns={columnData} />;
```

### Table With Group Headers Example

Using TableWithGroupHeader as the composed component.

```js
import { TableWithGroupHeaders } from 'gel-generic';

const FixedTableWithGroupHeaders = FixedTableHeader(TableWithGroupHeaders);

const productDetails = {
  text: 'Product Identifiers',
  className: 'some-custom-class text-center',
};

var columnData = [
  {
    dataField: 'id',
    text: 'Product ID',
    groupHeader: productDetails,
  },
  {
    dataField: 'name',
    text: 'Product Name',
    groupHeader: productDetails,
  },
  {
    dataField: 'price',
    text: 'Product Price',
    headerAlign: 'right',
    align: 'right',
  },
];

var rowData = [
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
    name: 'Mouse',
    price: '$10',
  },
  {
    id: '4',
    name: 'Keyboard',
    price: '$20',
  },
  {
    id: '5',
    name: 'Speaker',
    price: '$40',
  },
  {
    id: '6',
    name: 'Computer Table',
    price: '$70',
  },
  {
    id: '7',
    name: 'Headset',
    price: '$50',
  },
  {
    id: '8',
    name: 'Mouse pad',
    price: '$5',
  },
  {
    id: '9',
    name: 'Webcam',
    price: '$20',
  },
];

<FixedTableWithGroupHeaders
  id="fixedTable-grouped"
  keyField="id"
  data={rowData}
  columns={columnData}
/>;
```
