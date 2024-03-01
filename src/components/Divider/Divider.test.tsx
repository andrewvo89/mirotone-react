import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import Divider from './Divider';

describe('Divider component', () => {
  test('should render correctly', () => {
    const { container } = render(<Divider />);
    const divider = container.querySelector('hr');
    expect(divider).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<Divider className='custom-divider' />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('custom-divider');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLHRElement>();
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
