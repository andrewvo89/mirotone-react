import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { TabsProps } from './types';
import { getActiveClassName } from './utils';

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { className, tabs, activeIndex, onClick, ...rest } = props;

  const classNames = ['tabs', className].filter(isNonEmptyString);

  return (
    <div {...rest} ref={ref} className={classNames.join(' ')}>
      <div className='tabs-header-list'>
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;
          const classNames = ['tab', getActiveClassName(isActive), className].filter(isNonEmptyString);
          return (
            <div key={tab.id} className={classNames.join(' ')} tabIndex={0} onClick={() => onClick?.(index)}>
              <div className='tab-text tab-badge' data-badge={tab.badge}>
                {tab.children}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs;
