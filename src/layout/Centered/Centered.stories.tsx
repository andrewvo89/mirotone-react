import type { Meta, StoryObj } from '@storybook/react';
import { Centered } from '../..';
import { PropsWithChildren } from 'react';

const Container = (props: PropsWithChildren) => (
  <div
    style={{
      height: '500px',
      padding: 'var(--space-small)',
      width: '338px',
      display: 'block',
      border: '2px solid var(--indigo300)',
      borderRadius: 'var(--border-radius-medium)',
      margin: 'var(--space-small) auto',
      background: 'var(--white)',
    }}
  >
    {props.children}
  </div>
);

const Skeleton = () => (
  <div
    style={{
      width: '240px',
      height: '110px',
      backgroundColor: 'var(--indigo200)',
      display: 'flex',
      borderRadius: 'var(--border-radius-medium)',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  />
);

const meta: Meta<typeof Centered> = {
  title: 'Layout/Centered',
  component: Centered,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container>
      <Centered>
        <h1 className='h1'>Header 1</h1>
        <Skeleton />
        <p className='p-medium'>test</p>
      </Centered>
    </Container>
  ),
};
