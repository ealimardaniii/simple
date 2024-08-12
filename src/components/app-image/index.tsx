import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

export interface AppImageProps
  extends Omit<FastImageProps, 'source' | 'defaultSource'> {
  uri: string;
}

export const AppImage = ({uri, ...restProps}: AppImageProps) => {
  return (
    <FastImage
      source={{
        uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
      {...restProps}
    />
  );
};
