import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const FooterPayment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metode Pembayaran</Text>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb8d0a152e07d677b429eae272d03b5cf7c0a435',
        }}
        style={styles.image}
        accessibilityLabel="Metode Pembayaran"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#121212',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 40,
    resizeMode: 'contain',
  },
});

export default FooterPayment;
