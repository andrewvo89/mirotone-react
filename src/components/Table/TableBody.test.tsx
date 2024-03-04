import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { TableBody } from '../../';

describe('TableBody', () => {
  afterEach(cleanup);

  test('should render table body', () => {
    const { container } = render(<TableBody />, { container: document.createElement('table') });
    const tableBody = container.querySelector('tbody');
    expect(tableBody).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<TableBody className='custom-class' />, {
      container: document.createElement('table'),
    });
    const tableBody = container.querySelector('tbody');
    expect(tableBody).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLTableSectionElement>();
    const { container } = render(<TableBody ref={ref} />, { container: document.createElement('table') });
    const tableBody = container.querySelector('tbody');
    expect(tableBody).toBe(ref.current);
  });
});
