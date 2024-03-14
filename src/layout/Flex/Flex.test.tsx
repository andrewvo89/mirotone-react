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
    const { container } = render(<Flex alignContent='center'>Children</Flex>);
    expect(container.firstChild).toHaveStyle('--align-content: center');
  });

  test('should set alignItems prop', () => {
    const { container } = render(<Flex alignItems='center'>Children</Flex>);
    expect(container.firstChild).toHaveStyle('--align-items: center');
  });

  test('should set flexDirection prop', () => {
    const { container } = render(<Flex flexDirection='row-reverse'>Children</Flex>);
    expect(container.firstChild).toHaveStyle('--flex-direction: row-reverse');
  });

  test('should set flexWrap prop', () => {
    const { container } = render(<Flex flexWrap='wrap-reverse'>Children</Flex>);
    expect(container.firstChild).toHaveStyle('--flex-wrap: wrap-reverse');
  });

  test('should set gap prop', () => {
    const { container } = render(<Flex gap='20px'>Children</Flex>);
    expect(container.firstChild).toHaveStyle('--gap: 20px');
  });

  test('should set justifyContent prop', () => {
    const { container } = render(<Flex justifyContent='space-between'>Children</Flex>);
    expect(container.firstChild).toHaveStyle('--justify-content: space-between');
  });
});
