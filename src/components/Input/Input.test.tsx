import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '../..';

describe('Input component', () => {
  afterEach(cleanup);

  test('should render correctly with default props', () => {
    render(<Input />);
    const inputElement = screen.queryByRole('textbox');
    expect(inputElement).not.toBeNull();
  });

  test('should control the input with "value" and "onChange"', async () => {
    const user = userEvent.setup();
    const value = '';
    const onChange = vi.fn();

    render(<Input value={value} onChange={onChange} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(value);

    await user.type(inputElement, 'a');
    expect(onChange).toBeCalledWith('a');
  });

  test('should render correctly with small size', () => {
    render(<Input size='small' />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('input-small');
  });

  test('should render correctly with disabled prop', () => {
    render(<Input isDisabled />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('disabled');
    expect(inputElement).toBeDisabled();
  });

  test('should render correctly with readOnly prop', () => {
    render(<Input isReadOnly />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('readonly');
  });

  test('should render correctly with custom flex modifier', () => {
    render(<Input flexModifier='2/4' />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('two-fourth');
  });

  test('should render correctly with custom class name', () => {
    render(<Input className='custom-input' />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('custom-input');
  });

  test('should pass ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
