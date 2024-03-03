import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { TagButton } from '../';

describe('TagButton', () => {
  afterEach(cleanup);

  test('should render correctly', () => {
    const { queryByRole, queryByText } = render(<TagButton icon='activity' />);
    const button = queryByRole('button');
    expect(button).not.toBeNull();
    expect(queryByText('Hello')).toBeNull();
  });

  test('should apply custom class name', () => {
    const { getByRole } = render(<TagButton icon='activity' className='custom-class' />);
    expect(getByRole('button')).toHaveClass('custom-class');
  });

  test('should apply custom icon', () => {
    const { getByRole } = render(<TagButton icon='babble' />);
    expect(getByRole('button')).toHaveClass('icon-babble');
  });

  test('should forward ref to the TagButton component', () => {
    const ref = createRef<HTMLButtonElement>();
    const { queryByRole } = render(<TagButton ref={ref} icon='activity' />);
    expect(queryByRole('button')).toBe(ref.current);
  });
});
