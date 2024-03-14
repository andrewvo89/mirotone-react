import type { Meta, StoryObj } from '@storybook/react';
import { Button, Flex, Icon, tokens } from '../..';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  args: {
    children: (
      <>
        <Button>
          <Icon name='arrow-left' />
        </Button>
        <Button>
          <Icon name='arrow-up' />
        </Button>
        <Button>
          <Icon name='arrow-down' />
        </Button>
        <Button>
          <Icon name='arrow-right' />
        </Button>
      </>
    ),
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    flexDirection: 'column',
  },
};

export const Horizontal: Story = {
  args: {
    flexDirection: 'row',
  },
};

export const Wrap: Story = {
  args: {
    flexWrap: 'wrap',
  },
  render: (args) => <Flex {...args} style={{ width: 100 }} />,
};

export const Gap: Story = {
  args: {
    gap: tokens.space.xsmall,
  },
};
