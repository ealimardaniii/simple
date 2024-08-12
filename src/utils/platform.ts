import {translate} from '@/i18n';
import {NetInfoState, fetch} from '@react-native-community/netinfo';
import {ToastAndroid} from 'react-native';

const isOnline = () => {
  return fetch().then((stats: NetInfoState) => stats.isConnected);
};

export const withInternetCheck = async (
  fn: (...args: (() => void)[]) => any,
) => {
  if (await isOnline()) {
    return fn();
  } else {
    ToastAndroid.show(translate('common.offlineToast'), 2_000);
    return Promise.reject();
  }
};
