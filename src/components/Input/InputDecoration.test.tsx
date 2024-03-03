import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import InputDecoration from './InputDecoration';

describe('InputDecoration', () => {
  afterEach(cleanup);

  test('should render the component', () => {
    render(<InputDecoration />);
    const { container } = render(<InputDecoration />);
    const inputDecoration = container.querySelector('.input-decoration');
    expect(inputDecoration).not.toBeNull();
  });

  test('should apply borderLeft class when borderLeft prop is true', () => {
    render(<InputDecoration borderLeft />);
    const { container } = render(<InputDecoration borderLeft />);
    const inputDecoration = container.querySelector('.input-decoration');
    expect(inputDecoration).toHaveClass('border-left');
  });

  test('should apply borderRight class when borderRight prop is true', () => {
    render(<InputDecoration borderRight />);
    const { container } = render(<InputDecoration borderRight />);
    const inputDecoration = container.querySelector('.input-decoration');
    expect(inputDecoration).toHaveClass('border-right');
  });

  test('should apply the specified flex modifier class', () => {
    render(<InputDecoration flexModifier='2/4' />);
    const { container } = render(<InputDecoration flexModifier='2/4' />);
    const inputDecoration = container.querySelector('.input-decoration');
    expect(inputDecoration).toHaveClass('two-fourth');
  });

  test('should apply custom class name', () => {
    render(<InputDecoration className='custom-class' />);
    const { container } = render(<InputDecoration className='custom-class' />);
    const inputDecoration = container.querySelector('.input-decoration');
    expect(inputDecoration).toHaveClass('custom-class');
  });

  test('should pass the ref to the underlying span element', () => {
    const ref = createRef<HTMLSpanElement>();
    render(<InputDecoration ref={ref} />);
    const { container } = render(<InputDecoration ref={ref} />);
    const inputDecoration = container.querySelector('.input-decoration');
    expect(inputDecoration).toBe(ref.current);
  });
});
