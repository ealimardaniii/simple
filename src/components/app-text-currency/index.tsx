import React from 'react';
import {AppText, AppTextProps} from '../app-text';

interface AppTextCurrencyProps extends Omit<AppTextProps, 'text'> {
  amount: number;
}

export const AppTextCurrency = ({
  amount,
  ...restProps
}: AppTextCurrencyProps) => {
  return <AppText text={`$${amount}`} {...restProps} />;
};
