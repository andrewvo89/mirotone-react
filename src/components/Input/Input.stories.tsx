import type { Meta, StoryObj } from '@storybook/react';

import {
  FormGroup,
  Grid,
  GridItem,
  Input,
  InputDecoration,
  InputGroup,
  InputLabel,
  InputStatusText,
  Select,
  SelectOption,
} from '../..';
import { Logo } from '../../storybook/Logo';

import { useArgs } from '@storybook/preview-api';

const meta = {
  title: 'Components/Input',
  component: Input,
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
    isReadOnly: {
      defaultValue: {
        summary: false,
      },
    },
    flexModifier: {
      defaultValue: {
        summary: '4/4',
      },
    },
  },
  args: {
    placeholder: 'Placeholder',
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
  name: 'Helper text',
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='feedback-1'>Input Label</InputLabel>
      <Input id='feedback-1' {...args} />
      <InputStatusText>This is a helper text</InputStatusText>
    </FormGroup>
  ),
};

export const InputFeedback: Story = {
  name: 'Input feedback',
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
  name: 'Read only',
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
  name: 'SVG decoration',
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
      <Select autoComplete='cc-type'>
        <SelectOption value='master-card'>Mastercard</SelectOption>
        <SelectOption value='american-express'>American Express</SelectOption>
      </Select>
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
  name: 'Decoration border',
  render: (args) => (
    <Grid>
      <GridItem colStart={1} colEnd={6}>
        <InputGroup>
          <InputDecoration borderRight>&euro;</InputDecoration>
          <Input {...args} type='number' placeholder='123456' />
        </InputGroup>
      </GridItem>
      <GridItem colStart={7} colEnd={12}>
        <InputGroup>
          <Input type='number' placeholder='123456' />
          <InputDecoration borderLeft>&euro;</InputDecoration>
        </InputGroup>
      </GridItem>
    </Grid>
  ),
};

export const FlexModifiers: Story = {
  name: 'Flex modifiers',
  args: {
    flexModifier: undefined,
  },
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
