import type { Preview } from '@storybook/react';

import './preview.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Mirotone React',
          'Tokens',
          ['Colors', 'Typography', 'Spacing', 'Border radius'],
          'Typography',
          'Icons',
          'Layout',
          'Components',
          'Beta',
          'Recipes',
        ],
      },
    },
  },
};

export default preview;
