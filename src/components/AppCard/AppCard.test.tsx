import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { AppCard } from '../';

describe('AppCard', () => {
  afterEach(cleanup);

  test('should render component', () => {
    const { queryByText } = render(<AppCard>Content</AppCard>);
    const appCard = queryByText('Content');
    expect(appCard).not.toBeNull();
  });

  test('should render component with custom accent color', () => {
    const { queryByText } = render(<AppCard accentColor='var(--red50)'>Content</AppCard>);
    const appCard = queryByText('Content');
    expect(appCard).toHaveStyle({ '--accent-color': 'var(--red50)' });
  });

  test('should render the AppCard component with additional class name', () => {
    const { queryByText } = render(<AppCard className='custom-class'>Content</AppCard>);
    const appCard = queryByText('Content');
    expect(appCard).toHaveClass('custom-class');
  });

  test('should forward ref to the AppCard component', () => {
    const ref = createRef<HTMLDivElement>();
    const { queryByText } = render(<AppCard ref={ref}>Content</AppCard>);
    const appCard = queryByText('Content');
    expect(appCard).toBe(ref.current);
  });
});
