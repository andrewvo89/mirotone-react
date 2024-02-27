import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { Icon } from '../';

describe('Icon', () => {
  afterEach(cleanup);

  test('should render component', () => {
    render(<Icon name='activity' />);
    const icon = document.querySelector('span.icon.icon-activity');
    expect(icon).not.toBeNull();
  });

  test('should render the Icon component with additional class name', () => {
    render(<Icon name='activity' className='custom-class' />);
    const icon = document.querySelector('span.icon.icon-activity');
    expect(icon).toHaveClass('custom-class');
  });

  test('should forward ref to the Icon component', () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Icon name='activity' ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
