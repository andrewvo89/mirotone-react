import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import { TextArea } from '.';
import { createRef } from 'react';

describe('TextArea', () => {
  test('should render properly', () => {
    render(<TextArea />);
    const textarea = screen.queryByRole('textbox');
    expect(textarea).not.toBeNull();
  });

  test('should bind value and onChange', async () => {
    const user = userEvent.setup();
    const value = '';
    const onChange = vi.fn();

    render(<TextArea value={value} onChange={onChange} />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('');

    await user.type(textarea, 'a');
    expect(onChange).toBeCalledWith('a');
  });

  test('should apply size small', () => {
    render(<TextArea size='small' />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('textarea-small');
  });

  test('should apply disabled prop', () => {
    render(<TextArea isDisabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('disabled');
    expect(textarea).toBeDisabled();
  });

  test('should apply readonly prop', () => {
    render(<TextArea isReadOnly />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('readonly');
  });

  test('should apply custom class name', () => {
    render(<TextArea className='custom-class' />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<TextArea ref={ref} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBe(ref.current);
  });
});
