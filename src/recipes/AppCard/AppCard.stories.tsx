import type { Meta, StoryObj } from '@storybook/react';

import { AppCard } from '../..';
import * as stories from '../../components/AppCard/AppCard.stories';

const meta = {
  ...stories.default,
  title: 'Recipes/App card',
  tags: ['autodocs'],
} satisfies Meta<typeof AppCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Composition: Story = stories.Composition;
