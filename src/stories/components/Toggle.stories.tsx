import type { Meta, StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';

import { Toggle } from '../..';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Controlled: Story = {
  args: {
    value: false,
  },
  render: function Component(args) {
    const [, setArgs] = useArgs();

    const onChangeHandler = (value: boolean) => {
      args.onChange?.(value);
      setArgs({ value });
    };

    return <Toggle {...args} value={args.value} onChange={onChangeHandler} />;
  },
};

export const Label: Story = {
  args: {
    label: 'Toggle',
  },
};
