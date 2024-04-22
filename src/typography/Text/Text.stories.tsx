import type { Meta, StoryObj } from '@storybook/react';

import { Text, tokens } from '../..';

const meta = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    size: {
      defaultValue: {
        summary: 'medium',
      },
    },
    fontWeight: {
      defaultValue: {
        summary: tokens.typography.fontWeight.normal,
      },
    },
    fontColor: {
      defaultValue: {
        summary: 'inherit',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Text small',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Text medium',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Text large',
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    children: 'Text xlarge',
    size: 'xlarge',
  },
};

export const XXLarge: Story = {
  args: {
    children: 'Text xxlarge',
    size: 'xxlarge',
  },
};

export const XXXLarge: Story = {
  args: {
    children: 'Text xxxlarge',
    size: 'xxxlarge',
  },
};

export const NormalWeight: Story = {
  name: 'Normal weight',
  args: {
    children: 'Normal weight',
    fontWeight: 'var(--font-weight-normal)',
  },
};

export const MediumWeight: Story = {
  name: 'Medium weight',
  args: {
    children: 'Light weight',
    fontWeight: 'var(--font-weight-medium)',
  },
};

export const BoldWeight: Story = {
  name: 'Bold weight',
  args: {
    children: 'Bold weight',
    fontWeight: 'var(--font-weight-bold)',
  },
};

export const BlackWeight: Story = {
  name: 'Black weight',
  args: {
    children: 'Black weight',
    fontWeight: 'var(--font-weight-black)',
  },
};

export const Colored: Story = {
  args: {
    children: 'Colored text',
    fontColor: 'var(--red900)',
  },
};
