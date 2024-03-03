import { createRef } from 'react';
import { afterEach, describe, expect } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { Link } from '../';

describe('Link', (test) => {
  afterEach(cleanup);

  test('should render correctly', () => {
    const { queryByText } = render(<Link>Hello World</Link>);
    const link = queryByText('Hello World');
    expect(link).toHaveClass('link');
    expect(link).not.toBeNull();
  });

  test('should render with variant "danger"', () => {
    const { queryByText } = render(<Link variant='danger'>Danger Link</Link>);
    const link = queryByText('Danger Link');
    expect(link).toHaveClass('link-danger');
  });

  test('should render with custom class name', () => {
    const { queryByText } = render(<Link className='custom-link'>Custom Link</Link>);
    const link = queryByText('Custom Link');
    expect(link).toHaveClass('custom-link');
  });

  test('should attach a link', () => {
    const { getByText } = render(<Link href='https://example.com'>With href</Link>);
    const result = getByText('With href');
    expect(result).toHaveAttribute('href', 'https://example.com');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLAnchorElement>();
    const { queryByText } = render(<Link ref={ref}>Link with Ref</Link>);
    const link = queryByText('Link with Ref');
    expect(link).toBe(ref.current);
  });
});
