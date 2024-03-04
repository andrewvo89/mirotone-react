import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { Table } from '../..';

describe('Table component', () => {
  afterEach(cleanup);

  test('should render table', () => {
    const { container } = render(<Table />);
    const tableElement = container.querySelector('table');
    expect(tableElement).not.toBeNull();
  });

  test('should render table with custom class name', () => {
    const { container } = render(<Table className='custom-table' />);
    const tableElement = container.querySelector('table');
    expect(tableElement).toHaveClass('custom-table');
  });

  test('should render table without sticky header when headIsSticky is false', () => {
    const { container } = render(<Table headIsSticky={false} />);
    const tableElement = container.querySelector('table');
    expect(tableElement).toHaveClass('table__no-sticky-headers');
  });

  test('should pass ref to the table element', () => {
    const ref = createRef<HTMLTableElement>();
    const { container } = render(<Table ref={ref} />);
    const tableElement = container.querySelector('table');
    expect(tableElement).toBe(ref.current);
  });
});
