import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {AppScreen} from '@/components';

export const Splash = () => {
  return (
    <AppScreen style={styles.content}>
      <Text>Fasion</Text>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
