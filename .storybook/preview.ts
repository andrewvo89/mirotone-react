import type { Preview } from '@storybook/react';

import './preview.css';

const preview: Preview = {
  parameters: {
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
          'Styling',
          'Recipes',
        ],
      },
    },
  },
};

export default preview;
