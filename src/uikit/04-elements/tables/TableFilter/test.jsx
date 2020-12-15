import React from 'react';
import { shallow } from 'enzyme';

import TableFilter from './index';
import { Table } from '../../../../index';

const columnData = [
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
];

describe('<Panel /> rendering: ', () => {
  const component = shallow(
    <Table
      id="test"
      keyField="id"
      data={rowData}
      columns={columnData}
      filter={TableFilter.filterFactory()}
    />,
  );

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
