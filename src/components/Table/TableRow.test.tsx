import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { TableRow } from '../..';

describe('TableRow', () => {
  afterEach(cleanup);

  test('should render table row', () => {
    const { container } = render(<TableRow />);
    const tableBody = container.querySelector('tr');
    expect(tableBody).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<TableRow className='custom-class' />);
    const tableBody = container.querySelector('tr');
    expect(tableBody).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLTableRowElement>();
    const { container } = render(<TableRow ref={ref} />);
    const tableBody = container.querySelector('tr');
    expect(tableBody).toBe(ref.current);
  });
});
