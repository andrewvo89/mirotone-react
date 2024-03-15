import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '../';

describe('Button', () => {
  afterEach(cleanup);

  test('should render a default button', () => {
    render(<Button>Button</Button>);
    expect(screen.queryByRole('button')).toBeDefined();
  });

  test('should render a disabled button', () => {
    render(<Button isDisabled>Button</Button>);
    expect(screen.queryByRole('button')).toBeDisabled();
  });

  test('should be clickable', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Button</Button>);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('should not be clickable when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button isDisabled onClick={onClick}>
        Button
      </Button>,
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  test('should set gap prop', () => {
    const { queryByText } = render(<Button gap={4}>Button</Button>);
    const element = queryByText('Button');
    expect(element).toHaveStyle('--gap: 4');
  });

  test('should render custom class name', () => {
    render(<Button className='custom-class'>Button</Button>);
    expect(screen.queryByRole('button')).toHaveClass('custom-class');
  });

  test('should forward ref to parent button component', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button</Button>);
    const button = screen.queryByRole('button');
    expect(button).toBe(ref.current);
  });
});
