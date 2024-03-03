import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../..';

const meta = {
  title: 'Components/Link',
  component: Link,
  args: {
    variant: 'primary',
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
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};
