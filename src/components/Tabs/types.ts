import { ComponentProps, PropsWithChildren } from 'react';

export type TabProps = PropsWithChildren<{
  id: string;
  badge?: string;
}>;

export type TabsProps = Omit<ComponentProps<'div'>, 'children'> & {
  activeIndex?: number;
  setActiveIndex?: (index: number) => void;
  tabs: TabProps[];
};
