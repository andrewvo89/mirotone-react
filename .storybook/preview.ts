import type { Preview } from '@storybook/react';

import './preview.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting started',
          'Tokens',
          ['Colors', 'Typography', 'Spacing', 'Border radius'],
          'Typography',
          'Icons',
          'Layout',
          'Components',
        ],
      },
    },
  },
};

export default preview;
