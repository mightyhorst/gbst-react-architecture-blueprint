import React from 'react';
import { shallow } from 'enzyme';

import Table from './index';

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

describe('<Table /> rendering: ', () => {
  const component = shallow(<Table id="table" keyField="id" data={rowData} columns={columnData} />);

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
