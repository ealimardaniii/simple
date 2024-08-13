import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS} from '@/styles';
import {AppHeader, AppHeaderProps} from '../app-header';

type AppScreenProps = {
  scrollable?: boolean;

  children: ReactNode;

  headerProps?: AppHeaderProps;

  contentContainerStyle?: StyleProp<ViewStyle>;

  style?: StyleProp<ViewStyle>;
};

export const AppScreen = ({
  scrollable,
  children,
  headerProps,
  style,
  contentContainerStyle,
}: AppScreenProps) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar hidden />
      {headerProps && <AppHeader {...headerProps} />}
      {scrollable ? (
        <ScrollView contentContainerStyle={contentContainerStyle}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
