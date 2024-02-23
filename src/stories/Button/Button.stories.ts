import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   children: {
  //     description: "The content of the button.",
  //     control: "text",
  //     type: "string",
  //   },
  //   isDisabled: {
  //     description: "Whether the button is disabled.",
  //     type: "boolean",
  //   },
  // },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'small',
  },
};
