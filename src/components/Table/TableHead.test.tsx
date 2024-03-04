import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { TableHead } from '../../';

describe('TableHead', () => {
  afterEach(cleanup);

  test('should render table head', () => {
    const { container } = render(<TableHead />);
    const tableBody = container.querySelector('thead');
    expect(tableBody).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<TableHead className='custom-class' />);
    const tableBody = container.querySelector('thead');
    expect(tableBody).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLTableSectionElement>();
    const { container } = render(<TableHead ref={ref} />);
    const tableBody = container.querySelector('thead');
    expect(tableBody).toBe(ref.current);
  });
});
