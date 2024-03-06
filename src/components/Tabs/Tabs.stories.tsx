import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../..';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    activeIndex: 0,
    tabs: [
      { id: '1', badge: '1,000', children: 'Tag' },
      { id: '2', badge: '2,201', children: 'Tag' },
      { id: '3', badge: '2,858', children: 'Tag' },
    ],
  },
  parameters: {
    layout: 'fullscreen',
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
