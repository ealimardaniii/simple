import {useQuery, UseQueryOptions} from 'react-query';
import {ProductListResponse} from './types';
import {getProductList} from './index';

export const HOME_QUERY_KEYS = {
  productList: 'product-list',
};

export const useProductList = (
  options?: UseQueryOptions<ProductListResponse>,
) => {
  return useQuery({
    queryKey: [HOME_QUERY_KEYS.productList],
    queryFn: () => getProductList(),
    ...options,
  });
};
