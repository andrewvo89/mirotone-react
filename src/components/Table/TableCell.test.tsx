import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { TableCell } from '../../';

describe('TableCell', () => {
  test('should render table cell', () => {
    const { container } = render(<TableCell />);
    const tableBody = container.querySelector('td');
    expect(tableBody).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<TableCell className='custom-class' />);
    const tableBody = container.querySelector('td');
    expect(tableBody).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLTableCellElement>();
    const { container } = render(<TableCell ref={ref} />);
    const tableBody = container.querySelector('td');
    expect(tableBody).toBe(ref.current);
  });
});
