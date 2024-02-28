import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { LinkTag } from '../';

describe('LinkTag', () => {
  afterEach(cleanup);

  test('should render children correctly', () => {
    render(<LinkTag>Test LinkTag</LinkTag>);
    expect(screen.queryByText('Test LinkTag')).not.toBeNull();
  });

  test('should apply custom class name', () => {
    render(<LinkTag className='custom-class'>Custom LinkTag</LinkTag>);
    expect(screen.getByText('Custom LinkTag')).toHaveClass('custom-class');
  });

  test('should apply custom text color', () => {
    render(<LinkTag textColor='var(--red100)'>Colored LinkTag</LinkTag>);
    expect(screen.getByText('Colored LinkTag')).toHaveStyle({ '--color': 'var(--red100)' });
  });

  test('should apply custom background color', () => {
    render(<LinkTag backgroundColor='var(--blue100)'>Colored LinkTag</LinkTag>);
    expect(screen.getByText('Colored LinkTag')).toHaveStyle({ '--background': 'var(--blue100)' });
  });

  test('should appliy custom icon', () => {
    render(<LinkTag icon='activity'>Icon LinkTag</LinkTag>);
    expect(screen.getByText('Icon LinkTag')).toHaveClass('icon-activity');
  });

  test('should forward ref to the LinkTag component', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<LinkTag ref={ref}>LinkTag with ref</LinkTag>);
    expect(ref.current).not.toBeNull();
  });

  test('should attach a link to the LinkTag component', () => {
    render(<LinkTag href='https://example.com'>LinkTag with href</LinkTag>);
    expect(screen.getByText('LinkTag with href')).toHaveAttribute('href', 'https://example.com');
  });
});
