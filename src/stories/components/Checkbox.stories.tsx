import type { Meta, StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';

import { Checkbox } from '../..';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Controlled: Story = {
  render: function Component(args) {
    const [, setArgs] = useArgs();

    const onChange = (value: boolean) => {
      args.onChange?.(value);
      setArgs({ value });
    };

    return <Checkbox {...args} onChange={onChange} />;
  },
  args: {
    value: false,
  },
};

export const Label: Story = {
  args: {
    label: 'Checkbox',
  },
};
