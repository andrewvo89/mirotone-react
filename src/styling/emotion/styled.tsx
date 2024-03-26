import styled from '@emotion/styled';

import { Text, tokens } from '../..';
import DocBlockContainer from '../../storybook/DocBlockContainer';

const StyledText = styled(Text)({
  color: tokens.color.blue[600],
  fontWeight: 'bold',
  textDecoration: 'underline',
  fontSize: '1.875rem',
  lineHeight: '2.25rem',
});

export default function App() {
  return (
    <DocBlockContainer>
      <StyledText>Emotion styled component</StyledText>
    </DocBlockContainer>
  );
}
