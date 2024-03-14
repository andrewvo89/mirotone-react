import { PropsWithChildren } from 'react';

import { Flex, tokens } from '../';

export default function GridItemText(props: PropsWithChildren) {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      style={{
        height: '74px',
        width: '100%',
        backgroundColor: tokens.color.indigo[200],
        borderRadius: tokens.borderRadius.medium,
      }}
    >
      <code>{props.children}</code>
    </Flex>
  );
}
