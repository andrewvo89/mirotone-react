import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dropdown } from '../..';

describe('Dropdown', () => {
  afterEach(cleanup);

  test('should render trigger component', () => {
    const { queryByRole } = render(<Dropdown trigger={<button>Open me</button>} />);
    const trigger = queryByRole('button');
    expect(trigger).not.toBeNull();
  });

  test('should render the drop down menu', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Dropdown trigger={<button>Open me</button>} />);

    const trigger = getByRole('button');
    await user.click(trigger);

    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeNull();
  });

  test('should manually set the open prop', () => {
    const open = true;
    render(<Dropdown open={open} trigger={<button>Open me</button>} />);

    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeNull();
  });

  test('should manually set the open prop to false', () => {
    const open = false;
    render(<Dropdown open={open} trigger={<button>Open me</button>} />);

    const menu = screen.queryByRole('menu');
    expect(menu).toBeNull();
  });

  test('should call onOpenChange when the menu is opened', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    const { getByRole } = render(<Dropdown onOpenChange={onOpenChange} trigger={<button>Open me</button>} />);

    const trigger = getByRole('button');
    await user.click(trigger);

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  test('should apply the correct size class name', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Dropdown size='small' trigger={<button>Open me</button>} />);

    const trigger = getByRole('button');
    await user.click(trigger);

    const menu = screen.queryByRole('menu');
    expect(menu).toHaveClass('p-small');
  });

  test('should apply a custom class name', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Dropdown className='custom-class' trigger={<button>Open me</button>} />);

    const trigger = getByRole('button');
    await user.click(trigger);

    const menu = screen.queryByRole('menu');
    expect(menu).toHaveClass('custom-class');
  });

  test('should pass down the ref', async () => {
    const user = userEvent.setup();
    const ref = createRef<HTMLDivElement>();
    const { getByRole } = render(<Dropdown ref={ref} trigger={<button>Open me</button>} />);

    const trigger = getByRole('button');
    await user.click(trigger);

    const menu = screen.queryByRole('menu');
    expect(menu).toBe(ref.current);
  });
});
