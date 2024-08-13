import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AppImage, AppScreen, AppText, AppTextCurrency} from '@/components';
import {RootStackParamList} from '@/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {COLORS, SPACING} from '@/styles';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<RootStackParamList, 'productDetails'>;

export const ProductDetails = ({
  route: {
    params: {
      product: {
        image,
        price,
        rating: {rate},
        title,
        description,
      },
    },
  },
}: Props) => {
  return (
    <AppScreen
      headerProps={{
        hasBack: true,
        titleTranslateKey: 'productDetails.title',
      }}>
      <AppImage uri={image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <AppTextCurrency preset="arial20" amount={price} />
          <View style={styles.star}>
            <Icon
              name="star"
              color={COLORS.mySin}
              size={24}
              style={styles.starIcon}
            />
            <AppText text={rate.toString()} preset="arial20" />
          </View>
        </View>
        <AppText preset="arialBold20" text={title} style={styles.title} />
        <AppText
          text={description}
          preset="arial14"
          color="silverChalice"
          style={styles.details}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    margin: SPACING.x16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    padding: SPACING.x16,
  },
  starIcon: {
    marginRight: SPACING.x4,
  },
  title: {
    textAlign: 'left',
    marginTop: SPACING.x12,
  },
  details: {
    textAlign: 'left',
    marginTop: SPACING.x12,
  },
});
