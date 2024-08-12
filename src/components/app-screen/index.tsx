import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS, SPACING} from '@/styles';

type AppScreenProps = {
  scrollable?: boolean;

  children: ReactNode;

  contentContainerStyle?: StyleProp<ViewStyle>;

  style?: StyleProp<ViewStyle>;
};

export const AppScreen = ({
  scrollable,
  children,
  style,
  contentContainerStyle,
}: AppScreenProps) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar backgroundColor={COLORS.white} />
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
    padding: SPACING.x16,
  },
});
