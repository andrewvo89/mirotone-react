import type { Meta, StoryObj } from '@storybook/react';

import {
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuDivider,
  DropdownMenuItem,
  DropdownMenuItemProps,
  Icon,
  Text,
  tokens,
} from '../..';

const meta = {
  title: 'Beta/Dropdown menu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuItems: Story = {
  name: 'Menu items',
  args: {
    trigger: (
      <Button variant='tertiary'>
        <Text>Settings</Text>
        <Icon name='arrow-down' />
      </Button>
    ),
    children: (
      <>
        <DropdownMenuItem>Team profile</DropdownMenuItem>
        <DropdownMenuItem>Team members</DropdownMenuItem>
        <DropdownMenuItem>Apps & Integrations</DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem style={{ color: tokens.color.red[700] }}>Leave team</DropdownMenuItem>
      </>
    ),
  },
};

export const CheckboxMenuItems: Story = {
  name: 'Checkbox menu items',
  args: {
    trigger: (
      <Button>
        <Text>Choose members</Text>
        <Icon name='arrow-down' />
      </Button>
    ),
    style: { minWidth: 200 },
    children: (
      <>
        <DropdownMenuItem disableCloseOnSelect>
          <Checkbox label='Jack Hudson' />
        </DropdownMenuItem>
        <DropdownMenuItem disableCloseOnSelect>
          <Checkbox label='Katy Cormick' />
        </DropdownMenuItem>
        <DropdownMenuItem disableCloseOnSelect>
          <Checkbox label='Lena Steady' />
        </DropdownMenuItem>
      </>
    ),
  },
};

const dropdownMenuItemStyle: DropdownMenuItemProps['style'] = {
  display: 'flex',
  gap: tokens.space.small,
  alignItems: 'center',
};

export const IconMenuItems: Story = {
  name: 'Icon menu items',
  args: {
    trigger: (
      <Button variant='secondary'>
        <Text>Filter</Text>
        <Icon name='arrow-down' />
      </Button>
    ),
    style: { minWidth: 200 },
    children: (
      <>
        <DropdownMenuItem style={dropdownMenuItemStyle}>
          <Icon name='sticky' />
          <Text>Stickies</Text>
        </DropdownMenuItem>
        <DropdownMenuItem style={dropdownMenuItemStyle}>
          <Icon name='shapes' />
          <Text>Shapes</Text>
        </DropdownMenuItem>
        <DropdownMenuItem style={dropdownMenuItemStyle}>
          <Icon name='frames' />
          <Text>Frames</Text>
        </DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem style={{ color: tokens.color.blue[700] }}>Clear filter</DropdownMenuItem>
      </>
    ),
  },
};
