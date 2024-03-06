import type { Meta, StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';

import { FormGroup, TextArea, InputDecoration, InputGroup, InputLabel, tokens } from '../..';

function Logo() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <circle r='12' cx='12' cy='12' fill={tokens.color.indigo[700]}></circle>
    </svg>
  );
}

const meta = {
  title: 'Components/Text area',
  component: TextArea,
  args: {
    placeholder: 'Placeholder text',
    size: 'medium',
    value: '',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='textarea-example'>Textarea</InputLabel>
      <TextArea id='textarea-example' {...args} />
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
        <InputLabel htmlFor='textarea-controlled'>TextArea</InputLabel>
        <TextArea
          {...args}
          key={args.value}
          id='textarea-controlled'
          onChange={onChangeHandler}
          value={args.value}
          defaultValue={args.value}
        />
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
      <InputLabel htmlFor='small-textarea-example'>Small textarea</InputLabel>
      <TextArea {...args} id='small-textarea-example' size='small' />
    </FormGroup>
  ),
};

export const Decoration: Story = {
  args: {
    placeholder: undefined,
  },
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='do-you-use-vcs'>I have a decoration</InputLabel>
      <InputGroup>
        <InputDecoration borderRight>In the form of a text:</InputDecoration>
        <TextArea {...args} id='do-you-use-vcs' rows={5} />
        <InputDecoration>
          <Logo />
        </InputDecoration>
      </InputGroup>
    </FormGroup>
  ),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultValue: 'Content',
  },
  render: (args) => (
    <FormGroup isDisabled>
      <InputLabel htmlFor='textarea-disabled'>I'm disabled</InputLabel>
      <TextArea id='textarea-disabled' {...args} />
    </FormGroup>
  ),
};

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
    defaultValue: 'Content',
  },
  render: (args) => (
    <FormGroup>
      <InputLabel htmlFor='textarea-readonly'>I'm read-only</InputLabel>
      <TextArea id='textarea-readonly' {...args} />
    </FormGroup>
  ),
};
