import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {RootStackParamList} from './types';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Splash} from '../features/auth/screens';

const RootStack = createStackNavigator<RootStackParamList>();

export const SCREEN_OPTIONS = {
  headerShown: false,
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};

export const AppNavigationContainer = () => {
  return (
    <RootStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <RootStack.Screen
        name="splash"
        component={Splash}
        options={TransitionPresets.SlideFromRightIOS}
      />
    </RootStack.Navigator>
  );
};

export function useAppNavigation<T extends keyof RootStackParamList>() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList, T>>();
}
