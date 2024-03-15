import type { Meta } from '@storybook/react';

import { AppCard } from '../..';
import * as stories from '../../components/AppCard/AppCard.stories';

export default { ...stories.default, title: 'Recipes/App card' } satisfies Meta<typeof AppCard>;

export const Composition = stories.Composition;
