import type { Meta, StoryObj } from '@storybook/react';

import { Fragment } from 'react/jsx-runtime';

import {
  Checkbox,
  Label,
  RadioButton,
  Select,
  SelectOption,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tag,
} from '../..';
import { PropsWithChildren } from 'react';

const Container = (props: PropsWithChildren) => <div style={{ height: 200, overflow: 'auto' }}>{props.children}</div>;

const meta = {
  title: 'Components/Table',
  component: Table,
  render: (args) => (
    <Container>
      <Table {...args} />
    </Container>
  ),
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Item</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell>Date</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox label='Checkbox' />
            </TableCell>
            <TableCell>Done ✅</TableCell>
            <TableCell>May 12, 2022</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Create React components for Mirotone</TableCell>
            <TableCell>To do</TableCell>
            <TableCell>
              <Tag icon='close'>June 2, 2021</Tag>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Create Vue components for Mirotone</TableCell>
            <TableCell>
              <RadioButton label='Radio button' />
            </TableCell>
            <TableCell>
              <Label variant='info'>July 30, 2022</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Create Angular components for <Label variant='info'>Mirotone</Label>
            </TableCell>
            <TableCell>To do</TableCell>
            <TableCell>
              <Checkbox label='Checkbox' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Create web-components for Mirotone</TableCell>
            <TableCell>
              <Select size='small'>
                <SelectOption value='1'>Option one</SelectOption>
                <SelectOption value='2'>Option two</SelectOption>
                <SelectOption value='3'>Option three</SelectOption>
                <SelectOption value='4'>Option four</SelectOption>
              </Select>
            </TableCell>
            <TableCell>October 28, 2021</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NonStickyHeader: Story = {
  args: {
    headIsSticky: false,
  },
};
