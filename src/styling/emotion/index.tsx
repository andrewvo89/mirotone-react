import { css } from '@emotion/css';
import styled from '@emotion/styled';

import { Text, tokens } from '../..';
import DocBlockContainer from '../../storybook/DocBlockContainer';

export function CSSApp() {
  return (
    <DocBlockContainer>
      <Text
        className={css`
          && {
            color: ${tokens.color.blue[600]};
            font-weight: bold;
            text-decoration: underline;
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        `}
      >
        Emotion css prop
      </Text>
    </DocBlockContainer>
  );
}

const StyledText = styled(Text)({
  color: tokens.color.blue[600],
  fontWeight: 'bold',
  textDecoration: 'underline',
  fontSize: '1.875rem',
  lineHeight: '2.25rem',
});

export function StyledApp() {
  return (
    <DocBlockContainer>
      <StyledText>Emotion styled component</StyledText>
    </DocBlockContainer>
  );
}
