import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tabs } from '../..';
import { TabProps } from './';

const tabs: TabProps[] = [
  { id: '1', badge: '1,000', children: 'Tag' },
  { id: '2', badge: '2,201', children: 'Tag' },
  { id: '3', badge: '2,858', children: 'Tag' },
];

describe('Tabs component', () => {
  afterEach(cleanup);

  test('should render tabs', () => {
    const { container } = render(<Tabs tabs={tabs} />);

    const tab = container.querySelector('.tabs');
    expect(tab).not.toBeNull();

    const tabElements = container.querySelectorAll('.tab');
    expect(tabElements.length).toBe(tabs.length);
  });

  test('should render active tab', () => {
    const { container } = render(<Tabs tabs={tabs} activeIndex={1} />);
    const tabElements = container.querySelectorAll('.tab');
    expect(tabElements[1]).toHaveClass('tab-active');
  });

  test('should render tab badges', () => {
    const { container } = render(<Tabs tabs={tabs} />);
    const badge1 = container.querySelector('[data-badge="1,000"]');
    const badge2 = container.querySelector('[data-badge="2,201"]');
    const badge3 = container.querySelector('[data-badge="2,858"]');
    expect(badge1).not.toBeNull();
    expect(badge2).not.toBeNull();
    expect(badge3).not.toBeNull();
  });

  test('should call onClick when a tab is clicked', async () => {
    const user = userEvent.setup();

    const onClick = vi.fn();
    const { container } = render(<Tabs tabs={tabs} onClick={onClick} />);
    const tabElements = container.querySelectorAll('.tab');

    await user.click(tabElements[2]);
    expect(onClick).toHaveBeenCalledWith(2);
  });

  test('should insert custom class name', () => {
    const { container } = render(<Tabs tabs={tabs} className='custom-tabs' />);
    const tabsElement = container.querySelector('.tabs');
    expect(tabsElement).toHaveClass('custom-tabs');
  });

  test('should include tab badge class name', () => {
    const { container } = render(<Tabs tabs={tabs} className='custom-tabs' />);
    const tabsElement = container.querySelector('.tab-text');
    expect(tabsElement).toHaveClass('tab-badge');
  });

  test('should not include tab badge class name', () => {
    const { container } = render(<Tabs tabs={tabs.map(({ badge, ...rest }) => rest)} className='custom-tabs' />);
    const tabsElement = container.querySelector('.tab-text');
    expect(tabsElement).not.toHaveClass('tab-badge');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Tabs tabs={tabs} ref={ref} />);
    const tabsElement = container.querySelector('.tabs');
    expect(tabsElement).toBe(ref.current);
  });
});
