import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { Tag } from '../';

describe('Tag', () => {
  afterEach(cleanup);

  test('should render children correctly', () => {
    const { queryByText } = render(<Tag>Test Tag</Tag>);
    const tag = queryByText('Test Tag');
    expect(tag).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const { getByText } = render(<Tag className='custom-class'>Custom Tag</Tag>);
    const tag = getByText('Custom Tag');
    expect(tag).toHaveClass('custom-class');
  });

  test('should apply custom text color', () => {
    const { getByText } = render(<Tag textColor='var(--red100)'>Colored Tag</Tag>);
    const tag = getByText('Colored Tag');
    expect(tag).toHaveStyle({ '--color': 'var(--red100)' });
  });

  test('should apply custom background color', () => {
    const { getByText } = render(<Tag backgroundColor='var(--blue100)'>Colored Tag</Tag>);
    const tag = getByText('Colored Tag');
    expect(tag).toHaveStyle({ '--background': 'var(--blue100)' });
  });

  test('should apply custom icon', () => {
    const { getByText } = render(<Tag icon='activity'>Icon Tag</Tag>);
    const tag = getByText('Icon Tag');
    expect(tag).toHaveClass('icon-activity');
  });

  test('should forward ref to the Tag component', () => {
    const ref = createRef<HTMLSpanElement>();
    const { getByText } = render(<Tag ref={ref}>Tag with ref</Tag>);
    const tag = getByText('Tag with ref');
    expect(tag).toBe(ref.current);
  });
});
