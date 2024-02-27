// FILEPATH: /Users/andrew/Documents/Projects/mirotone-react/src/components/AppCard/AppCardTags.test.tsx

import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { AppCardTags } from '../';

describe('AppCardTags', () => {
  test('should render component', () => {
    render(<AppCardTags>Content</AppCardTags>);
    const appCardTags = screen.queryByText('Content');
    expect(appCardTags).not.toBeNull();
  });

  test('should render the AppCardTags component with additional class name', () => {
    render(<AppCardTags className='custom-class'>Content</AppCardTags>);
    const appCardTags = screen.queryByText('Content');
    expect(appCardTags).toHaveClass('custom-class');
  });

  test('should forward ref to the AppCardTags component', () => {
    const ref = createRef<HTMLDivElement>();
    render(<AppCardTags ref={ref}>Content</AppCardTags>);
    const appCardTags = screen.queryByText('Content');
    expect(appCardTags).toBe(ref.current);
  });
});
