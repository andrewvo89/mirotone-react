import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { LinkTag } from '../';

describe('LinkTag', () => {
  afterEach(cleanup);

  test('should render children correctly', () => {
    const { queryByText } = render(<LinkTag>Test LinkTag</LinkTag>);
    const result = queryByText('Test LinkTag');
    expect(result).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const { getByText } = render(<LinkTag className='custom-class'>Custom LinkTag</LinkTag>);
    const result = getByText('Custom LinkTag');
    expect(result).toHaveClass('custom-class');
  });

  test('should apply custom text color', () => {
    const { getByText } = render(<LinkTag textColor='var(--red100)'>Colored LinkTag</LinkTag>);
    const result = getByText('Colored LinkTag');
    expect(result).toHaveStyle({ '--color': 'var(--red100)' });
  });

  test('should apply custom background color', () => {
    const { getByText } = render(<LinkTag backgroundColor='var(--blue100)'>Colored LinkTag</LinkTag>);
    const result = getByText('Colored LinkTag');
    expect(result).toHaveStyle({ '--background': 'var(--blue100)' });
  });

  test('should apply custom icon', () => {
    const { getByText } = render(<LinkTag icon='activity'>Icon LinkTag</LinkTag>);
    const result = getByText('Icon LinkTag');
    expect(result).toHaveClass('icon-activity');
  });

  test('should attach a link to the LinkTag component', () => {
    const { getByText } = render(<LinkTag href='https://example.com'>LinkTag with href</LinkTag>);
    const result = getByText('LinkTag with href');
    expect(result).toHaveAttribute('href', 'https://example.com');
  });

  test('should forward ref to the LinkTag component', () => {
    const ref = createRef<HTMLAnchorElement>();
    const { getByText } = render(<LinkTag ref={ref}>LinkTag with ref</LinkTag>);
    const result = getByText('LinkTag with ref');
    expect(result).toBe(ref.current);
  });
});
