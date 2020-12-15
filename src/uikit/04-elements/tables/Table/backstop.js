const url = 'Generic%20Components/Tables/Table';
const label = 'Generic Components - Tables - Table';

module.exports = [
  {
    label,
    url,
    hideSelectors: ['.LoadingSpinner'],
    viewports: [
      {
        label: 'desktop',
        width: 1920,
        height: 1080,
      },
      {
        label: 'ipad',
        width: 768,
        height: 1024,
      },
    ],
  },
  {
    label: `${label}:SubmittedTable`,
    url,
    selectors: ['.preview-Table-7'],
    clickSelectors: ['.preview-Table-7 .btn-primary'],
  },
  {
    label: `${label}:ExpandedContent`,
    url,
    selectors: ['.preview-Table-10'],
    clickSelectors: ['.preview-Table-10 .expand-cell'],
  },
  {
    label: `${label}:ExpandedRows`,
    url,
    selectors: ['.preview-Table-11'],
    clickSelectors: [
      '.preview-Table-11 #table-expandableRows-bordered tbody td',
      '.preview-Table-11 #table-expandableRows tbody td',
      '.preview-Table-11 #table-expandableRows-bordered-col tbody td',
      '.preview-Table-11 #table-expandableRows-col tbody td',
      '.preview-Table-11 #table-expandableRows-bordered-col-right tbody td',
      '.preview-Table-11 #table-expandableRows-col-right tbody td',
      '.preview-Table-11 #table-expandableRows-col-noHeader tbody td',
    ],
  },
];
