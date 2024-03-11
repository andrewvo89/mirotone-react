import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropdownMenu, DropdownMenuItem } from '../../';

describe('DropdownMenuItem', () => {
  afterEach(() => {
    vi.resetAllMocks();
    cleanup();
  });

  test('should render correctly', async () => {
    const user = userEvent.setup();

    const { getByRole, queryByRole } = render(
      <DropdownMenu trigger={<button>Open me</button>}>
        <DropdownMenuItem />
      </DropdownMenu>,
    );

    const trigger = getByRole('button');
    await user.click(trigger);

    const menuItem = queryByRole('menuitem');
    expect(menuItem).not.toBeNull();
  });

  test('should call onSelect when clicked', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    const { getByRole } = render(
      <DropdownMenu trigger={<button>Open me</button>}>
        <DropdownMenuItem onSelect={onSelect} />
      </DropdownMenu>,
    );

    const trigger = getByRole('button');
    await user.click(trigger);

    const menuItem = getByRole('menuitem');
    await user.click(menuItem);

    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  test('should not close menu when disableCloseOnSelect is true', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    const { getByRole, queryByRole } = render(
      <DropdownMenu trigger={<button>Open me</button>}>
        <DropdownMenuItem disableCloseOnSelect onSelect={onSelect} />
      </DropdownMenu>,
    );

    const trigger = getByRole('button');
    await user.click(trigger);

    const menuItem = getByRole('menuitem');
    await user.click(menuItem);

    const menu = queryByRole('menu');
    expect(menu).not.toBeNull();
  });

  test('should close menu when disableCloseOnSelect is false', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    const { getByRole, queryByRole } = render(
      <DropdownMenu trigger={<button>Open me</button>}>
        <DropdownMenuItem onSelect={onSelect} />
      </DropdownMenu>,
    );

    const trigger = getByRole('button');
    await user.click(trigger);

    const menuItem = getByRole('menuitem');
    await user.click(menuItem);

    const menu = queryByRole('menu');
    expect(menu).toBeNull();
  });

  test('should apply custom class name', async () => {
    const user = userEvent.setup();

    const { getByRole } = render(
      <DropdownMenu trigger={<button>Open me</button>}>
        <DropdownMenuItem className='custom-class' />
      </DropdownMenu>,
    );

    const trigger = getByRole('button');
    await user.click(trigger);

    const menuItem = getByRole('menuitem');
    expect(menuItem).toHaveClass('custom-class');
  });

  test('should pass ref down', async () => {
    const user = userEvent.setup();
    const ref = createRef<HTMLDivElement>();

    const { getByRole } = render(
      <DropdownMenu trigger={<button>Open me</button>}>
        <DropdownMenuItem ref={ref} />
      </DropdownMenu>,
    );

    const trigger = getByRole('button');
    await user.click(trigger);

    const menuItem = getByRole('menuitem');
    expect(menuItem).toBe(ref.current);
  });
});
