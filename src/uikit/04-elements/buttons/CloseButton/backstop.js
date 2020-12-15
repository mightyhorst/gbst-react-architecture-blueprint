const actionHelpers = require('../../../../../config/backstop/actionHelpers');

const { createActionTests } = actionHelpers;

const url = 'Generic%20Components/Buttons/CloseButton';
const label = 'Generic Components - Buttons - CloseButton';

const actionTypes = [
  { id: 'Panel', selectors: ['.preview-CloseButton-1'], actionSelectors: ['.Panel .CloseButton'] },
  {
    id: 'Alert',
    selectors: ['.preview-CloseButton-2'],
    actionSelectors: ['.alert-success .CloseButton'],
  },
];

const actionTests = createActionTests([], url, label, actionTypes);

module.exports = [
  {
    label,
    url,
    selectors: ['.preview-CloseButton-1', '.preview-CloseButton-2'],
  },
  {
    label: `${label}:Modal`,
    url,
    selectors: ['.modal-content'],
    clickSelectors: ['.preview-CloseButton-3 .btn-primary'],
  },
].concat(actionTests);
