import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

import {translate} from '@/i18n';

import {AppTextPresets, presets} from './app-text.presets';
import {Color, COLORS} from '@/styles';

export interface AppTextProps extends TextProps {
  translateOptions?: I18n.TranslateOptions;

  translateKey?: string;

  style?: StyleProp<TextStyle>;

  preset?: AppTextPresets;

  color?: Color;

  text?: string;
}

export const AppText = (props: AppTextProps) => {
  const {
    color: colorName = 'black',
    style: styleOverride,
    preset = 'default',
    translateOptions,
    text,
    translateKey,
    ...restProps
  } = props;

  const textContent = translateKey
    ? translate(translateKey, translateOptions)
    : text;

  const content = textContent || text;

  const style = [presets[preset], {color: COLORS[colorName]}, styleOverride];

  return (
    <Text {...restProps} style={style}>
      {content}
    </Text>
  );
};
