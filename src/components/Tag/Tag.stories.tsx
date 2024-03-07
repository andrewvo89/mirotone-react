import type { Meta, StoryObj } from '@storybook/react';

import { LinkTag, Tag, TagButton, Text } from '../..';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    textColor: {
      defaultValue: {
        summary: 'var(--black)',
      },
    },
    backgroundColor: {
      defaultValue: {
        summary: 'var(--indigo50)',
      },
    },
  },
  args: {
    children: 'Tag',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Colored: Story = {
  args: {
    textColor: 'var(--blackAlpha40)',
    backgroundColor: 'var(--yellow700)',
  },
};

export const Link: Story = {
  render: (args) => (
    <LinkTag
      textColor={args.textColor}
      backgroundColor={args.backgroundColor}
      href='https://example.com'
      rel='noopener noreferrer'
      target='_blank'
    >
      Link tag
    </LinkTag>
  ),
};

export const NestedButton: Story = {
  name: 'Nested button',
  render: (args) => (
    <Tag {...args}>
      <Text>Tag with nested button</Text>
      <TagButton icon='close' />
    </Tag>
  ),
};
