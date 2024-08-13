import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {AppScreen} from '@/components';
import {ProductItem} from './components';
import {Product} from '@home/api/types';
import {useProductList} from '@home/api/use-api';
import {SPACING} from '@/styles';

export const ProductList = () => {
  const {data, refetch, isFetching} = useProductList();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Product>) => <ProductItem {...item} />,
    [],
  );

  return (
    <AppScreen>
      <FlatList
        onRefresh={refetch}
        refreshing={isFetching}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.content}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: SPACING.x8,
    paddingBottom: SPACING.none,
    paddingTop: SPACING.x16,
  },
});
