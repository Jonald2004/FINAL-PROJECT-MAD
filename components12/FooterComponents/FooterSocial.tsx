import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const socialIcons = [
  'https://cdn.builder.io/api/v1/image/assets/TEMP/c355d1dfbabbea6d6b588a479e20567ed68ef503',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/13c2d54d52c47477759a2e15adc9e6de425e01bf',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/90ca4d57f4c0cada07b81e2ddc57101e22a7a506',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/02f30ae4378dad89526041d7eff9dcb524348986',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/88179e19c7c485013627965132ccee1de9c61aec',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/c5034602f6b2607580efb264e65b58f4b9224eb2',
];

const FooterSocial = () => {
  return (
    <View style={styles.container}>
      {socialIcons.map((uri, index) => (
        <Image key={index} source={{uri}} style={styles.icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 40,
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});

export default FooterSocial;
