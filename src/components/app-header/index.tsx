import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppText} from '../app-text';
import {COLORS, RADIUS, SHADOWS, SPACING} from '@/styles';
import {useAppNavigation} from '@/navigation';

export type AppHeaderProps = {
  hasBack?: boolean;

  titleTranslateKey: string;
};

export const AppHeader = ({titleTranslateKey, hasBack}: AppHeaderProps) => {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      {hasBack && (
        <Pressable onPress={() => navigation.pop()} style={styles.back}>
          <Icon name="arrow-back" size={24} />
        </Pressable>
      )}
      <AppText
        preset="arial20"
        translateKey={titleTranslateKey}
        style={styles.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: SPACING.x16,
  },
  title: {
    alignSelf: 'center',
    position: 'absolute',
    left: SPACING.none,
    right: SPACING.none,
    textAlign: 'center',
  },
  back: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.rounded,
    height: 40,
    width: 40,
    ...SHADOWS.four,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});
