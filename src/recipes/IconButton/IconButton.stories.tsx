import type { Meta } from '@storybook/react';

import { Button } from '../..';
import * as stories from '../../components/Button/Button.stories';

export default { ...stories.default, title: 'Recipes/Icon button' } satisfies Meta<typeof Button>;

export const IconButton = stories.IconButton;
