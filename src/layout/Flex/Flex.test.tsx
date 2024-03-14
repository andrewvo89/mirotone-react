import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import Flex from './Flex';

describe('Flex', () => {
  test('should render Flex component', () => {
    const { queryByText } = render(<Flex>Children</Flex>);
    const element = queryByText('Children');
    expect(element).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const { queryByText } = render(<Flex className='custom-class'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { queryByText } = render(<Flex ref={ref}>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toBe(ref.current);
  });

  test('should set alignContent prop', () => {
    const { queryByText } = render(<Flex alignContent='center'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveStyle('--align-content: center');
  });

  test('should set alignItems prop', () => {
    const { queryByText } = render(<Flex alignItems='center'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveStyle('--align-items: center');
  });

  test('should set columnGap prop', () => {
    const { queryByText } = render(<Flex columnGap='10px'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveStyle('--column-gap: 10px');
  });

  test('should set flexDirection prop', () => {
    const { queryByText } = render(<Flex flexDirection='row-reverse'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveStyle('--flex-direction: row-reverse');
  });

  test('should set flexFlow prop', () => {
    const { queryByText } = render(<Flex flexFlow='column wrap'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveStyle('--flex-flow: column wrap');
  });

  test('should set flexWrap prop', () => {
    const { queryByText } = render(<Flex flexWrap='wrap-reverse'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveStyle('--flex-wrap: wrap-reverse');
  });

  test('should set gap prop', () => {
    const { queryByText } = render(<Flex gap='20px'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveStyle('--gap: 20px');
  });

  test('should set justifyContent prop', () => {
    const { queryByText } = render(<Flex justifyContent='space-between'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveStyle('--justify-content: space-between');
  });

  test('should set rowGap prop', () => {
    const { queryByText } = render(<Flex rowGap='15px'>Children</Flex>);
    const element = queryByText('Children');
    expect(element).toHaveStyle('--row-gap: 15px');
  });
});
