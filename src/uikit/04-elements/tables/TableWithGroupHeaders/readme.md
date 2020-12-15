You can use this component to render a table with grouped headers

### Basic Grouped Header Table Example

```js
import { TableWithGroupHeaders } from 'gel-generic';

const productDetails = {
  text: 'Product Identifiers',
  className: 'some-custom-class text-center',
  sectionBreak: true,
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
    sectionBreak: true,
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
];

<TableWithGroupHeaders
  id="tableGroupHeaders"
  keyField="id"
  data={rowData}
  columns={columnData}
  mode="no-borders"
/>;
```
