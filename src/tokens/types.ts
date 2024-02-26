import { borderRadius } from './border-radius';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typoography';

export type BorderRadius = (typeof borderRadius)[keyof typeof borderRadius];

export type Blue = (typeof colors)['blue'][keyof (typeof colors)['blue']];

export type Indigo = (typeof colors)['indigo'][keyof (typeof colors)['indigo']];

export type IndigoAlpha = (typeof colors)['indigoAlpha'][keyof (typeof colors)['indigoAlpha']];

export type Green = (typeof colors)['green'][keyof (typeof colors)['green']];

export type Black = (typeof colors)['black'];

export type BlackAlpha = (typeof colors)['blackAlpha'][keyof (typeof colors)['blackAlpha']];

export type Red = (typeof colors)['red'][keyof (typeof colors)['red']];

export type Colors = Blue | Indigo | IndigoAlpha | Green | Black | BlackAlpha | Red;

export type FontWeight = (typeof typography)['fontWeight'][keyof (typeof typography)['fontWeight']];

export type FontSize = (typeof typography)['fontSize'][keyof (typeof typography)['fontSize']];

export type Font = (typeof typography)['font'][keyof (typeof typography)['font']];

export type Spacing = (typeof spacing)[keyof typeof spacing];
