import type { Meta, StoryObj } from '@storybook/react';
import { Centered, Heading, Paragraph } from '../..';
import Container from '../../storybook/CenteredContainer';
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
    <Container>
      <Centered {...args} />
    </Container>
  ),
};
