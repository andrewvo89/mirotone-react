import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../..';

const meta = {
  title: 'Components/Label',
  component: Label,
  args: {
    variant: 'info',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Info: Story = {
  args: {
    variant: 'info',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};
