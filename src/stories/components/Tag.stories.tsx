import type { Meta, StoryObj } from '@storybook/react';

import { LinkTag, Tag, TagButton } from '../..';

const meta = {
  title: 'Components/Tag',
  component: Tag,
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
  render: (args) => (
    <Tag {...args}>
      Tag with nested button
      <TagButton icon='close' />
    </Tag>
  ),
};
