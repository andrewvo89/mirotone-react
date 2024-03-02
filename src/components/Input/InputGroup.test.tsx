import { afterEach, describe, expect } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { InputGroup } from '../';
import { createRef } from 'react';

describe('InputGroup', (test) => {
  afterEach(cleanup);

  test('should render correctly', () => {
    const { container } = render(<InputGroup />);
    const inputGroup = container.querySelector('.input-group');
    expect(inputGroup).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const { container } = render(<InputGroup className='custom-class' />);
    const inputGroup = container.querySelector('.input-group');
    expect(inputGroup).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<InputGroup ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
