import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropdownMenu } from '../../';

describe('DropdownMenu', () => {
  afterEach(cleanup);

  test('should render trigger component', () => {
    const { queryByRole } = render(<DropdownMenu trigger={<button>Open me</button>} />);
    const trigger = queryByRole('button');
    expect(trigger).not.toBeNull();
  });

  test('should render the drop down menu', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<DropdownMenu trigger={<button>Open me</button>} />);

    const trigger = getByRole('button');
    await user.click(trigger);

    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeNull();
  });

  test('should apply the correct size class name', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<DropdownMenu size='small' trigger={<button>Open me</button>} />);

    const trigger = getByRole('button');
    await user.click(trigger);

    const menu = screen.queryByRole('menu');
    expect(menu).toHaveClass('p-small');
  });

  test('should apply a custom class name', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<DropdownMenu className='custom-class' trigger={<button>Open me</button>} />);

    const trigger = getByRole('button');
    await user.click(trigger);

    const menu = screen.queryByRole('menu');
    expect(menu).toHaveClass('custom-class');
  });

  test('should pass down the ref', async () => {
    const user = userEvent.setup();
    const ref = createRef<HTMLDivElement>();
    const { getByRole } = render(<DropdownMenu ref={ref} trigger={<button>Open me</button>} />);

    const trigger = getByRole('button');
    await user.click(trigger);

    const menu = screen.queryByRole('menu');
    expect(menu).toBe(ref.current);
  });
});
