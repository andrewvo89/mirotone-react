import { PropsWithChildren } from 'react';

import { tokens } from '../';

export default function GridItemText(props: PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        height: '74px',
        width: '100%',
        backgroundColor: tokens.color.indigo[200],
        borderRadius: tokens.borderRadius.medium,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <code>{props.children}</code>
    </div>
  );
}
