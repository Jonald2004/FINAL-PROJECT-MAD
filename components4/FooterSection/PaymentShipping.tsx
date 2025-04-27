import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const PaymentShipping: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Metode Pembayaran</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb8d0a152e07d677b429eae272d03b5cf7c0a435?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.paymentImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Jasa Pengiriman</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3ac33abb17e3eab5d35813aa6ddf5944069999?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.shippingImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignItems: 'center',
  },
  section: {
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
    maxWidth: 412,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#121212',
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  paymentImage: {
    width: '100%',
    height: 234,
  },
  shippingImage: {
    width: 195,
    height: 35,
  },
});

export default PaymentShipping;
