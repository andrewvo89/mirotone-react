import { Text } from '../..';
import DocBlockContainer from '../../storybook/DocBlockContainer';
import styles from './index.module.css';

export default function App() {
  return (
    <DocBlockContainer>
      <Text className={styles.text}>CSS text</Text>
    </DocBlockContainer>
  );
}
