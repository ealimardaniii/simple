import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import {AppScreen, AppText} from '@/components';
import {ProductItem, SearchBar} from './components';
import {Product} from '@home/api/types';
import {useProductList} from '@home/api/use-api';
import {SPACING} from '@/styles';

export const ProductList = () => {
  const [searchText, setSearchText] = useState('');

  const {data, refetch, isFetching, isLoading} = useProductList({
    select: res => res.filter(p => p.title.includes(searchText)),
  });

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Product>) => <ProductItem {...item} />,
    [],
  );

  return (
    <AppScreen>
      <SearchBar text={searchText} onChangeText={setSearchText} />
      <FlatList
        onRefresh={refetch}
        refreshing={isFetching}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.content}
        ListEmptyComponent={
          isLoading ? null : (
            <AppText style={styles.empty} translateKey="productList.noResult" />
          )
        }
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
  empty: {
    textAlign: 'center',
  },
});
