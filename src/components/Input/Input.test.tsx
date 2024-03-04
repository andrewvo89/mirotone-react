import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '../..';

describe('Input component', () => {
  afterEach(cleanup);

  test('should render correctly with default props', () => {
    render(<Input />);
    const input = screen.queryByRole('textbox');
    expect(input).not.toBeNull();
  });

  test('should control the input with "value" and "onChange"', async () => {
    const user = userEvent.setup();
    const value = '';
    const onChange = vi.fn();

    render(<Input value={value} onChange={onChange} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(value);

    await user.type(input, 'a');
    expect(onChange).toBeCalledWith('a');
  });

  test('should render correctly with small size', () => {
    render(<Input size='small' />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('input-small');
  });

  test('should render correctly with disabled prop', () => {
    render(<Input isDisabled />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('disabled');
    expect(input).toBeDisabled();
  });

  test('should render correctly with readOnly prop', () => {
    render(<Input isReadOnly />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readonly');
  });

  test('should render correctly with custom flex modifier', () => {
    render(<Input flexModifier='2/4' />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('two-fourth');
  });

  test('should render correctly with custom class name', () => {
    render(<Input className='custom-input' />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-input');
  });

  test('should pass ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    const input = screen.getByRole('textbox');
    expect(input).toBe(ref.current);
  });
});
