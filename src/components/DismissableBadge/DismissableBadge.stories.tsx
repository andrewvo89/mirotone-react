import type { Meta, StoryObj } from '@storybook/react';

import { DismissableBadge } from '../..';
import { useState } from 'react';

const meta = {
  title: 'Beta/Dismissable badge',
  component: DismissableBadge,
  args: {
    children: 'User Mapping',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DismissableBadge>;

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

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const CloseAction: Story = {
  name: 'Close action',
  render: function App(args) {
    const [isClosed, setIsClosed] = useState(false);

    const onCloseHandler = () => {
      setIsClosed(true);
      setTimeout(() => {
        setIsClosed(false);
      }, 1000);
    };

    return (
      <div style={{ display: isClosed ? 'none' : 'block' }}>
        <DismissableBadge {...args} onClose={onCloseHandler}>
          User Mapping
        </DismissableBadge>
      </div>
    );
  },
};
