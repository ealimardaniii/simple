import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {RootStackParamList} from './types';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Splash} from '@/features/auth/screens';
import {ProductDetails, ProductList} from '@/features/home/screens';

const RootStack = createStackNavigator<RootStackParamList>();

export const SCREEN_OPTIONS = {
  headerShown: false,
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};

export const AppNavigationContainer = () => {
  return (
    <RootStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <RootStack.Screen name="splash" component={Splash} />
      <RootStack.Screen name="productList" component={ProductList} />
      <RootStack.Screen name="productDetails" component={ProductDetails} />
    </RootStack.Navigator>
  );
};

export function useAppNavigation<T extends keyof RootStackParamList>() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList, T>>();
}
