import { createRef } from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tooltip from './Tooltip';

describe('Tooltip', () => {
  beforeEach(() => {
    global.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  test('should render the trigger', () => {
    const { queryByRole } = render(<Tooltip trigger={<button>Trigger</button>} />);
    const trigger = queryByRole('button');
    expect(trigger).not.toBeNull();
  });

  test('should render the children content upon hovering the trigger', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Tooltip trigger={<button>Trigger</button>}>Tooltip</Tooltip>);
    const trigger = getByRole('button');

    await user.hover(trigger);

    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeNull());
  });

  test('should set the delayDuration to 1000', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(
      <Tooltip delayDuration={1000} trigger={<button>Trigger</button>}>
        Tooltip
      </Tooltip>,
    );
    const trigger = getByRole('button');

    await user.hover(trigger);

    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeNull());
  });

  test('should close the tooltip after unhover', async () => {
    const user = userEvent.setup();

    const { getByRole, queryByRole, getByText } = render(
      <div>
        <Tooltip trigger={<button>Trigger</button>}>Tooltip</Tooltip>
        <span>Click after hover</span>
      </div>,
    );
    const trigger = getByRole('button');

    expect(screen.queryByRole('tooltip')).toBeNull();

    await user.hover(trigger);
    await waitFor(() => expect(queryByRole('tooltip')).not.toBeNull());

    await user.click(getByText('Click after hover'));
    expect(queryByRole('tooltip')).toBeNull();
  });

  test('should disable closing on unhover', async () => {
    const user = userEvent.setup();

    const { getByRole, queryByRole, getByText } = render(
      <div>
        <Tooltip disableCloseOnOutside trigger={<button>Trigger</button>}>
          Tooltip
        </Tooltip>
        <span>Click after hover</span>
      </div>,
    );
    const trigger = getByRole('button');

    expect(screen.queryByRole('tooltip')).toBeNull();

    await user.hover(trigger);
    await waitFor(() => expect(queryByRole('tooltip')).not.toBeNull());

    await user.click(getByText('Click after hover'));
    expect(screen.queryByRole('tooltip')).not.toBeNull();
  });

  test('should manually set the open prop', () => {
    const open = true;
    render(<Tooltip open={open} trigger={<button>Trigger</button>} />);

    const tooltip = screen.queryByRole('tooltip');
    expect(tooltip).not.toBeNull();
  });

  test('should manually set the open prop to false', () => {
    const open = false;
    render(<Tooltip open={open} trigger={<button>Trigger</button>} />);

    const tooltip = screen.queryByRole('tooltip');
    expect(tooltip).toBeNull();
  });

  test('should trigger onOpenChange on hover', async () => {
    const onOpenChange = vi.fn();
    const user = userEvent.setup();

    const { getByRole, queryByRole } = render(
      <div>
        <Tooltip onOpenChange={onOpenChange} trigger={<button>Trigger</button>}>
          Tooltip
        </Tooltip>
        <span>Click after hover</span>
      </div>,
    );
    const trigger = getByRole('button');
    await user.hover(trigger);
    await waitFor(() => expect(queryByRole('tooltip')).not.toBeNull());
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  test('should set the size to "small"', async () => {
    const user = userEvent.setup();

    const { getByRole, queryByRole, getAllByText } = render(
      <Tooltip size='small' trigger={<button>Trigger</button>}>
        small text
      </Tooltip>,
    );

    const trigger = getByRole('button');
    await user.hover(trigger);

    await waitFor(() => expect(queryByRole('tooltip')).not.toBeNull());
    const smallText = getAllByText('small text');

    expect(smallText.at(0)).toHaveClass('p-small');
  });

  test('should apply a custom class name', async () => {
    const user = userEvent.setup();

    const { getByRole, queryByRole, getAllByText } = render(
      <Tooltip className='custom-class' size='small' trigger={<button>Trigger</button>}>
        small text
      </Tooltip>,
    );

    const trigger = getByRole('button');
    await user.hover(trigger);

    await waitFor(() => expect(queryByRole('tooltip')).not.toBeNull());
    const smallText = getAllByText('small text');

    expect(smallText.at(0)).toHaveClass('custom-class');
  });

  test('should pass the ref', async () => {
    const user = userEvent.setup();
    const ref = createRef<HTMLDivElement>();
    const { getByRole } = render(<Tooltip trigger={<button>Trigger</button>} ref={ref} />);

    const trigger = getByRole('button');
    await user.hover(trigger);

    const tooltip = screen.queryByRole('tooltip');
    expect(tooltip).toBe(ref.current);
  });
});
