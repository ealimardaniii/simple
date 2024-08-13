import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONT_SIZE, RADIUS, SPACING} from '@/styles';

type SearchBarProps = {
  text: string;

  onChangeText: (text: string) => void;
};

export const SearchBar = ({text, onChangeText}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Icon size={24} name="search" style={styles.icon} />
      <TextInput
        value={text}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RADIUS.x8,
    borderColor: COLORS.athensGray,
    borderWidth: 1,
    marginHorizontal: SPACING.x16,
    backgroundColor: COLORS.white,
    marginTop: SPACING.x16,
  },
  icon: {
    marginHorizontal: SPACING.x12,
  },
  input: {
    fontSize: FONT_SIZE.x16,
    flex: 1,
  },
});
