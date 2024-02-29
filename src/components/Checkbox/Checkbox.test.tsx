import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from '../';

describe('Checkbox', () => {
  afterEach(cleanup);

  test('should render a checkbox', () => {
    render(<Checkbox />);
    expect(screen.queryByRole('checkbox')).toBeDefined();
  });

  test('should call onChange when checkbox is clicked', async () => {
    const onChange = vi.fn();

    render(<Checkbox onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalled();
  });

  test('should control the checkbox with "value" and "onChange"', async () => {
    const onChange = vi.fn();
    const value = true;

    render(<Checkbox value={value} onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(!value);
  });

  test('should render a label', () => {
    const label = 'Checkbox Label';

    render(<Checkbox label={label} />);
    expect(screen.queryByText(label)).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const customClassName = 'custom-checkbox';

    render(<Checkbox className={customClassName} />);
    expect(screen.getByRole('checkbox')).toHaveClass(customClassName);
  });

  test('should pass ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} />);
    expect(ref.current).toBe(screen.getByRole('checkbox'));
  });
});
