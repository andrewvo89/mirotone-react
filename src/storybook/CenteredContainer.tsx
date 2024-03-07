import { PropsWithChildren } from 'react';

export default function CenterContainer(props: PropsWithChildren) {
  return (
    <div
      style={{
        height: '500px',
        padding: 'var(--space-small)',
        width: '338px',
        display: 'block',
        border: '2px solid var(--indigo300)',
        borderRadius: 'var(--border-radius-medium)',
        margin: 'var(--space-small) auto',
        background: 'var(--white)',
      }}
    >
      {props.children}
    </div>
  );
}
