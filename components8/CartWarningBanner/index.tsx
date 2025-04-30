import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const CartWarningBanner = () => {
  return (
    <>
      <Image
        accessibilityLabel="Warning banner image"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83c559b64e8083bf5049fe41be31b32f5a3bde73?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
        }}
        style={styles.bannerImage}
      />
      <View style={styles.warningContainer}>
        <Text style={styles.warningText}>
          Waspada terhadap upaya penipuan yang mengatasnamakan iBox. Info
          selengkapnya, <Text style={styles.linkText}>klik di sini</Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    aspectRatio: 12.5,
    width: '100%',
    resizeMode: 'contain',
  },
  warningContainer: {
    width: '100%',
    paddingHorizontal: 70,
    paddingVertical: 15,
  },
  warningText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
  },
  linkText: {
    color: '#C6C5C5',
  },
});
export default CartWarningBanner;
