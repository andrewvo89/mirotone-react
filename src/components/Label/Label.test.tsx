import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { Label } from '../';

describe('Label', () => {
  afterEach(cleanup);

  test('should render correctly', () => {
    const { queryByText } = render(<Label>Hello World</Label>);
    const label = queryByText('Hello World');
    expect(label).toHaveClass('label');
    expect(label).not.toBeNull();
  });

  test('should render with variant "warning"', () => {
    const { queryByText } = render(<Label variant='warning'>Warning Label</Label>);
    const label = queryByText('Warning Label');
    expect(label).toHaveClass('label-warning');
  });

  test('should render with custom class name', () => {
    const { queryByText } = render(<Label className='custom-label'>Custom Label</Label>);
    const label = queryByText('Custom Label');
    expect(label).toHaveClass('custom-label');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLSpanElement>();
    const { queryByText } = render(<Label ref={ref}>Label with Ref</Label>);
    const label = queryByText('Label with Ref');
    expect(label).toBe(ref.current);
  });
});
