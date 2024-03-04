import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toggle } from '../..';

describe('Toggle', () => {
  afterEach(cleanup);

  test('should render a toggle', () => {
    const { queryByRole } = render(<Toggle />);
    const toggle = queryByRole('checkbox');
    expect(toggle).not.toBeNull();
  });

  test('should call onChange when toggle is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { getByRole } = render(<Toggle onChange={onChange} />);

    const toggle = getByRole('checkbox');
    await user.click(toggle);

    expect(onChange).toHaveBeenCalled();
  });

  test('should control the toggle with "value" and "onChange"', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const value = true;

    const { getByRole } = render(<Toggle value={value} onChange={onChange} />);

    const toggle = getByRole('checkbox');
    expect(toggle).toBeChecked();

    await user.click(toggle);
    expect(onChange).toHaveBeenCalledWith(!value);
  });

  test('should render a label', () => {
    const label = 'Toggle Label';

    const { queryByText } = render(<Toggle label={label} />);
    const toggle = queryByText(label);
    expect(toggle).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const customClassName = 'custom-toggle';

    const { getByRole } = render(<Toggle className={customClassName} />);
    const toggle = getByRole('checkbox');
    expect(toggle).toHaveClass(customClassName);
  });

  test('should pass ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = render(<Toggle ref={ref} />);
    const toggle = getByRole('checkbox');
    expect(toggle).toBe(ref.current);
  });
});
