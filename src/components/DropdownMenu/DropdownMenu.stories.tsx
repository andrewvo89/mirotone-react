import type { Meta, StoryObj } from '@storybook/react';

import {
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuDivider,
  DropdownMenuItem,
  DropdownMenuItemProps,
  Icon,
  Paragraph,
  Text,
  tokens,
} from '../..';
import { useState } from 'react';

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
        <DropdownMenuItem onSelect={() => {}}>Team profile</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Team members</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Apps & Integrations</DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem onSelect={() => {}} style={{ color: tokens.color.red[700] }}>
          Leave team
        </DropdownMenuItem>
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
  },
  render: function App(args) {
    const [selected, setSelected] = useState<Set<string>>(new Set());

    const handleSelect = (name: string, selected: boolean) =>
      setSelected((prevSelected) => {
        const newSelected = new Set(prevSelected);
        if (selected) {
          newSelected.add(name);
        } else {
          newSelected.delete(name);
        }
        return newSelected;
      });

    const onOpenChangeHandler = () => setSelected(new Set());

    return (
      <div style={{ display: 'flex', gap: tokens.space.small }}>
        <DropdownMenu {...args} onOpenChange={onOpenChangeHandler}>
          <DropdownMenuItem disableCloseOnSelect>
            <Checkbox
              label='Jack Hudson'
              checked={selected.has('Jack Hudson')}
              onChange={(value) => handleSelect('Jack Hudson', value)}
            />
          </DropdownMenuItem>
          <DropdownMenuItem disableCloseOnSelect>
            <Checkbox
              label='Katy Cormick'
              checked={selected.has('Katy Cormick')}
              onChange={(value) => handleSelect('Katy Cormick', value)}
            />
          </DropdownMenuItem>
          <DropdownMenuItem disableCloseOnSelect>
            <Checkbox
              label='Lena Steady'
              checked={selected.has('Lena Steady')}
              onChange={(value) => handleSelect('Lena Steady', value)}
            />
          </DropdownMenuItem>
        </DropdownMenu>
        <div>
          {Array.from(selected).map((name) => (
            <Paragraph key={name}>{name}</Paragraph>
          ))}
        </div>
      </div>
    );
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

export const PreferredSide: Story = {
  name: 'Preferred side',
  args: {
    trigger: <></>,
    side: 'top',
    children: (
      <>
        <DropdownMenuItem onSelect={() => {}}>Team profile</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Team members</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Apps & Integrations</DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem onSelect={() => {}} style={{ color: tokens.color.red[700] }}>
          Leave team
        </DropdownMenuItem>
      </>
    ),
  },
  render: (args) => (
    <DropdownMenu
      {...args}
      trigger={
        <Button>
          <Text>Preferred side: {args.side}</Text>
          <Icon name='arrow-down' />
        </Button>
      }
    >
      {args.children}
    </DropdownMenu>
  ),
};
