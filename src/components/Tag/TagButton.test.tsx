import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { TagButton } from '../';

describe('TagButton', () => {
  afterEach(cleanup);

  test('should render correctly', () => {
    render(<TagButton icon='activity' />);
    expect(screen.queryByRole('button')).not.toBeNull();
  });

  test('should apply custom class name', () => {
    render(<TagButton icon='activity' className='custom-class' />);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  test('should apply custom icon', () => {
    render(<TagButton icon='babble' />);
    expect(screen.getByRole('button')).toHaveClass('icon-babble');
  });

  test('should forward ref to the TagButton component', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<TagButton ref={ref} icon='activity' />);
    expect(ref.current).not.toBeNull();
  });
});
