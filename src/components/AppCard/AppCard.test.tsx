import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { AppCard } from '..';

describe('AppCard', () => {
  test('should render component', () => {
    render(<AppCard>Content</AppCard>);
    const appCard = screen.queryByText('Content');
    expect(appCard).not.toBeNull();
  });

  test('should render component with custom accent color', () => {
    render(<AppCard accentColor='var(--red50)'>Content</AppCard>);
    const appCard = screen.queryByText('Content');
    expect(appCard).toHaveStyle({ '--accent-color': 'var(--red50)' });
  });

  test('should render the AppCard component with additional class name', () => {
    render(<AppCard className='custom-class'>Content</AppCard>);
    const appCard = screen.queryByText('Content');
    expect(appCard).toHaveClass('custom-class');
  });

  test('should forward ref to the AppCard component', () => {
    const ref = createRef<HTMLDivElement>();
    render(<AppCard ref={ref}>Content</AppCard>);
    const appCard = screen.queryByText('Content');
    expect(appCard).toBe(ref.current);
  });
});
