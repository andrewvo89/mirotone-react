import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../..';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: {
      defaultValue: {
        summary: 'medium',
      },
    },
  },
  args: {
    name: 'shapes',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const XSmall: Story = {
  args: {
    size: 'xsmall',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
  },
};

export const XXLarge: Story = {
  args: {
    size: 'xxlarge',
  },
};

export const Colored: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Icons are SVGs under the hood. To change the color of an icon, apply a CSS `filter` property. A CSS filter converter can be used to convert hex/rgb colors to filter values. In this example https://cssfilterconverter.com/ is used to convert Mirotone's `blue700` (#4262ff) to a filter of: `brightness(0) saturate(100%) invert(32%) sepia(41%) saturate(3910%) hue-rotate(223deg) brightness(99%) contrast(102%)`.",
      },
    },
  },
  render: (args) => (
    <Icon
      {...args}
      style={{
        filter:
          'brightness(0) saturate(100%) invert(32%) sepia(41%) saturate(3910%) hue-rotate(223deg) brightness(99%) contrast(102%)',
      }}
    />
  ),
};
