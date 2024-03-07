import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../..';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: {
      defaultValue: {
        summary: 'medium',
      },
    },
  },
  args: {
    name: 'shapes',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const XSmall: Story = {
  args: {
    size: 'xsmall',
  },
};

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

export const XLarge: Story = {
  args: {
    size: 'xlarge',
  },
};

export const XXLarge: Story = {
  args: {
    size: 'xxlarge',
  },
};
