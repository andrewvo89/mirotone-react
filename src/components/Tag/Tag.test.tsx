import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { Tag } from '../';

describe('Tag', () => {
  afterEach(cleanup);

  test('should render children correctly', () => {
    const { queryByText } = render(<Tag>Test Tag</Tag>);
    expect(queryByText('Test Tag')).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const { getByText } = render(<Tag className='custom-class'>Custom Tag</Tag>);
    expect(getByText('Custom Tag')).toHaveClass('custom-class');
  });

  test('should apply custom text color', () => {
    const { getByText } = render(<Tag textColor='var(--red100)'>Colored Tag</Tag>);
    expect(getByText('Colored Tag')).toHaveStyle({ '--color': 'var(--red100)' });
  });

  test('should apply custom background color', () => {
    const { getByText } = render(<Tag backgroundColor='var(--blue100)'>Colored Tag</Tag>);
    expect(getByText('Colored Tag')).toHaveStyle({ '--background': 'var(--blue100)' });
  });

  test('should apply custom icon', () => {
    const { getByText } = render(<Tag icon='activity'>Icon Tag</Tag>);
    expect(getByText('Icon Tag')).toHaveClass('icon-activity');
  });

  test('should forward ref to the Tag component', () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Tag ref={ref}>Tag with ref</Tag>);
    expect(ref.current).not.toBeNull();
  });
});
