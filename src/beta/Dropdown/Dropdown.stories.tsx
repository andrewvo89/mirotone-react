import type { Meta, StoryObj } from '@storybook/react';

import { Button, Checkbox, Dropdown, DropdownDivider, DropdownItem, Flex, Icon, Text, tokens } from '../..';
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
    trigger: <></>,
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
      <Dropdown
        {...args}
        trigger={<DropdownButton>Choose members{`${selected.size > 0 ? ` (${selected.size})` : ''}`}</DropdownButton>}
        onOpenChange={onOpenChangeHandler}
      >
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
    );
  },
};

export const IconMenuItems: Story = {
  name: 'Icon items',
  args: {
    trigger: <DropdownButton variant='secondary'>Filter</DropdownButton>,
    style: { minWidth: 200 },
    children: (
      <>
        <DropdownItem>
          <Flex gap={tokens.space.small} alignItems='center'>
            <Icon name='sticky' />
            <Text>Stickies</Text>
          </Flex>
        </DropdownItem>
        <DropdownItem>
          <Flex gap={tokens.space.small} alignItems='center'>
            <Icon name='shapes' />
            <Text>Shapes</Text>
          </Flex>
        </DropdownItem>
        <DropdownItem>
          <Flex gap={tokens.space.small} alignItems='center'>
            <Icon name='frames' />
            <Text>Frames</Text>
          </Flex>
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
      <Flex gap={tokens.space.small} alignItems='center'>
        <Button onClick={() => onOpenChangeHandler(!open)}>Toggle dropdown manually</Button>
        <Dropdown {...rest} onOpenChange={onOpenChangeHandler} open={open}>
          {args.children}
        </Dropdown>
      </Flex>
    );
  },
};
