import { createRef } from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';

import { FormGroup } from '../..';

describe('FormGroup component', () => {
  test('should render correctly', () => {
    const { container } = render(<FormGroup />);
    const formGroup = container.querySelector('.form-group');
    expect(formGroup).not.toBeNull();
  });

  test('should render with size class name', () => {
    const { container } = render(<FormGroup size='small' />);
    const formGroup = container.querySelector('.form-group-small');
    expect(formGroup).toBeInTheDocument();
  });

  test('should render with custom class name', () => {
    const { container } = render(<FormGroup className='custom-form-group' />);
    const formGroup = container.querySelector('.custom-form-group');
    expect(formGroup).toBeInTheDocument();
  });

  test('should pass ref to the input element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<FormGroup ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
