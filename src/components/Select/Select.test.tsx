import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Select, SelectOption } from '../../';

describe('Select', () => {
  afterEach(cleanup);

  test('should render a select element', () => {
    const { queryByRole } = render(<Select />);
    const selectElement = queryByRole('combobox');
    expect(selectElement).not.toBeNull();
  });

  test('should render with custom size of small', () => {
    const { getByRole } = render(<Select size='small' />);
    const selectElement = getByRole('combobox');
    expect(selectElement).toHaveClass('select-small');
  });

  test('should have correct value and call onChange handler', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { getByRole } = render(
      <Select value='option1' onChange={onChange}>
        <SelectOption value='option1'>Option 1</SelectOption>
        <SelectOption value='option2'>Option 2</SelectOption>
      </Select>,
    );

    const selectElement = getByRole('combobox');

    expect(selectElement).toHaveValue('option1');

    await user.selectOptions(selectElement, 'option2');
    expect(onChange).toHaveBeenCalledWith('option2');
  });

  test('should be disabled when isDisabled prop is true', () => {
    const { getByRole } = render(<Select isDisabled />);
    const selectElement = getByRole('combobox');
    expect(selectElement).toBeDisabled();
  });

  test('should apply custom class name', () => {
    const customClassName = 'custom-select';
    const { getByRole } = render(<Select className={customClassName} />);
    const selectElement = getByRole('combobox');
    expect(selectElement).toHaveClass(customClassName);
  });

  test('should pass ref to the select element', () => {
    const ref = createRef<HTMLSelectElement>();
    const { getByRole } = render(<Select ref={ref} />);
    const selectElement = getByRole('combobox');
    expect(selectElement).toBe(ref.current);
  });
});
