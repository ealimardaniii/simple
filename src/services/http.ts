import {translate} from '@/i18n';
import {withInternetCheck} from '@/utils/platform';
import {ToastAndroid} from 'react-native';

export const API_BASE_URL = 'https://fakestoreapi.com';

interface RequestOptions {
  successToast?: string;
  showErrorToast?: boolean;
}

const DEFAULT_REQUEST_OPTIONS = {
  showErrorToast: true,
};

const normalizeRequestOptions = (options?: RequestOptions) => ({
  ...DEFAULT_REQUEST_OPTIONS,
  ...options,
});

const onSuccess = (body: unknown, options: RequestOptions) => {
  if (options.successToast) {
    ToastAndroid.show(options.successToast, 2_000);
  }

  return body;
};

const onError = (error: Response, options: RequestOptions) => {
  if (options.showErrorToast) {
    ToastAndroid.show(translate('common.unknownErrorToast'), 2_000);
  }
  throw error;
};

const makeRequest = async (
  path: string,
  info: Omit<RequestInit, 'url' | 'headers'>,
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${path}`, {
      ...info,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    return Promise.reject(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const get = (path: string, options?: RequestOptions): Promise<any> => {
  const normalizedOptions = normalizeRequestOptions(options);

  return withInternetCheck(() =>
    makeRequest(path, {
      method: 'GET',
    })
      .then(res => onSuccess(res, normalizedOptions))
      .catch(err => onError(err, normalizedOptions)),
  );
};
