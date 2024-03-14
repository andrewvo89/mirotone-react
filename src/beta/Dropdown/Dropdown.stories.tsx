import type { Meta, StoryObj } from '@storybook/react';

import {
  Button,
  Checkbox,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownItemProps,
  Icon,
  Paragraph,
  Text,
  tokens,
} from '../..';
import { useState } from 'react';
import DropdownButton from './DropdownButton';
import { useArgs } from '@storybook/preview-api';

const meta = {
  title: 'Beta/Dropdown',
  component: Dropdown,
  argTypes: {
    size: {
      defaultValue: {
        summary: 'medium',
      },
    },
  },
  args: {
    children: (
      <>
        <DropdownItem onSelect={() => {}}>Team profile</DropdownItem>
        <DropdownItem onSelect={() => {}}>Team members</DropdownItem>
        <DropdownItem onSelect={() => {}}>Apps & Integrations</DropdownItem>
        <DropdownDivider />
        <DropdownItem onSelect={() => {}} style={{ color: tokens.color.red[700] }}>
          Leave team
        </DropdownItem>
      </>
    ),
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuItems: Story = {
  name: 'Dropdown items',
  args: {
    trigger: <DropdownButton variant='tertiary'>Settings</DropdownButton>,
  },
};

export const CheckboxMenuItems: Story = {
  name: 'Checkbox items',
  args: {
    trigger: <DropdownButton>Choose members</DropdownButton>,
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
        <Dropdown {...args} onOpenChange={onOpenChangeHandler}>
          <DropdownItem disableCloseOnSelect>
            <Checkbox
              label='Jack Hudson'
              checked={selected.has('Jack Hudson')}
              onChange={(value) => handleSelect('Jack Hudson', value)}
            />
          </DropdownItem>
          <DropdownItem disableCloseOnSelect>
            <Checkbox
              label='Katy Cormick'
              checked={selected.has('Katy Cormick')}
              onChange={(value) => handleSelect('Katy Cormick', value)}
            />
          </DropdownItem>
          <DropdownItem disableCloseOnSelect>
            <Checkbox
              label='Lena Steady'
              checked={selected.has('Lena Steady')}
              onChange={(value) => handleSelect('Lena Steady', value)}
            />
          </DropdownItem>
        </Dropdown>
        <div>
          {Array.from(selected).map((name) => (
            <Paragraph key={name}>{name}</Paragraph>
          ))}
        </div>
      </div>
    );
  },
};

const dropdownMenuItemStyle: DropdownItemProps['style'] = {
  display: 'flex',
  gap: tokens.space.small,
  alignItems: 'center',
};

export const IconMenuItems: Story = {
  name: 'Icon items',
  args: {
    trigger: <DropdownButton variant='secondary'>Filter</DropdownButton>,
    style: { minWidth: 200 },
    children: (
      <>
        <DropdownItem style={dropdownMenuItemStyle}>
          <Icon name='sticky' />
          <Text>Stickies</Text>
        </DropdownItem>
        <DropdownItem style={dropdownMenuItemStyle}>
          <Icon name='shapes' />
          <Text>Shapes</Text>
        </DropdownItem>
        <DropdownItem style={dropdownMenuItemStyle}>
          <Icon name='frames' />
          <Text>Frames</Text>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem style={{ color: tokens.color.blue[700] }}>Clear filter</DropdownItem>
      </>
    ),
  },
};

export const PreferredSide: Story = {
  name: 'Preferred side',
  args: {
    trigger: <></>,
    side: 'top',
  },
  render: (args) => (
    <Dropdown {...args} trigger={<DropdownButton>Preferred side: {args.side}</DropdownButton>}>
      {args.children}
    </Dropdown>
  ),
};

export const Controlled: Story = {
  args: {
    open: false,
    trigger: <Text>Dropdown trigger is over here</Text>,
  },
  render: function App(args) {
    const { open, onOpenChange, ...rest } = args;
    const [, setArgs] = useArgs();

    const onOpenChangeHandler = (open: boolean) => {
      onOpenChange?.(open);
      setArgs({ open });
    };

    return (
      <div style={{ display: 'flex', gap: tokens.space.small }}>
        <Button onClick={() => onOpenChangeHandler(!open)}>Toggle dropdown manually</Button>
        <Dropdown {...rest} onOpenChange={onOpenChangeHandler} open={open}>
          {args.children}
        </Dropdown>
      </div>
    );
  },
};
