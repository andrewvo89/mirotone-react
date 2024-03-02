import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { AppCardBody } from '../';

describe('AppCardBody', () => {
  afterEach(cleanup);

  test('should render component', () => {
    const { queryByText } = render(<AppCardBody>Content</AppCardBody>);
    const appCardBody = queryByText('Content');
    expect(appCardBody).not.toBeNull();
  });

  test('should render component with additional class name', () => {
    const { queryByText } = render(<AppCardBody className='custom-class'>Content</AppCardBody>);
    const appCardBody = queryByText('Content');
    expect(appCardBody).toHaveClass('custom-class');
  });

  test('should forward ref to component', () => {
    const ref = createRef<HTMLDivElement>();
    const { queryByText } = render(<AppCardBody ref={ref}>Content</AppCardBody>);
    const appCardBody = queryByText('Content');
    expect(appCardBody).toBe(ref.current);
  });
});
