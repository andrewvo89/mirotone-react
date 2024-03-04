import type { Meta, StoryObj } from '@storybook/react';

import { Fragment } from 'react';

import { RadioButton } from '../..';
import { useArgs } from '@storybook/preview-api';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>;

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

    return <RadioButton {...args} value={args.value} onChange={onChangeHandler} />;
  },
};

export const Label: Story = {
  args: {
    label: 'Option 1',
  },
};

export const Multiple: Story = {
  render: () => (
    <Fragment>
      <RadioButton label='Option 1' name='radio' />
      <RadioButton label='Option 2' name='radio' />
      <RadioButton label='Option 3' name='radio' />
    </Fragment>
  ),
};
