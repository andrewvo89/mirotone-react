import { ComponentProps, PropsWithChildren } from 'react';

export type TabProps = PropsWithChildren<{
  id: string;
  badge?: string;
}>;

export type TabsProps = Omit<ComponentProps<'div'>, 'children' | 'onClick'> & {
  activeIndex?: number;
  onClick?: (index: number) => void;
  tabs: TabProps[];
};
