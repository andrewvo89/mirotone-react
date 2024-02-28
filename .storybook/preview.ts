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
      },
    },
  },
};

export default preview;
