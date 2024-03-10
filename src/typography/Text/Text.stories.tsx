import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../..';

const meta = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    size: {
      defaultValue: {
        summary: 'medium',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Text small',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Text medium',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Text large',
    size: 'large',
  },
};
