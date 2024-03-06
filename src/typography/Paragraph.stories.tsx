import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from '..';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    children: 'Paragraph large',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    children: 'Paragraph medium',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Paragraph small',
    size: 'small',
  },
};
