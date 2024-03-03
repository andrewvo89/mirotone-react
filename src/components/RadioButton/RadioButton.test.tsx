import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioButton } from '../../';

describe('RadioButton', () => {
  afterEach(cleanup);

  test('should render a radiobutton', () => {
    const { queryByRole } = render(<RadioButton />);
    const radiobutton = queryByRole('radio');
    console.log('radiobutton', radiobutton);
    expect(radiobutton).not.toBeNull();
  });

  test('should call onChange when radiobutton is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { getByRole } = render(<RadioButton onChange={onChange} />);

    const radiobutton = getByRole('radio');
    await user.click(radiobutton);

    expect(onChange).toHaveBeenCalled();
  });

  test('should control the radiobutton with "value" and "onChange"', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const value = true;

    const { getByRole } = render(<RadioButton value={value} onChange={onChange} />);

    const radiobutton = getByRole('radio');
    expect(radiobutton).toBeChecked();

    await user.click(radiobutton);
    // expect(onChange).toHaveBeenCalledWith(!value);
  });

  test('should render a label', () => {
    const label = 'RadioButton Label';

    const { queryByText } = render(<RadioButton label={label} />);
    expect(queryByText(label)).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const customClassName = 'custom-radiobutton';

    const { getByRole } = render(<RadioButton className={customClassName} />);
    const radiobutton = getByRole('radio');
    expect(radiobutton).toHaveClass(customClassName);
  });

  test('multiple radiobuttons are mutal exclusively checked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { getByRole } = render(
      <div>
        <RadioButton label='Option 1' name='radio' onChange={onChange} />
        <RadioButton label='Option 2' name='radio' onChange={onChange} />
      </div>,
    );

    const radiobutton1 = getByRole('radio', { name: 'Option 1' });
    const radiobutton2 = getByRole('radio', { name: 'Option 2' });

    await user.click(radiobutton1);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(radiobutton1).toBeChecked();
    expect(radiobutton2).not.toBeChecked();

    await user.click(radiobutton2);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(radiobutton1).not.toBeChecked();
    expect(radiobutton2).toBeChecked();
  });

  test('should pass ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = render(<RadioButton ref={ref} />);
    const radiobutton = getByRole('radio');
    expect(radiobutton).toBe(ref.current);
  });
});
