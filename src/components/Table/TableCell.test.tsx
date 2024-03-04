import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { TableCell } from '../../';

describe('TableCell', () => {
  afterEach(cleanup);

  test('should render table cell', () => {
    const { container } = render(<TableCell />, { container: document.createElement('tr') });
    const tableBody = container.querySelector('td');
    expect(tableBody).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<TableCell className='custom-class' />, {
      container: document.createElement('tr'),
    });
    const tableBody = container.querySelector('td');
    expect(tableBody).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLTableCellElement>();
    const { container } = render(<TableCell ref={ref} />, { container: document.createElement('tr') });
    const tableBody = container.querySelector('td');
    expect(tableBody).toBe(ref.current);
  });
});
