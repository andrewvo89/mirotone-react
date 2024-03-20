import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../..';
import * as stories from '../../components/Button/Button.stories';

const meta = {
  ...stories.default,
  title: 'Recipes/Icon & text button',
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconTextButton: Story = stories.IconTextButton;
