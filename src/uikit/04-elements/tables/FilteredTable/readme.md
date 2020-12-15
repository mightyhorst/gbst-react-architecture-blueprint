This component allows the user to display data and change the data view. It also provides search and filter components
to allow the user to filter the data sent to the table.

### Example

```js
import { Form, FormGroup, ControlLabel, InputControl, FilteredTable } from 'gel-generic';

const viewsData = [
  {
    id: 0,
    defaultActive: false,
    name: 'Transaction Detail',
    columns: [
      {
        dataField: 'id',
        text: 'ID',
        sort: true,
      },
      {
        dataField: 'name',
        text: 'Name',
        sort: true,
      },
    ],
  },
  {
    id: 1,
    defaultActive: true,
    name: 'Foreign Detail',
    columns: [
      {
        dataField: 'name',
        text: 'Names',
        sort: true,
      },
      {
        dataField: 'email',
        text: 'Email',
        sort: true,
      },
    ],
  },
];

const filtersData = [
  {
    name: 'Date Range',
    children: (
      <Form>
        <FormGroup>
          <ControlLabel>Date Range</ControlLabel>
          <InputControl type="date" />
        </FormGroup>
      </Form>
    ),
  },
  {
    name: 'Security Code',
    children: (
      <Form>
        <FormGroup>
          <ControlLabel>Security Code</ControlLabel>
          <InputControl type="text" />
        </FormGroup>
      </Form>
    ),
  },
];

const activeFiltersData = [
  {
    text: 'Date created after 12/02/13',
    type: 'Date Range',
    onDismiss: () => {},
  },
  {
    text: 'Security code 01561',
    type: 'Security Code',
  },
];

<FilteredTable
  id="filteredTable"
  views={viewsData}
  filters={filtersData}
  activeFilters={activeFiltersData}
  data={tableTestData}
  mode="no-borders"
  updatedVariant
/>;
```
