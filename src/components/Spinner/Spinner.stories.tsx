import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '../..';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: {
        summary: 'medium',
      },
    },
    spinnerColor: {
      defaultValue: {
        summary: 'var(--indigo700)',
      },
    },
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

export const Medium: Story = {
  args: {
    size: 'medium',
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
