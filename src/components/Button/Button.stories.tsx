import type { Meta, StoryObj } from '@storybook/react';

import { Button, Icon, Text, tokens } from '../..';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: {
        summary: 'medium',
      },
    },
    variant: {
      defaultValue: {
        summary: 'primary',
      },
    },
    isDisabled: {
      defaultValue: {
        summary: false,
      },
    },
    isLoading: {
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    children: 'Button',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
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

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const IconButton: Story = {
  name: 'Icon button',
  args: {
    children: <Icon name='activity' />,
  },
};

export const IconTextButton: Story = {
  name: 'Icon & text button',
  args: {
    children: (
      <>
        <Icon name='activity' />
        <Text>Icon & text button</Text>
      </>
    ),
  },
};

export const Gap: Story = {
  args: {
    gap: tokens.space.xlarge,
    children: (
      <>
        <Icon name='activity' />
        <Text>Icon & text button</Text>
      </>
    ),
  },
};
