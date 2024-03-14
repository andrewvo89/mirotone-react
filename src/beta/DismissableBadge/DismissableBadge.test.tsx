import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, fireEvent, render } from '@testing-library/react';

import DismissableBadge from './DismissableBadge';

describe('DismissableBadge', () => {
  afterEach(cleanup);

  test('should render children text', () => {
    const { queryByText } = render(<DismissableBadge>Test Badge</DismissableBadge>);
    const badge = queryByText('Test Badge');
    expect(badge).not.toBeNull();
  });

  test('should trigger onClose when close button is clicked', () => {
    const onClose = vi.fn();
    const { getByRole } = render(<DismissableBadge onClose={onClose}>Test Badge</DismissableBadge>);

    const closeButton = getByRole('button');
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });

  test('should pass down custom class name', () => {
    const { queryByText } = render(<DismissableBadge className='custom-badge'>Test Badge</DismissableBadge>);
    const badge = queryByText('Test Badge');

    expect(badge).toHaveClass('custom-badge');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { queryByText } = render(<DismissableBadge ref={ref}>Test Badge</DismissableBadge>);
    const badge = queryByText('Test Badge');

    expect(badge).toBe(ref.current);
  });
});
