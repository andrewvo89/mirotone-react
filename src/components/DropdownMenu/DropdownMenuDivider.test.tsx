import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { DropdownMenuDivider } from '../..';

describe('DropdownMenuDivider', () => {
  afterEach(cleanup);

  test('should render correctly', () => {
    const { container } = render(<DropdownMenuDivider />);
    const divider = container.querySelector('hr');
    expect(divider).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<DropdownMenuDivider className='custom-divider' />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('custom-divider');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLHRElement>();
    const { container } = render(<DropdownMenuDivider ref={ref} />);
    const divider = container.querySelector('hr');
    expect(divider).toBe(ref.current);
  });
});
