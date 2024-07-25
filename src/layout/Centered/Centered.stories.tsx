import type { Meta, StoryObj } from '@storybook/react';
import { Centered, Heading, Paragraph } from '../..';
import Skeleton from '../../storybook/Skeleton';

const meta: Meta<typeof Centered> = {
  title: 'Layout/Centered',
  component: Centered,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Heading>Header 1</Heading>
        <Skeleton />
        <Paragraph>test</Paragraph>
      </>
    ),
  },
  render: (args) => (
    <div
      style={{
        height: '500px',
        padding: 'var(--space-small)',
        width: '338px',
        display: 'block',
        border: '2px solid var(--indigo300)',
        borderRadius: 'var(--border-radius-medium)',
        margin: 'var(--space-small) auto',
        background: 'var(--white)',
      }}
    >
      <Centered {...args} />
    </div>
  ),
};
