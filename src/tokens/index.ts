import { borderRadius } from './border-radius';
import { color } from './color';
import { space } from './space';
import { typography } from './typoography';

export const tokens = { color, typography, space, borderRadius } as const;

export * from './types';
