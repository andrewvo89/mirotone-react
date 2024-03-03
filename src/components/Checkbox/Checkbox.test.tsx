import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from '../';

describe('Checkbox', () => {
  afterEach(cleanup);

  test('should render a checkbox', () => {
    const { queryByRole } = render(<Checkbox />);
    expect(queryByRole('checkbox')).toBeDefined();
  });

  test('should call onChange when checkbox is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { getByRole } = render(<Checkbox onChange={onChange} />);

    const checkbox = getByRole('checkbox');
    await user.click(checkbox);

    expect(onChange).toHaveBeenCalled();
  });

  test('should control the checkbox with "value" and "onChange"', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const value = true;

    const { getByRole } = render(<Checkbox value={value} onChange={onChange} />);

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(!value);
  });

  test('should render a label', () => {
    const label = 'Checkbox Label';

    const { queryByText } = render(<Checkbox label={label} />);
    expect(queryByText(label)).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const customClassName = 'custom-checkbox';

    const { getByRole } = render(<Checkbox className={customClassName} />);
    expect(getByRole('checkbox')).toHaveClass(customClassName);
  });

  test('should pass ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = render(<Checkbox ref={ref} />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBe(ref.current);
  });
});
