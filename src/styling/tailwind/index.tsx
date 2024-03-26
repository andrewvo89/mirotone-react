import './index.css';

import { Text } from '../..';
import DocBlockContainer from '../../storybook/DocBlockContainer';

export default function App() {
  return (
    <DocBlockContainer>
      <Text className='text-3xl font-bold underline text-blue-500'>Tailwind text</Text>
    </DocBlockContainer>
  );
}
