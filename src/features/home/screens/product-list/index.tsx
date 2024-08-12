import {FlatList, ListRenderItemInfo} from 'react-native';
import React, {useCallback} from 'react';
import {AppScreen} from '@/components';
import {ProductItem} from './components';
import {Product} from '@home/api/types';
import {useProductList} from '@home/api/use-api';

export const ProductList = () => {
  const {data} = useProductList();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Product>) => <ProductItem {...item} />,
    [],
  );

  return (
    <AppScreen>
      <FlatList data={data} renderItem={renderItem} />
    </AppScreen>
  );
};
