import type { Meta, StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';

import { FormGroup, Input, InputDecoration, InputGroup, InputLabel, InputStatusText, tokens } from '../..';

function Logo() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <circle r='12' cx='12' cy='12' fill={tokens.color.indigo[700]}></circle>
    </svg>
  );
}

const meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Placeholder',
    size: 'medium',
    type: 'text',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='example-1'>Input Label</InputLabel>
      <Input id='example-1' {...args} />
    </FormGroup>
  ),
};

export const Controlled: Story = {
  args: {
    value: 'Controlled text',
  },
  render: function Component(args) {
    const [, setArgs] = useArgs();

    const onChangeHandler = (value: string) => {
      args.onChange?.(value);
      setArgs({ value });
    };

    return (
      <FormGroup>
        <InputLabel htmlFor='example-1'>Input Label</InputLabel>
        <Input id='example-1' {...args} value={args.value} onChange={onChangeHandler} />
      </FormGroup>
    );
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => (
    <FormGroup size='small'>
      <InputLabel htmlFor='example-2'>Input Label</InputLabel>
      <Input id='example-2' {...args} />
    </FormGroup>
  ),
};

export const HelperText: Story = {
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='feedback-1'>Input Label</InputLabel>
      <Input id='feedback-1' {...args} />
      <InputStatusText>This is a helper text</InputStatusText>
    </FormGroup>
  ),
};

export const InputFeedback: Story = {
  render: (args) => (
    <FormGroup status='success'>
      <InputLabel htmlFor='feedback-2'>Input Label</InputLabel>
      <Input id='feedback-2' {...args} />
    </FormGroup>
  ),
};

export const Success: Story = {
  render: (args) => (
    <FormGroup status='success'>
      <InputLabel htmlFor='success-1'>Input Label</InputLabel>
      <Input id='success-1' {...args} />
      <InputStatusText>Saved, good job!</InputStatusText>
    </FormGroup>
  ),
};

export const Error: Story = {
  render: (args) => (
    <FormGroup status='error'>
      <InputLabel htmlFor='error-1'>Input Label</InputLabel>
      <Input id='error-1' {...args} />
      <InputStatusText>Oops, something went wrong</InputStatusText>
    </FormGroup>
  ),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    value: 'Value',
  },
  render: (args) => (
    <FormGroup isDisabled>
      <InputLabel htmlFor='disabled-1'>Input Label</InputLabel>
      <Input id='disabled-1' {...args} />
    </FormGroup>
  ),
};

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
    value: 'Value',
  },
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='readonly-1'>Input Label</InputLabel>
      <Input id='readonly-1' {...args} />
    </FormGroup>
  ),
};

export const Decoration: Story = {
  args: {
    type: 'number',
    placeholder: '123456',
  },
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='decoration-1'>What do you want?</InputLabel>
      <InputGroup>
        <InputDecoration>€</InputDecoration>
        <Input id='decoration-1' {...args} />
        <InputDecoration>,-</InputDecoration>
      </InputGroup>
    </FormGroup>
  ),
};

export const SvgDecoration: Story = {
  args: {
    type: 'email',
    placeholder: 'email@address.com',
  },
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='email-1'>Email address:</InputLabel>
      <InputGroup>
        <InputDecoration>
          <Logo />
        </InputDecoration>
        <Input id='email-1' {...args} />
      </InputGroup>
    </FormGroup>
  ),
};

export const Group: Story = {
  render: (args) => (
    <InputGroup>
      <InputDecoration>
        <Logo />
      </InputDecoration>
      <select className='select one-fourth' autoComplete='cc-type'>
        <option value=''>Mastercard</option>
        <option value=''>American Express</option>
      </select>
      <Input {...args} flexModifier='2/4' type='text' placeholder='Card number' autoComplete='cc-number' />
      <Input {...args} type='month' placeholder='Expiration date' autoComplete='cc-exp' />
      <Input {...args} flexModifier='2/4' type='number' placeholder='CVC' autoComplete='cc-csc' />
      <InputDecoration borderLeft>
        <Logo />
      </InputDecoration>
    </InputGroup>
  ),
};

export const DecorationBorder: Story = {
  render: (args) => (
    <div className='grid'>
      <InputGroup className='cs1 ce6'>
        <InputDecoration borderRight>&euro;</InputDecoration>
        <Input {...args} type='number' placeholder='123456' />
      </InputGroup>
      <InputGroup className='cs7 ce12'>
        <Input type='number' placeholder='123456' />
        <InputDecoration borderLeft>&euro;</InputDecoration>
      </InputGroup>
    </div>
  ),
};

export const FlexModifiers: Story = {
  render: (args) => (
    <div className='grid'>
      <InputGroup className='cs1 ce6'>
        <InputDecoration borderRight flexModifier='1/4'>
          .one-fourth
        </InputDecoration>
        <Input {...args} type='number' placeholder='123456' />
      </InputGroup>
      <InputGroup className='cs7 ce12'>
        <Input {...args} type='number' placeholder='123456' />
        <InputDecoration borderLeft flexModifier='2/4'>
          .two-fourth
        </InputDecoration>
      </InputGroup>
    </div>
  ),
};
