import {get} from '@/services/http';
import {ProductListResponse} from './types';
import {HOME_URLS} from './urls';

export const getProductList = (): Promise<ProductListResponse> =>
  get(HOME_URLS.products);
