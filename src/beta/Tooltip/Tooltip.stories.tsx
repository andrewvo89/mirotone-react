import type { Meta, StoryObj } from '@storybook/react';

import { Button, Flex, Text, Tooltip, tokens } from '../..';

import { useArgs } from '@storybook/preview-api';

const meta = {
  title: 'Beta/Tooltip',
  component: Tooltip,
  argTypes: {
    size: {
      defaultValue: {
        summary: 'medium',
      },
    },
    delayDuration: {
      defaultValue: {
        summary: 500,
      },
    },
    disableCloseOnOutside: {
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    trigger: <Button>Hover over me</Button>,
    children: 'This is a tooltip text.',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DelayDuration: Story = {
  args: {
    delayDuration: 1000,
  },
};

export const PreferredSide: Story = {
  name: 'Preferred side',
  args: {
    side: 'right',
    open: true,
  },
  render: (args) => <Tooltip {...args}>{`This is a ${args.side} tooltip text.`}</Tooltip>,
};

export const Small: Story = {
  args: {
    size: 'small',
    open: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    open: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    open: true,
  },
};

export const Controlled: Story = {
  args: {
    open: true,
    trigger: <Text>Tooltip trigger is over here</Text>,
  },
  render: function App(args) {
    const { open, onOpenChange, ...rest } = args;
    const [, setArgs] = useArgs();

    const onOpenChangeHandler = (open: boolean) => {
      onOpenChange?.(open);
      setArgs({ open });
    };

    return (
      <Flex gap={tokens.space.small} alignItems='center'>
        <Button onClick={() => onOpenChangeHandler(!open)}>Toggle tooltip manually</Button>
        <Tooltip {...rest} onOpenChange={onOpenChangeHandler} open={open} disableCloseOnOutside>
          {args.children}
        </Tooltip>
      </Flex>
    );
  },
};
