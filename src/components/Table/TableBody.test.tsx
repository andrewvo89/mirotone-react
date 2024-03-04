import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { TableBody } from '../../';

describe('TableBody', () => {
  test('should render table body', () => {
    const { container } = render(<TableBody />);
    const tableBody = container.querySelector('tbody');
    expect(tableBody).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<TableBody className='custom-class' />);
    const tableBody = container.querySelector('tbody');
    expect(tableBody).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLTableSectionElement>();
    const { container } = render(<TableBody ref={ref} />);
    const tableBody = container.querySelector('tbody');
    expect(tableBody).toBe(ref.current);
  });
});
