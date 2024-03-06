import { tokens } from '..';
import DocBlockContainer from './DocBlockContainer';

const spacePixelMap: Record<keyof typeof tokens.borderRadius, string> = {
  small: '2px',
  medium: '4px',
  large: '8px',
  xlarge: '16px',
  xxlarge: '48px',
  circle: '50%',
};

export default function Spacing() {
  return (
    <DocBlockContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {Object.entries(spacePixelMap).map(([size, val]) => {
          return (
            <div key={size} style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', alignItems: 'center' }}>
              <span style={{ gridColumn: '1/7' }}>{size}</span>
              <span style={{ gridColumn: '7/8' }}>{val}</span>
              <div
                style={{
                  gridColumn: '8/10',
                  borderRadius: val,
                  backgroundColor: tokens.colors.indigo[400],
                  display: 'block',
                  height: '48px',
                }}
              />
            </div>
          );
        })}
      </div>
    </DocBlockContainer>
  );
}
