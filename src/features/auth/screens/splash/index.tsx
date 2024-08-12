import {Animated, Easing, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {AppScreen, AppText} from '@/components';
import {COLORS, RADIUS, SPACING} from '@/styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/navigation';

const SMALL_CIRCLE_SIZE = 150;
const LARGE_CIRCLE_SIZE = 300;

const ANIMATION_DURATION = 1_000;

type Props = NativeStackScreenProps<RootStackParamList, 'splash'>;

export const Splash = ({navigation}: Props) => {
  const movement = useRef(new Animated.Value(0)).current;

  const runAnimations = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(movement, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(movement, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    runAnimations();
    const timer = setTimeout(
      () => navigation.navigate('productList'),
      ANIMATION_DURATION * 2,
    );

    return () => clearTimeout(timer);
  }, []);

  const transformInterpolate = {
    transform: [
      {
        scale: movement.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
  };

  return (
    <AppScreen style={styles.content}>
      <Animated.View
        style={[styles.circle, styles.smallCircle, transformInterpolate]}
      />
      <View style={styles.title}>
        <Animated.View style={[styles.titleText]}>
          <AppText preset="decondor28" color="white" text="f" />
        </Animated.View>
        <AppText preset="decondor28" translateKey="splash.title" />
      </View>
      <Animated.View
        style={[styles.circle, styles.largeCircle, transformInterpolate]}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    borderRadius: RADIUS.rounded,
    backgroundColor: COLORS.shingleFawn,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.x8,
  },
  circle: {
    borderWidth: 1,
    borderColor: COLORS.athensGray,
    borderRadius: RADIUS.rounded,
    position: 'absolute',
  },
  smallCircle: {
    width: SMALL_CIRCLE_SIZE,
    height: SMALL_CIRCLE_SIZE,
    right: -SMALL_CIRCLE_SIZE / 2,
    top: -(StatusBar.currentHeight ?? 0),
  },
  largeCircle: {
    width: LARGE_CIRCLE_SIZE,
    height: LARGE_CIRCLE_SIZE,
    bottom: -LARGE_CIRCLE_SIZE / 3,
    left: -LARGE_CIRCLE_SIZE / 3,
  },
});
