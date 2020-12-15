import React from 'react';
import { shallow } from 'enzyme';

import TableWithGroupHeaders from './index';

const productDetails = {
  label: 'Product Identifiers',
  classes: 'some-custom-class text-center',
  sectionBreak: true,
};

const columnData = [
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

describe('<TableWithGroupHeaders /> rendering: ', () => {
  const component = shallow(
    <TableWithGroupHeaders
      id="tableWithHeaders"
      keyField="id"
      data={rowData}
      columns={columnData}
      mode="no-borders"
    />,
  );

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
