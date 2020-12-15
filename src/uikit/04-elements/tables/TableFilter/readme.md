### Table with Filtering

To create a table with filtering on a particular column, a filtering function needs to be added to the column. The function to be used depends upon the datatype to be filtered. Go, on try filtering Product Name.

```js
import { Table } from 'gel-generic';

var columnData = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
    filter: TableFilter.textFilter(),
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
];

<Table
  id="tableFilter-table"
  keyField="id"
  data={rowData}
  columns={columnData}
  filter={TableFilter.filterFactory()}
/>;
```
