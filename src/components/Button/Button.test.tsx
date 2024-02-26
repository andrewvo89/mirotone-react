import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Button } from '..';
import { createRef } from 'react';

describe('Button', () => {
  test('should render a default button', () => {
    render(<Button>Button</Button>);
    expect(screen.queryByRole('button')).toBeDefined();
  });

  test('should render a default button', () => {
    render(<Button isDisabled>Button</Button>);
    expect(screen.queryByRole('button')).toBeDisabled();
  });

  test('should render custom class name', () => {
    render(<Button className='custom-class'>Button</Button>);
    expect(screen.queryByRole('button')).toHaveClass('custom-class');
  });

  test('should forward ref to parent button component', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button</Button>);
    expect(screen.queryByRole('button')).toBe(ref.current);
  });
});
