import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { DropdownButton } from '../..';

describe('DropdownButton', () => {
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
