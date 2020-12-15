A `SectionTable` creates a wrapper around a set of tables, allowing them to have columns that match in width. This is usually combined with a header over all of the tables that provides a single set of column names, rather than headings per table. Note that in this case you need to hide the headers on the tables themselves, but still provide text to to help screen readers identify them.

#### Section Table Example

To create a basic data table, two objects need to be passed. One describes the structure of the columns and the other is the row data.

```js
import { SectionTable, Table, currencyFormatter, Panel } from 'gel-generic';

var headerData = [
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
      section: 2,
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
      section: 2,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 2,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 2,
    },
  ],
];

var columnData = [
  {
    headerHidden: true,
    width: '200px',
    text: headerData[1][0].text,
    dataField: 'incomeType',
    footer: 'Gross Total',
  },
  {
    headerHidden: true,
    text: headerData[1][1].text,
    dataField: 'ytdCalculatedTaxComponent',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(9830),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][2].text,
    dataField: 'ytdWithheldDueToClientElection',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(98340),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][3].text,
    dataField: 'ytdDistComponentsAfterAllocations',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(983470),
    footerAlign: 'right',
  },

  {
    headerHidden: true,
    text: headerData[1][4].text,
    dataField: 'priorYtdCalculatedTaxComponent',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(9834780),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][5].text,
    dataField: 'priorYtdWithheldDueToClientElection',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(98347890),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][6].text,
    dataField: 'priorYtdDistComponentsAfterAllocations',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(98347890),
    footerAlign: 'right',
  },
];

var rowData = [
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

var rowData2 = [
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

<>
  <SectionTable
    id="sectionTable"
    headers={headerData}
    columns={columnData}
    mode="no-borders"
    minWidth="900px"
  >
    <Panel>
      <Panel.Body>
        <h4>Australian Income</h4>
        <Table
          id="sectionTable-australianIncome"
          keyField="incomeType"
          data={rowData}
          columns={columnData}
        />
      </Panel.Body>
    </Panel>

    <Panel>
      <Panel.Body>
        <h4>Foreign Income</h4>
        <Table
          id="sectionTable-foreignIncome"
          keyField="incomeType"
          data={rowData2}
          columns={columnData}
        />
      </Panel.Body>
    </Panel>

    <Panel>
      <Panel.Body>
        <h4>Capital Gains</h4>
        <Table
          id="sectionTable-capitalGains"
          keyField="incomeType"
          data={rowData}
          columns={columnData}
        />
      </Panel.Body>
    </Panel>
  </SectionTable>
</>;
```

#### Other Combinations Example

You don't have to specify sections in order. You can use them however you want.

```js
import { SectionTable, Table, currencyFormatter, Panel } from 'gel-generic';

var headerData = [
  [
    {},
    {
      text: 'Year to Date 31/03/18',
      colspan: 3,
      align: 'center',
      section: 2,
    },
    {
      text: 'Prior YTD 31/03/17',
      colspan: 3,
      align: 'center',
      section: 2,
    },
  ],
  [
    {
      text: 'Category',
    },

    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 2,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 2,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 2,
    },

    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 2,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 2,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 2,
    },
  ],
];

<>
  <SectionTable
    id="sectionTable"
    headers={headerData}
    columns={sectionTableTestData.columnData}
    mode="no-borders"
    minWidth="900px"
  >
    <Panel>
      <Panel.Body>
        <h4>Australian Income</h4>
        <Table
          id="sectionTable-australianIncome"
          keyField="incomeType"
          data={sectionTableTestData.rowData}
          columns={sectionTableTestData.columnData}
        />
      </Panel.Body>
    </Panel>
  </SectionTable>
</>;
```

```js
import { SectionTable, Table, currencyFormatter, Panel } from 'gel-generic';

var headerData = [
  [
    {},
    {
      text: 'Year to Date 31/03/18',
      colspan: 3,
      align: 'center',
      section: 3,
    },
    {
      text: 'Prior YTD 31/03/17',
      colspan: 3,
      align: 'center',
      section: 1,
    },
  ],
  [
    {
      text: 'Category',
    },

    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 3,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 3,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 3,
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
  ],
];

<>
  <SectionTable
    id="sectionTable"
    headers={headerData}
    columns={sectionTableTestData.columnData}
    mode="no-borders"
    minWidth="900px"
  >
    <Panel>
      <Panel.Body>
        <h4>Australian Income</h4>
        <Table
          id="sectionTable-australianIncome"
          keyField="incomeType"
          data={sectionTableTestData.rowData}
          columns={sectionTableTestData.columnData}
        />
      </Panel.Body>
    </Panel>
  </SectionTable>
</>;
```

```js
import { SectionTable, Table, currencyFormatter, Panel } from 'gel-generic';

var headerData = [
  [
    {
      text: 'Year to Date 31/03/18',
      colspan: 3,
      align: 'center',
      section: 4,
    },
    {
      text: 'Prior YTD 31/03/17',
      colspan: 3,
      align: 'center',
      section: 2,
    },
  ],
  [
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

    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 2,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 2,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 2,
    },
  ],
];

const columnData = [...sectionTableTestData.columnData];
columnData.shift();

<>
  <SectionTable
    id="sectionTable"
    headers={headerData}
    columns={columnData}
    mode="no-borders"
    minWidth="900px"
  >
    <Panel>
      <Panel.Body>
        <h4>Australian Income</h4>
        <Table
          id="sectionTable-australianIncome"
          keyField="incomeType"
          data={sectionTableTestData.rowData}
          columns={columnData}
        />
      </Panel.Body>
    </Panel>
  </SectionTable>
</>;
```

```js
import { SectionTable, Table, currencyFormatter, Panel } from 'gel-generic';

var headerData = [
  [
    {
      text: 'Year to Date 31/03/18',
      colspan: 3,
      align: 'center',
      section: 3,
    },
    {
      text: 'Prior YTD 31/03/17',
      colspan: 3,
      align: 'center',
      section: 5,
    },
    {},
  ],
  [
    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 3,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 3,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 3,
    },

    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 5,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 5,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 5,
    },

    {
      text: 'Category',
    },
  ],
];

const columnData = [...sectionTableTestData.columnData];
const first = columnData[0];
columnData.shift();
columnData.push(first);

<>
  <SectionTable
    id="sectionTable"
    headers={headerData}
    columns={columnData}
    mode="no-borders"
    minWidth="900px"
  >
    <Panel>
      <Panel.Body>
        <h4>Australian Income</h4>
        <Table
          id="sectionTable-australianIncome"
          keyField="incomeType"
          data={sectionTableTestData.rowData}
          columns={columnData}
        />
      </Panel.Body>
    </Panel>
  </SectionTable>
</>;
```

#### Tables with Expandable Rows

```js
import { SectionTable, Table, currencyFormatter, Panel } from 'gel-generic';

var headerData = [
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
      section: 2,
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
      section: 2,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 2,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 2,
    },
  ],
];

var columnData = [
  {
    headerHidden: true,
    width: '200px',
    text: headerData[1][0].text,
    dataField: 'incomeType',
    footer: 'Gross Total',
  },
  {
    headerHidden: true,
    text: headerData[1][1].text,
    dataField: 'ytdCalculatedTaxComponent',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(9830),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][2].text,
    dataField: 'ytdWithheldDueToClientElection',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(98340),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][3].text,
    dataField: 'ytdDistComponentsAfterAllocations',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(983470),
    footerAlign: 'right',
  },

  {
    headerHidden: true,
    text: headerData[1][4].text,
    dataField: 'priorYtdCalculatedTaxComponent',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(9834780),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][5].text,
    dataField: 'priorYtdWithheldDueToClientElection',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(98347890),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][6].text,
    dataField: 'priorYtdDistComponentsAfterAllocations',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(98347890),
    footerAlign: 'right',
  },
];

var rowData = [
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

var rowData2 = [
  {
    incomeType: 'Lorem ipsum dolor sit amet',
    ytdCalculatedTaxComponent: 102398,
    ytdWithheldDueToClientElection: 232,
    ytdDistComponentsAfterAllocations: -1239,
    priorYtdCalculatedTaxComponent: 324,
    priorYtdWithheldDueToClientElection: -123,
    priorYtdDistComponentsAfterAllocations: 324234232.1231,

    children: [...rowData],
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

const expandRow = {
  renderer: row => {
    return (
      <Table
        id={`sectionTable-expandableRows-${row.incomeType}`}
        keyField="incomeType"
        data={row.children}
        columns={columnData}
        mode="no-borders"
      />
    );
  },
  showExpandColumn: true,
};

<>
  <SectionTable
    id="sectionTable"
    headers={headerData}
    columns={columnData}
    mode="no-borders"
    minWidth="900px"
    hasExpandableRowMarkers={true}
  >
    <Panel>
      <Panel.Body>
        <h4>Australian Income</h4>
        <Table
          id="sectionTable-australianIncome"
          keyField="incomeType"
          data={rowData}
          columns={columnData}
          expandRowChildren={expandRow}
          expandRowChildrenShowHeader={false}
        />
      </Panel.Body>
    </Panel>

    <Panel>
      <Panel.Body>
        <h4>Foreign Income</h4>
        <Table
          id="sectionTable-foreignIncome"
          keyField="incomeType"
          data={rowData2}
          columns={columnData}
          expandRowChildren={expandRow}
          expandRowChildrenShowHeader={false}
        />
      </Panel.Body>
    </Panel>

    <Panel>
      <Panel.Body>
        <h4>Capital Gains</h4>
        <Table
          id="sectionTable-capitalGains"
          keyField="incomeType"
          data={rowData}
          columns={columnData}
          expandRowChildren={expandRow}
          expandRowChildrenShowHeader={false}
        />
      </Panel.Body>
    </Panel>
  </SectionTable>
</>;
```

#### Tables with Expandable Rows and Indicators on the Right

```js
import { SectionTable, Table, currencyFormatter, Panel } from 'gel-generic';

var headerData = [
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
      section: 2,
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
      section: 2,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 2,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 2,
    },
  ],
];

var columnData = [
  {
    headerHidden: true,
    width: '200px',
    text: headerData[1][0].text,
    dataField: 'incomeType',
    footer: 'Gross Total',
  },
  {
    headerHidden: true,
    text: headerData[1][1].text,
    dataField: 'ytdCalculatedTaxComponent',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(9830),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][2].text,
    dataField: 'ytdWithheldDueToClientElection',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(98340),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][3].text,
    dataField: 'ytdDistComponentsAfterAllocations',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(983470),
    footerAlign: 'right',
  },

  {
    headerHidden: true,
    text: headerData[1][4].text,
    dataField: 'priorYtdCalculatedTaxComponent',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(9834780),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][5].text,
    dataField: 'priorYtdWithheldDueToClientElection',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(98347890),
    footerAlign: 'right',
  },
  {
    headerHidden: true,
    text: headerData[1][6].text,
    dataField: 'priorYtdDistComponentsAfterAllocations',
    align: 'right',
    formatter: currencyFormatter,
    footer: currencyFormatter(98347890),
    footerAlign: 'right',
  },
];

var rowData = [
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

var rowData2 = [
  {
    incomeType: 'Lorem ipsum dolor sit amet',
    ytdCalculatedTaxComponent: 102398,
    ytdWithheldDueToClientElection: 232,
    ytdDistComponentsAfterAllocations: -1239,
    priorYtdCalculatedTaxComponent: 324,
    priorYtdWithheldDueToClientElection: -123,
    priorYtdDistComponentsAfterAllocations: 324234232.1231,

    children: [...rowData],
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

const expandRow = {
  renderer: row => {
    return (
      <Table
        id={`sectionTable-expandableRows-${row.incomeType}`}
        keyField="incomeType"
        data={row.children}
        columns={columnData}
        mode="no-borders"
      />
    );
  },
  showExpandColumn: true,
  expandColumnPosition: 'right',
};

<>
  <SectionTable
    id="sectionTable"
    headers={headerData}
    columns={columnData}
    mode="no-borders"
    minWidth="900px"
    hasExpandableRowMarkers={true}
    expandableRowMarkersPosition="right"
  >
    <Panel>
      <Panel.Body>
        <h4>Australian Income</h4>
        <Table
          id="sectionTable-australianIncome"
          keyField="incomeType"
          data={rowData}
          columns={columnData}
          expandRowChildren={expandRow}
          expandRowChildrenShowHeader={false}
        />
      </Panel.Body>
    </Panel>

    <Panel>
      <Panel.Body>
        <h4>Foreign Income</h4>
        <Table
          id="sectionTable-foreignIncome"
          keyField="incomeType"
          data={rowData2}
          columns={columnData}
          expandRowChildren={expandRow}
          expandRowChildrenShowHeader={false}
        />
      </Panel.Body>
    </Panel>

    <Panel>
      <Panel.Body>
        <h4>Capital Gains</h4>
        <Table
          id="sectionTable-capitalGains"
          keyField="incomeType"
          data={rowData}
          columns={columnData}
          expandRowChildren={expandRow}
          expandRowChildrenShowHeader={false}
        />
      </Panel.Body>
    </Panel>
  </SectionTable>
</>;
```

#### Fixed Header Example

The fixed header is visible so long as with the header displayed on top of the screen, any table content is still visible. This example uses a table with no borders, but indented sides.

```js
import { SectionTable, Table, currencyFormatter, Panel } from 'gel-generic';

var headerData = [
  [
    {},
    {
      text: 'Year to Date 31/03/18',
      colspan: 3,
      align: 'center',
      section: 2,
    },
    {
      text: 'Prior YTD 31/03/17',
      colspan: 3,
      align: 'center',
      section: 2,
    },
  ],
  [
    {
      text: 'Category',
    },

    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 2,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 2,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 2,
    },

    {
      text: 'Calculated Tax Component',
      align: 'right',
      section: 2,
    },
    {
      text: 'Withheld Due to Client Election',
      align: 'right',
      section: 2,
    },
    {
      text: 'Dist. Components After Allocations',
      align: 'right',
      section: 2,
    },
  ],
];

<>
  <SectionTable
    id="fixedHeader"
    headers={headerData}
    columns={sectionTableTestData.columnData}
    mode="no-borders-indented"
    minWidth="900px"
    fixedHeader
  >
    <Panel>
      <Panel.Body>
        <h4>Australian Income</h4>
        <Table
          id="fixedHeader-table"
          keyField="incomeType"
          data={sectionTableTestData.rowData}
          columns={sectionTableTestData.columnData}
        />
      </Panel.Body>
    </Panel>
  </SectionTable>

  <div style={{ height: '1100px' }}>
    <hr />
    This is spacer content so you can scroll down and see the fixed header in the above table
  </div>
</>;
```
