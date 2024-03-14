import { Flex } from '..';

export default function Skeleton() {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      style={{
        width: '240px',
        height: '110px',
        backgroundColor: 'var(--indigo200)',
        borderRadius: 'var(--border-radius-medium)',
      }}
    />
  );
}
