import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Mirotone React',
  brandUrl: 'https://github.com/andrewvo89/mirotone-react',
  brandImage: `${process.env.PUBLIC_URL}/mirotone-logo.png`,
  brandTarget: '_blank',
});
