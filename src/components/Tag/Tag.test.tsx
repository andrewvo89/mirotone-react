import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { Tag } from '../';

describe('Tag', () => {
  afterEach(cleanup);

  test('should render children correctly', () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.queryByText('Test Tag')).not.toBeNull();
  });

  test('should apply custom class name', () => {
    render(<Tag className='custom-class'>Custom Tag</Tag>);
    expect(screen.getByText('Custom Tag')).toHaveClass('custom-class');
  });

  test('should apply custom text color', () => {
    render(<Tag textColor='var(--red100)'>Colored Tag</Tag>);
    expect(screen.getByText('Colored Tag')).toHaveStyle({ '--color': 'var(--red100)' });
  });

  test('should apply custom background color', () => {
    render(<Tag backgroundColor='var(--blue100)'>Colored Tag</Tag>);
    expect(screen.getByText('Colored Tag')).toHaveStyle({ '--background': 'var(--blue100)' });
  });

  test('should appliy custom icon', () => {
    render(<Tag icon='activity'>Icon Tag</Tag>);
    expect(screen.getByText('Icon Tag')).toHaveClass('icon-activity');
  });

  test('should forward ref to the Tag component', () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Tag ref={ref}>Tag with ref</Tag>);
    expect(ref.current).not.toBeNull();
  });
});
