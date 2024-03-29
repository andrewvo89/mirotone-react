import type { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem } from '../..';
import Text from '../../storybook/GridItemText';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <Grid>
      <GridItem colStart={1} colEnd={2}>
        <Text>cs1 ce2</Text>
      </GridItem>
      <GridItem colStart={3} colEnd={7}>
        <Text>cs3 ce7</Text>
      </GridItem>
      <GridItem colStart={8} colEnd={10}>
        <Text>cs8 ce10</Text>
      </GridItem>
      <GridItem colStart={11} colEnd={12}>
        <Text>cs11 ce12</Text>
      </GridItem>
      <GridItem colStart={1} colEnd={8}>
        <Text>cs1 ce8</Text>
      </GridItem>
      <GridItem colStart={9} colEnd={12}>
        <Text>cs9 ce12</Text>
      </GridItem>
      <GridItem colStart={1} colEnd={5}>
        <Text>cs1 ce5</Text>
      </GridItem>
      <GridItem colStart={6} colEnd={12}>
        <Text>cs6 ce12</Text>
      </GridItem>
      <GridItem colStart={1} colEnd={3}>
        <Text>cs1 ce3</Text>
      </GridItem>
      <GridItem colStart={4} colEnd={6}>
        <Text>cs4 ce6</Text>
      </GridItem>
      <GridItem colStart={7} colEnd={9}>
        <Text>cs7 ce9</Text>
      </GridItem>
      <GridItem colStart={10} colEnd={12}>
        <Text>cs10 ce12</Text>
      </GridItem>
    </Grid>
  ),
};
