import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { TagButton } from '../';

describe('TagButton', () => {
  afterEach(cleanup);

  test('should render correctly', () => {
    const { queryByRole } = render(<TagButton icon='activity' />);
    expect(queryByRole('button')).not.toBeNull();
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
    render(<TagButton ref={ref} icon='activity' />);
    expect(ref.current).not.toBeNull();
  });
});
