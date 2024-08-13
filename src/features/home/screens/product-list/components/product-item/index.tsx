import {Pressable, View} from 'react-native';
import React from 'react';
import {Product} from '@home/api/types';
import {StyleSheet} from 'react-native';
import {AppImage, AppText, AppTextCurrency} from '@/components';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, RADIUS, SHADOWS, SPACING} from '@/styles';
import {useAppNavigation} from '@/navigation';

export const ProductItem = (props: Product) => {
  const {
    title,
    image,
    rating: {rate},
    price,
  } = props;

  const navigation = useAppNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('productDetails', {product: props})}>
      <AppImage uri={image} style={styles.image} />
      <View style={styles.content}>
        <AppText text={title} numberOfLines={2} style={styles.title} />
        <View style={styles.star}>
          <Icon
            name="star"
            color={COLORS.mySin}
            size={14}
            style={styles.starIcon}
          />
          <AppText
            text={rate.toString()}
            color="silverChalice"
            preset="arial14"
          />
        </View>
      </View>
      <AppTextCurrency
        preset="arialBold16"
        amount={price}
        style={styles.price}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    marginBottom: SPACING.x16,
    marginHorizontal: SPACING.x8,
    borderRadius: RADIUS.x8,
    borderWidth: 1,
    borderColor: COLORS.athensGray,
    padding: SPACING.x8,
    ...SHADOWS.one,
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: SPACING.x4,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: SPACING.x8,
  },
  image: {
    aspectRatio: 1 / 1,
    backgroundColor: COLORS.white,
  },
  title: {
    flex: 1,
    marginRight: SPACING.x8,
    textAlign: 'left',
  },
  price: {
    textAlign: 'left',
  },
});
