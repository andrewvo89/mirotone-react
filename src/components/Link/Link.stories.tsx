import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../..';

const meta = {
  title: 'Components/Link',
  component: Link,
  args: {
    variant: 'primary',
    children: 'Link',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary link',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger link',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text link',
  },
};
