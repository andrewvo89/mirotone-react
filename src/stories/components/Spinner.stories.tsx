import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '../..';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
    size: 'medium',
    spinnerColor: 'var(--indigo700)',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Colored: Story = {
  args: {
    spinnerColor: 'var(--red900)',
  },
};
