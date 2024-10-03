import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../..';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    activeIndex: 0,
    tabs: [
      { id: '1', children: 'Tab 1' },
      { id: '2', children: 'Tab 2' },
      { id: '3', children: 'Tab 3' },
    ],
  },
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    activeIndex: {
      control: 'inline-radio',
      options: [0, 1, 2],
    },
  },
};

export const Badges: Story = {
  args: {
    activeIndex: 0,
    tabs: [
      { id: '1', badge: '1,000', children: 'Tab' },
      { id: '2', badge: '2,201', children: 'Tab' },
      { id: '3', badge: '2,858', children: 'Tab' },
    ],
  },
  argTypes: {
    activeIndex: {
      control: 'inline-radio',
      options: [0, 1, 2],
    },
  },
};
