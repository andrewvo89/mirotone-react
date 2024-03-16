import { borderRadius } from './border-radius';
import { color } from './color';
import { space } from './space';
import { typography } from './typoography';

export type BorderRadius = (typeof borderRadius)[keyof typeof borderRadius];

export type Blue = (typeof color)['blue'][keyof (typeof color)['blue']];

export type Indigo = (typeof color)['indigo'][keyof (typeof color)['indigo']];

export type IndigoAlpha = (typeof color)['indigoAlpha'][keyof (typeof color)['indigoAlpha']];

export type Green = (typeof color)['green'][keyof (typeof color)['green']];

export type Black = (typeof color)['black'];

export type BlackAlpha = (typeof color)['blackAlpha'][keyof (typeof color)['blackAlpha']];

export type Red = (typeof color)['red'][keyof (typeof color)['red']];

export type Yellow = (typeof color)['yellow'][keyof (typeof color)['yellow']];

export type White = (typeof color)['white'];

export type WhiteAlpha = (typeof color)['whiteAlpha'][keyof (typeof color)['whiteAlpha']];

export type PrimaryText = (typeof color)['primaryText'];

export type PrimaryActionColor = (typeof color)['primaryActionColor'];

export type SecondaryText = (typeof color)['secondaryText'];

export type Colors =
  | Blue
  | Indigo
  | IndigoAlpha
  | Green
  | Black
  | BlackAlpha
  | Red
  | Yellow
  | White
  | WhiteAlpha
  | PrimaryText
  | PrimaryActionColor
  | SecondaryText;

export type FontWeight = (typeof typography)['fontWeight'][keyof (typeof typography)['fontWeight']];

export type FontSize = (typeof typography)['fontSize'][keyof (typeof typography)['fontSize']];

export type Font = (typeof typography)['font'][keyof (typeof typography)['font']];

export type Spacing = (typeof space)[keyof typeof space];
