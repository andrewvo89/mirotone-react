import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { AppCardTitle } from '../';

describe('AppCardTitle', () => {
  afterEach(cleanup);

  test('should render component', () => {
    const { queryByText } = render(<AppCardTitle>Title</AppCardTitle>);
    const appCardTitle = queryByText('Title');
    expect(appCardTitle).not.toBeNull();
  });

  test('should render the AppCardTitle component with additional class name', () => {
    const { queryByText } = render(<AppCardTitle className='custom-class'>Title</AppCardTitle>);
    const appCardTitle = queryByText('Title');
    expect(appCardTitle).toHaveClass('custom-class');
  });

  test('should forward ref to the AppCardTitle component', () => {
    const ref = createRef<HTMLHeadingElement>();
    const { queryByText } = render(<AppCardTitle ref={ref}>Title</AppCardTitle>);
    const appCardTitle = queryByText('Title');
    expect(appCardTitle).toBe(ref.current);
  });
});
