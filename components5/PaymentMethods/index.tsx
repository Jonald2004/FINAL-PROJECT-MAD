import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const PaymentMethods: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Metode Pembayaran</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb8d0a152e07d677b429eae272d03b5cf7c0a435?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.paymentImage}
          accessibilityLabel="Payment methods"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Jasa Pengiriman</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3ac33abb17e3eab5d35813aa6ddf5944069999?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.shippingImage}
          accessibilityLabel="Shipping methods"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
    gap: 24,
  },
  section: {
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#121212',
    fontWeight: '600',
    textAlign: 'center',
  },
  paymentImage: {
    width: 412,
    aspectRatio: 1.76,
    resizeMode: 'contain',
  },
  shippingImage: {
    width: 195,
    aspectRatio: 5.59,
    resizeMode: 'contain',
  },
});
export default PaymentMethods;
