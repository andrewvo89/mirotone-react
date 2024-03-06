import type { Meta, StoryObj } from '@storybook/react';

import { AppCard, AppCardBody, AppCardDescription, AppCardTags, AppCardTitle, Tag, tokens } from '../..';

function Logo() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='app-card--app-logo'>
      <circle r='12' cx='12' cy='12' fill={tokens.colors.indigo[700]}></circle>
    </svg>
  );
}

const meta = {
  title: 'Components/App Card',
  component: AppCard,
  parameters: {
    layout: 'centered',
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
