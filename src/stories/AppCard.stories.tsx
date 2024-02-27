import type { Meta, StoryObj } from '@storybook/react';

import { AppCard as BaseAppCard, AppCardBody, AppCardDescription, AppCardTags, AppCardTitle, tokens } from '../';

const meta = {
  title: 'Components/AppCard',
  component: BaseAppCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    accentColor: 'var(--blue700)',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaseAppCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AppCard: Story = {
  render: (args) => (
    <BaseAppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
      <AppCardBody>
        <AppCardTags>
          <span className='tag'>Tag</span>
          <span className='tag' style={{ '--background': 'var(--yellow700)' }}>
            Another tag
          </span>
          <span className='tag' style={{ '--color': 'var(--green700)' }}>
            Just one more
          </span>
          <span className='tag'>JIRA-1234</span>
          <span className='tag icon icon-link'>A tag with icon</span>
        </AppCardTags>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='app-card--app-logo'>
          <circle r='12' cx='12' cy='12' fill={tokens.colors.indigo[700]}></circle>
        </svg>
      </AppCardBody>
    </BaseAppCard>
  ),
};

export const AccentColor: Story = {
  args: {
    accentColor: tokens.colors.indigo[600],
  },
};

export const Title: Story = {
  render: (args) => (
    <BaseAppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
    </BaseAppCard>
  ),
};

export const Description: Story = {
  render: (args) => (
    <BaseAppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
    </BaseAppCard>
  ),
};

export const AppLogo: Story = {
  render: (args) => (
    <BaseAppCard {...args}>
      <AppCardBody>
        <AppCardTags />
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='app-card--app-logo'>
          <circle r='12' cx='12' cy='12' fill={tokens.colors.indigo[700]}></circle>
        </svg>
      </AppCardBody>
    </BaseAppCard>
  ),
};
