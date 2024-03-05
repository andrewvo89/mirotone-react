import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../..';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    children: 'Text large',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    children: 'Text medium',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Text small',
    size: 'small',
  },
};
