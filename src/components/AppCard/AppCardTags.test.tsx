import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { AppCardTags } from '../';

describe('AppCardTags', () => {
  afterEach(cleanup);

  test('should render component', () => {
    const { queryByText } = render(<AppCardTags>Content</AppCardTags>);
    const appCardTags = queryByText('Content');
    expect(appCardTags).not.toBeNull();
  });

  test('should render the AppCardTags component with additional class name', () => {
    const { queryByText } = render(<AppCardTags className='custom-class'>Content</AppCardTags>);
    const appCardTags = queryByText('Content');
    expect(appCardTags).toHaveClass('custom-class');
  });

  test('should forward ref to the AppCardTags component', () => {
    const ref = createRef<HTMLDivElement>();
    const { queryByText } = render(<AppCardTags ref={ref}>Content</AppCardTags>);
    const appCardTags = queryByText('Content');
    expect(appCardTags).toBe(ref.current);
  });
});
