import type { Preview } from '@storybook/react';

import './preview.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting Started',
          'Tokens',
          ['Colors', 'Typography', 'Spacing', 'Border Radius'],
          'Typography',
          'Icons',
          'Layout',
          'Components',
          'Roadmap',
        ],
      },
    },
  },
};

export default preview;
