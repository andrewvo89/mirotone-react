import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { AppCardBody } from '..';

describe('AppCardBody', () => {
  test('should render component', () => {
    render(<AppCardBody>Content</AppCardBody>);
    const appCardBody = screen.queryByText('Content');
    expect(appCardBody).not.toBeNull();
  });

  test('should render component with additional class name', () => {
    render(<AppCardBody className='custom-class'>Content</AppCardBody>);
    const appCardBody = screen.queryByText('Content');
    expect(appCardBody).toHaveClass('custom-class');
  });

  test('should forward ref to component', () => {
    const ref = createRef<HTMLDivElement>();
    render(<AppCardBody ref={ref}>Content</AppCardBody>);
    const appCardBody = screen.queryByText('Content');
    expect(appCardBody).toBe(ref.current);
  });
});
