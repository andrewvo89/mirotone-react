import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { SelectLabel } from '../..';

describe('SelectLabel', () => {
  afterEach(cleanup);

  test('should render correctly', () => {
    const { container } = render(<SelectLabel />);
    const inputLabel = container.querySelector('label');
    expect(inputLabel).toBeInTheDocument();
  });

  test('should render children correctly', () => {
    const { container } = render(<SelectLabel>Test Label</SelectLabel>);
    const inputLabel = container.querySelector('label');
    expect(inputLabel).toHaveTextContent('Test Label');
  });

  test('should render with custom class name', () => {
    const { container } = render(<SelectLabel className='custom-input-label' />);
    const inputLabel = container.querySelector('label');
    expect(inputLabel).toHaveClass('custom-input-label');
  });

  test('should pass ref to the input element', () => {
    const ref = createRef<HTMLLabelElement>();
    const { container } = render(<SelectLabel ref={ref} />);
    const inputLabel = container.querySelector('label');
    expect(inputLabel).toBe(ref.current);
  });
});
