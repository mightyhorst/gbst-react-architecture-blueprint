import React from 'react';
import { mount } from 'enzyme';

import SectionTable from './index';
import { Table } from '../../../../index';

const headerData = [
  [
    {},
    {
      text: 'Year to Date 31/03/18',
      colspan: 3,
      align: 'center',
      section: 1,
    },
    {
      text: 'Prior YTD 31/03/17',
      colspan: 3,
      align: 'center',
      section: 4,
    },
  ],
  [
    {
      text: 'Category',
    },

    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 1,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 1,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 1,
    },

    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 4,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 4,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 4,
    },
  ],
];

const columnData = [
  {
    headerHidden: true,
    text: headerData[1][0].text,
    dataField: 'incomeType',
  },
  {
    headerHidden: true,
    text: headerData[1][1].text,
    dataField: 'ytdCalculatedTaxComponent',
  },
  {
    headerHidden: true,
    text: headerData[1][2].text,
    dataField: 'ytdWithheldDueToClientElection',
  },
  {
    headerHidden: true,
    text: headerData[1][3].text,
    dataField: 'ytdDistComponentsAfterAllocations',
  },

  {
    headerHidden: true,
    text: headerData[1][4].text,
    dataField: 'priorYtdCalculatedTaxComponent',
  },
  {
    headerHidden: true,
    text: headerData[1][5].text,
    dataField: 'priorYtdWithheldDueToClientElection',
  },
  {
    headerHidden: true,
    text: headerData[1][6].text,
    dataField: 'priorYtdDistComponentsAfterAllocations',
  },
];

const rowData = [
  {
    incomeType: 'Dividends - Franked',
    ytdCalculatedTaxComponent: 9213879,
    ytdWithheldDueToClientElection: 9834789,
    ytdDistComponentsAfterAllocations: 23324,
    priorYtdCalculatedTaxComponent: 1256713,
    priorYtdWithheldDueToClientElection: 23,
    priorYtdDistComponentsAfterAllocations: 683,
  },
  {
    incomeType: 'Dividends - Unfranked',
    ytdCalculatedTaxComponent: 456456,
    ytdWithheldDueToClientElection: 112867964,
    ytdDistComponentsAfterAllocations: 123,
    priorYtdCalculatedTaxComponent: 657,
    priorYtdWithheldDueToClientElection: 1238,
    priorYtdDistComponentsAfterAllocations: 1243142,
  },
  {
    incomeType: 'TOFA Interest (subject to non-resident WHT)',
    ytdCalculatedTaxComponent: 12,
    ytdWithheldDueToClientElection: 45734,
    ytdDistComponentsAfterAllocations: 7869,
    priorYtdCalculatedTaxComponent: 123475,
    priorYtdWithheldDueToClientElection: 3234663.5,
    priorYtdDistComponentsAfterAllocations: 5567,
  },
];

const rowData2 = [
  {
    incomeType: 'Lorem ipsum dolor sit amet',
    ytdCalculatedTaxComponent: 102398,
    ytdWithheldDueToClientElection: 232,
    ytdDistComponentsAfterAllocations: -1239,
    priorYtdCalculatedTaxComponent: 324,
    priorYtdWithheldDueToClientElection: -123,
    priorYtdDistComponentsAfterAllocations: 324234232.1231,
  },
  {
    incomeType: 'In sapien sem, pulvinar a luctus',
    ytdCalculatedTaxComponent: 1124,
    ytdWithheldDueToClientElection: 56789012,
    ytdDistComponentsAfterAllocations: 1124,
    priorYtdCalculatedTaxComponent: 1124,
    priorYtdWithheldDueToClientElection: 923456789012,
    priorYtdDistComponentsAfterAllocations: 1124,
  },
  {
    incomeType: 'Phasellus semper',
    ytdCalculatedTaxComponent: 234222,
    ytdWithheldDueToClientElection: 11223346344,
    ytdDistComponentsAfterAllocations: 98737,
    priorYtdCalculatedTaxComponent: 9872348,
    priorYtdWithheldDueToClientElection: 43598,
    priorYtdDistComponentsAfterAllocations: 123,
  },
];

describe('<SectionTable /> rendering: ', () => {
  const component = mount(
    <SectionTable id="sectionTable" headers={headerData} mode="no-borders" minWidth="900px">
      <Table
        id="sectionTable-australianIncome"
        keyField="incomeType"
        data={rowData}
        columns={columnData}
      />

      <Table
        id="sectionTable-foreignIncome"
        keyField="incomeType"
        data={rowData2}
        columns={columnData}
      />

      <Table
        id="sectionTable-capitalGains"
        keyField="incomeType"
        data={rowData}
        columns={columnData}
      />
    </SectionTable>,
  );

  it('it renders', () => {
    expect(component).toMatchSnapshot();
  });
});
