import type { Meta, StoryObj } from '@storybook/react';
import { Button, Flex, Icon, Text, tokens } from '../..';

const meta = {
  title: 'Recipes/App nav',
  render: (args) => (
    <Flex
      alignItems='center'
      gap={tokens.space.xsmall}
      style={{
        border: `1px solid ${tokens.color.indigo[300]}`,
        borderBottom: 'none',
        borderRadius: `${tokens.borderRadius.large} ${tokens.borderRadius.large} 0 0`,
        padding: tokens.space.small,
        width: 340,
      }}
    >
      {args.children}
    </Flex>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const BackButton: Story = {
  name: 'Back button',
  args: {
    children: (
      <>
        <Button variant='tertiary'>
          <Icon name='arrow-left' style={{ filter: 'unset', pointerEvents: 'none' }} />
        </Button>
        <Text>Choose Cards</Text>
      </>
    ),
  },
};
