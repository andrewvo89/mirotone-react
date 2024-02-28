import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { AppCardTitle } from '..';

describe('AppCardTitle', () => {
  afterEach(cleanup);

  test('should render component', () => {
    render(<AppCardTitle>Title</AppCardTitle>);
    const appCardTitle = screen.queryByText('Title');
    expect(appCardTitle).not.toBeNull();
  });

  test('should render the AppCardTitle component with additional class name', () => {
    render(<AppCardTitle className='custom-class'>Title</AppCardTitle>);
    const appCardTitle = screen.queryByText('Title');
    expect(appCardTitle).toHaveClass('custom-class');
  });

  test('should forward ref to the AppCardTitle component', () => {
    const ref = createRef<HTMLHeadingElement>();
    render(<AppCardTitle ref={ref}>Title</AppCardTitle>);
    const appCardTitle = screen.queryByText('Title');
    expect(appCardTitle).toBe(ref.current);
  });
});
