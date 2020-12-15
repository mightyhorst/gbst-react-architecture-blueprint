const url = 'Generic%20Components/Tables/SectionTable';
const label = 'Generic Components - Tables - SectionTable';

module.exports = [
  {
    label,
    url,
  },
  {
    label: `${label}:ExpandedRows:Left`,
    url,
    selectors: ['.preview-SectionTable-6'],
    clickSelectors: ['.preview-SectionTable-6 #sectionTable-foreignIncome tbody td'],
  },
  {
    label: `${label}:ExpandedRows:Right`,
    url,
    selectors: ['.preview-SectionTable-7'],
    clickSelectors: ['.preview-SectionTable-7 #sectionTable-foreignIncome tbody td'],
  },
];
