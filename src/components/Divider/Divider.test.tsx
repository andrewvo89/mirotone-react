import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import Divider from './Divider';

describe('Divider component', () => {
  test('renders correctly', () => {
    const { container } = render(<Divider />);
    const divider = container.querySelector('hr');
    expect(divider).not.toBeNull();
  });

  test('passes down custom class name', () => {
    const { container } = render(<Divider className='custom-divider' />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('custom-divider');
  });

  test('passes down ref', () => {
    const ref = createRef<HTMLHRElement>();
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
