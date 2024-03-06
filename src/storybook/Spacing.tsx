import { tokens } from '..';
import DocBlockContainer from './DocBlockContainer';

const spacePixelMap: Record<keyof typeof tokens.space, string> = {
  xxxsmall: '2px',
  xxsmall: '4px',
  xsmall: '8px',
  small: '16px',
  medium: '24px',
  large: '32px',
  xlarge: '40px',
  xxlarge: '48px',
  xxxlarge: '62px',
};

export default function Spacing() {
  return (
    <DocBlockContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {Object.entries(spacePixelMap).map(([size, pixels]) => {
          return (
            <div key={size} style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', alignItems: 'center' }}>
              <span style={{ gridColumn: '1/7' }}>{size}</span>
              <span style={{ gridColumn: '7/8' }}>{pixels}</span>
              <div
                style={{
                  gridColumn: '8/13',
                  border: `1px solid ${tokens.color.indigo[700]}`,
                  borderTop: 'none',
                  borderBottom: 'none',
                  backgroundColor: tokens.color.indigo[400],
                  display: 'block',
                  height: '24px',
                  width: pixels,
                }}
              />
            </div>
          );
        })}
      </div>
    </DocBlockContainer>
  );
}
