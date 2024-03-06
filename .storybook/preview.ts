import type { Preview } from '@storybook/react';

import './preview.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    // controls: {
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/i,
    //   },
    // },
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
        ],
      },
    },
  },
};

export default preview;
