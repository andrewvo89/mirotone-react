import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { FormGroup } from '../..';

describe('FormGroup component', () => {
  afterEach(cleanup);

  test('should render correctly', () => {
    const { container } = render(<FormGroup />);
    const formGroup = container.querySelector('.form-group');
    expect(formGroup).not.toBeNull();
  });

  test('should render with size class name', () => {
    const { container } = render(<FormGroup size='small' />);
    const formGroup = container.querySelector('.form-group-small');
    expect(formGroup).not.toBeNull();
  });

  test('should render with custom class name', () => {
    const { container } = render(<FormGroup className='custom-form-group' />);
    const formGroup = container.querySelector('.custom-form-group');
    expect(formGroup).not.toBeNull();
  });

  test('should render with error status class name', () => {
    const { container } = render(<FormGroup status='error' />);
    const formGroup = container.querySelector('.error');
    expect(formGroup).not.toBeNull();
  });

  test('should render with success status class name', () => {
    const { container } = render(<FormGroup status='success' />);
    const formGroup = container.querySelector('.success');
    expect(formGroup).not.toBeNull();
  });

  test('should render with disabled class name', () => {
    const { container } = render(<FormGroup isDisabled />);
    const formGroup = container.querySelector('.form-group__disabled');
    expect(formGroup).not.toBeNull();
  });

  test('should pass ref to the input element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<FormGroup ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
