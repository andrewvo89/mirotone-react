import type { Meta, StoryObj } from '@storybook/react';

import { FormGroup, InputDecoration, InputGroup, Select, InputLabel, SelectOption } from '../..';

import { useArgs } from '@storybook/preview-api';

const meta = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    size: {
      defaultValue: {
        summary: 'medium',
      },
    },
    isDisabled: {
      defaultValue: {
        summary: false,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='select-default'>What do you want?</InputLabel>
      <Select {...args} id='select-default'>
        <SelectOption value='1'>Option one</SelectOption>
        <SelectOption value='2'>Option two</SelectOption>
        <SelectOption value='3'>Option three</SelectOption>
        <SelectOption value='4'>Option four</SelectOption>
      </Select>
    </FormGroup>
  ),
};

export const Controlled: Story = {
  args: {
    value: '1',
  },
  argTypes: {
    value: {
      control: 'inline-radio',
      options: ['1', '2', '3', '4'],
    },
  },
  render: function Component(args) {
    const [, setArgs] = useArgs();

    const onChangeHandler = (value: string) => {
      args.onChange?.(value);
      setArgs({ value });
    };

    return (
      <FormGroup>
        <InputLabel htmlFor='select-controlled'>What do you want?</InputLabel>
        <Select {...args} id='select-controlled' value={args.value} onChange={onChangeHandler}>
          <SelectOption value='1'>Option one</SelectOption>
          <SelectOption value='2'>Option two</SelectOption>
          <SelectOption value='3'>Option three</SelectOption>
          <SelectOption value='4'>Option four</SelectOption>
        </Select>
      </FormGroup>
    );
  },
};

export const Small: Story = {
  render: (args) => (
    <FormGroup size='small'>
      <InputLabel htmlFor='select-small'>What do you want?</InputLabel>
      <Select {...args} id='select-small' size='small'>
        <SelectOption value='1'>Option one</SelectOption>
        <SelectOption value='2'>Option two</SelectOption>
        <SelectOption value='3'>Option three</SelectOption>
        <SelectOption value='4'>Option four</SelectOption>
      </Select>
    </FormGroup>
  ),
};

export const Decoration: Story = {
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='select-decoration'>Do you use a VCS?</InputLabel>
      <InputGroup>
        <InputDecoration>Yes:</InputDecoration>
        <Select {...args} id='select-decoration'>
          <SelectOption value='github'>GitHub</SelectOption>
          <SelectOption value='gitlab'>GitLab</SelectOption>
          <SelectOption value='bitbucket'>BitBucket</SelectOption>
        </Select>
      </InputGroup>
    </FormGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='select-disabled'>What do you want?</InputLabel>
      <Select {...args} id='select-disabled' isDisabled>
        <SelectOption value='1'>Option one</SelectOption>
        <SelectOption value='2'>Option two</SelectOption>
        <SelectOption value='3'>Option three</SelectOption>
        <SelectOption value='4'>Option four</SelectOption>
      </Select>
    </FormGroup>
  ),
};
