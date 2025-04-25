import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const LogoSection: React.FC = () => {
  return (
    <Image
      source={{
        uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dc92a76e16bd44227234840488552d0d1e7cdb41?placeholderIfAbsent=true&apiKey=7eb232b930d84f9dbc8482e438a7b67a',
      }}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 98,
    aspectRatio: 5.15,
  },
});
