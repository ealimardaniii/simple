import {TextStyle} from 'react-native';

import {FONT_FAMILY, FONT_SIZE} from '@/styles';

const BASE: TextStyle = {
  fontFamily: 'arial',
  fontSize: FONT_SIZE.x16,
  includeFontPadding: false,
  letterSpacing: 0,
  textAlign: 'right',
  textAlignVertical: 'center',
};

export const presets = {
  default: BASE,

  decondor28: {
    ...BASE,
    fontSize: FONT_SIZE.x28,
    fontFamily: FONT_FAMILY.decondorBold,
  } as TextStyle,
  arial12: {
    ...BASE,
    fontSize: FONT_SIZE.x12,
  } as TextStyle,
  arial14: {
    ...BASE,
    fontSize: FONT_SIZE.x14,
  } as TextStyle,
  arial16: {
    ...BASE,
    fontSize: FONT_SIZE.x16,
  } as TextStyle,
  arial20: {
    ...BASE,
    fontSize: FONT_SIZE.x20,
  } as TextStyle,
  arial24: {
    ...BASE,
    fontSize: FONT_SIZE.x24,
  } as TextStyle,
  arialBold16: {
    ...BASE,
    fontSize: FONT_SIZE.x16,
    fontWeight: 'bold',
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type AppTextPresets = keyof typeof presets;
