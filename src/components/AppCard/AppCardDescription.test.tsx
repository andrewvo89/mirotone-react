import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { AppCardDescription } from '../';

describe('AppCardDescription', () => {
  afterEach(cleanup);

  test('should render component with provided children', () => {
    const { queryByText } = render(<AppCardDescription>Sample Description</AppCardDescription>);
    const description = queryByText('Sample Description');
    expect(description).toBeInTheDocument();
  });

  test('should render component with additional class name', () => {
    const { queryByText } = render(
      <AppCardDescription className='custom-class'>Sample Description</AppCardDescription>,
    );
    const description = queryByText('Sample Description');
    expect(description).toHaveClass('custom-class');
  });

  test('should forward ref to the component', () => {
    const ref = createRef<HTMLHeadingElement>();
    const { queryByText } = render(<AppCardDescription ref={ref}>Sample Description</AppCardDescription>);
    const description = queryByText('Sample Description');
    expect(description).toBe(ref.current);
  });
});
