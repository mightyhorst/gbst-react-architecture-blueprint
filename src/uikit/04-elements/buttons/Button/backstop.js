const actionHelpers = require('../../../../../config/backstop/actionHelpers');

const { createActionTests } = actionHelpers;

const url = 'Generic%20Components/Buttons/Button';
const label = 'Generic Components - Buttons - Button';
const selector = '.styleguideist-component-wrapper:first-child';

const types = [
  { id: 'Success', actionSelectors: [`${selector} .btn-success`] },
  { id: 'Info', actionSelectors: [`${selector} .btn-info`] },
  { id: 'Warning', actionSelectors: [`${selector} .btn-warning`] },
  { id: 'Danger', actionSelectors: [`${selector} .btn-danger`] },
  { id: 'Default', actionSelectors: [`${selector} .btn-default`] },
  { id: 'Primary', actionSelectors: [`${selector} .btn-primary`] },
  { id: 'Secondary', actionSelectors: [`${selector} .btn-secondary`] },
  { id: 'Link', actionSelectors: [`${selector} .btn-link`] },
  { id: 'Inverse:Default', actionSelectors: [`${selector} .btn-inverse.btn-default`] },
  { id: 'Inverse:Primary', actionSelectors: [`${selector} .btn-inverse.btn-primary`] },
  { id: 'Inverse:Secondary', actionSelectors: [`${selector} .btn-inverse.btn-secondary`] },
  { id: 'Inverse:Link', actionSelectors: [`${selector} .btn-inverse.btn-link`] },
];

const actionTests = createActionTests([], url, label, types);

module.exports = [
  {
    label,
    url,
    hideSelectors: ['.btn .LoadingSpinner'],
  },
].concat(actionTests);
