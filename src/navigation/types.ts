import {Product} from '@/features/home/api/types';

export type RootStackParamList = {
  splash: undefined;

  productList: undefined;

  productDetails: {product: Product};
};
