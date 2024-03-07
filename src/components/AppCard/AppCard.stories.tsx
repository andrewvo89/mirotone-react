import type { Meta, StoryObj } from '@storybook/react';

import { AppCard, AppCardBody, AppCardDescription, AppCardTags, AppCardTitle, Tag } from '../..';
import { Logo } from '../../storybook/Logo';

const meta = {
  title: 'Components/App card',
  component: AppCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    accentColor: {
      defaultValue: {
        summary: 'var(--blue600)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Composition: Story = {
  render: (args) => (
    <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
      <AppCardBody>
        <AppCardTags>
          <Tag>Tag</Tag>
          <Tag backgroundColor='var(--yellow700)'>Another tag</Tag>
          <Tag textColor='var(--green700)'>Just one more</Tag>
          <Tag>JIRA-1234</Tag>
          <Tag icon='link'>A tag with icon</Tag>
        </AppCardTags>
        <Logo />
      </AppCardBody>
    </AppCard>
  ),
};

export const AccentColor: Story = {
  name: 'Accent color',
  args: {
    accentColor: 'var(--indigo600)',
  },
};

export const Title: Story = {
  render: (args) => (
    <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
    </AppCard>
  ),
};

export const Description: Story = {
  render: (args) => (
    <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
    </AppCard>
  ),
};

export const AppLogo: Story = {
  render: (args) => (
    <AppCard {...args}>
      <AppCardBody>
        <AppCardTags />
        <Logo />
      </AppCardBody>
    </AppCard>
  ),
};
