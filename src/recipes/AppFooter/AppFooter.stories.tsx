import type { Meta, StoryObj } from '@storybook/react';
import { Button, Flex, Icon, Link, Text, Tooltip, tokens } from '../..';

const meta = {
  title: 'Recipes/App footer',
  render: (args) => (
    <Flex
      {...args}
      alignItems='center'
      justifyContent='space-between'
      gap={tokens.space.xsmall}
      style={{
        border: `1px solid ${tokens.color.indigo[300]}`,
        borderTop: 'none',
        borderRadius: `0 0 ${tokens.borderRadius.large} ${tokens.borderRadius.large}`,
        padding: tokens.space.small,
        width: 340,
      }}
    />
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AppName: Story = {
  name: 'Company name',
  args: {
    children: (
      <>
        <Flex>
          <Text>Developed by Softhouse</Text>
        </Flex>
        <Flex gap={tokens.space.xsmall}>
          <Tooltip
            trigger={
              <Button size='small' variant='tertiary'>
                <Icon name='settings' style={{ filter: 'unset', pointerEvents: 'none' }} />
              </Button>
            }
          >
            Settings
          </Tooltip>
          <Tooltip
            trigger={
              <Button size='small' variant='tertiary'>
                <Icon name='help-question' style={{ filter: 'unset', pointerEvents: 'none' }} />
              </Button>
            }
          >
            Help
          </Tooltip>
          <Tooltip
            trigger={
              <Button size='small' variant='tertiary'>
                <Icon name='logout' style={{ filter: 'unset', pointerEvents: 'none' }} />
              </Button>
            }
          >
            Logout
          </Tooltip>
        </Flex>
      </>
    ),
  },
};

export const Links: Story = {
  args: {
    children: (
      <>
        <Flex gap={tokens.space.xsmall}>
          <Link>Link</Link>
          <Link>Another link</Link>
        </Flex>
        <Flex gap={tokens.space.xsmall}>
          <Tooltip
            trigger={
              <Button size='small' variant='tertiary'>
                <Icon name='settings' style={{ filter: 'unset', pointerEvents: 'none' }} />
              </Button>
            }
          >
            Settings
          </Tooltip>
          <Tooltip
            trigger={
              <Button size='small' variant='tertiary'>
                <Icon name='help-question' style={{ filter: 'unset', pointerEvents: 'none' }} />
              </Button>
            }
          >
            Help
          </Tooltip>
          <Tooltip
            trigger={
              <Button size='small' variant='tertiary'>
                <Icon name='logout' style={{ filter: 'unset', pointerEvents: 'none' }} />
              </Button>
            }
          >
            Logout
          </Tooltip>
        </Flex>
      </>
    ),
  },
};
