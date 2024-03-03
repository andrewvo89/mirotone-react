import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { SelectOption } from '../../';

describe('SelectOption', () => {
  test('should render a select option', () => {
    const { getByRole } = render(<SelectOption />);
    const selectOption = getByRole('option');
    expect(selectOption).toBeInTheDocument();
  });

  test('should apply custom class name', () => {
    const customClassName = 'custom-select-option';
    const { getByRole } = render(<SelectOption className={customClassName} />);
    const selectOption = getByRole('option');
    expect(selectOption).toHaveClass(customClassName);
  });

  test('should pass ref to the option element', () => {
    const ref = createRef<HTMLOptionElement>();
    const { getByRole } = render(<SelectOption ref={ref} />);
    const selectOption = getByRole('option');
    expect(selectOption).toBe(ref.current);
  });
});
