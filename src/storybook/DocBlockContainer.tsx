import { PropsWithChildren } from 'react';

export default function DocBlockContainer(props: PropsWithChildren) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        color: '#2E3438',
        border: '1px solid hsla(203, 50%, 30%, 0.15)',
        background: '#FFFFFF',
        fontSize: '13px',
        lineHeight: '19px',
        margin: '25px 0 40px',
        borderRadius: '4px',
        boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
        padding: '20px',
      }}
    >
      {props.children}
    </div>
  );
}
