import {Text, View} from 'react-native';
import React from 'react';
import {Product} from '@home/api/types';

export const ProductItem = ({title}: Product) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
