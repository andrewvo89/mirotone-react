import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { DropdownButton } from '../..';

describe('DropdownButton', () => {
  afterEach(cleanup);

  test('should render children text', () => {
    const { queryByText } = render(<DropdownButton>Hello World</DropdownButton>);
    const button = queryByText('Hello World');
    expect(button).not.toBeNull();
  });

  test('should render chevron down icon', () => {
    const { container } = render(<DropdownButton />);
    const icon = container.querySelector('.icon-arrow-down');
    expect(icon).not.toBeNull();
  });
});
