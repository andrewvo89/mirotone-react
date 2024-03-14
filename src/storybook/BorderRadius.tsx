import { Flex, tokens } from '..';
import DocBlockContainer from './DocBlockContainer';

const borderRadiusPixelMap: Record<keyof typeof tokens.borderRadius, string> = {
  small: '2px',
  medium: '4px',
  large: '8px',
  xlarge: '16px',
  xxlarge: '48px',
  circle: '50%',
};

export default function BorderRadius() {
  return (
    <DocBlockContainer>
      <Flex flexDirection='column' gap={tokens.space.xsmall}>
        {Object.entries(borderRadiusPixelMap).map(([size, val]) => {
          return (
            <div key={size} style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', alignItems: 'center' }}>
              <span style={{ gridColumn: '1/7' }}>{size}</span>
              <span style={{ gridColumn: '7/8' }}>{val}</span>
              <div
                style={{
                  gridColumn: '8/10',
                  borderRadius: val,
                  backgroundColor: tokens.color.indigo[400],
                  display: 'block',
                  height: '48px',
                }}
              />
            </div>
          );
        })}
      </Flex>
    </DocBlockContainer>
  );
}
