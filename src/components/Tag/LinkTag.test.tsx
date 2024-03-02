import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { LinkTag } from '../';

describe('LinkTag', () => {
  afterEach(cleanup);

  test('should render children correctly', () => {
    const { queryByText } = render(<LinkTag>Test LinkTag</LinkTag>);
    expect(queryByText('Test LinkTag')).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const { getByText } = render(<LinkTag className='custom-class'>Custom LinkTag</LinkTag>);
    expect(getByText('Custom LinkTag')).toHaveClass('custom-class');
  });

  test('should apply custom text color', () => {
    const { getByText } = render(<LinkTag textColor='var(--red100)'>Colored LinkTag</LinkTag>);
    expect(getByText('Colored LinkTag')).toHaveStyle({ '--color': 'var(--red100)' });
  });

  test('should apply custom background color', () => {
    const { getByText } = render(<LinkTag backgroundColor='var(--blue100)'>Colored LinkTag</LinkTag>);
    expect(getByText('Colored LinkTag')).toHaveStyle({ '--background': 'var(--blue100)' });
  });

  test('should apply custom icon', () => {
    const { getByText } = render(<LinkTag icon='activity'>Icon LinkTag</LinkTag>);
    expect(getByText('Icon LinkTag')).toHaveClass('icon-activity');
  });

  test('should forward ref to the LinkTag component', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<LinkTag ref={ref}>LinkTag with ref</LinkTag>);
    expect(ref.current).not.toBeNull();
  });

  test('should attach a link to the LinkTag component', () => {
    const { getByText } = render(<LinkTag href='https://example.com'>LinkTag with href</LinkTag>);
    expect(getByText('LinkTag with href')).toHaveAttribute('href', 'https://example.com');
  });
});
