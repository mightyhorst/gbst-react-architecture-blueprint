import React from 'react';
import { shallow } from 'enzyme';

import FilteredTable from './index';

const tableTestData = [
  {
    id: 1,
    name: 'Ariel',
    email: 'nec.quam.Curabitur@Suspendissesagittis.edu',
  },
];

const viewsData = [
  {
    id: 0,
    defaultActive: true,
    name: 'Transaction Detail',
    columns: [
      {
        dataField: 'id',
        text: 'ID',
      },
    ],
  },
];

const filtersData = [
  {
    name: 'Date Range',
  },
];

const activeFiltersData = [
  {
    text: 'test',
    onDismiss: null,
  },
];

describe('<FilteredTable /> rendering: ', () => {
  const component = shallow(
    <FilteredTable
      id="filteredTable"
      views={viewsData}
      filters={filtersData}
      activeFilters={activeFiltersData}
      data={tableTestData}
    />,
  );

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
