import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BundlePromo: React.FC = () => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.promoTitle}>Promo bundling</Text>
      <Text style={styles.promoDetails}>
        APP 20W USB-C POWER ADAPTER{'\n'}
        Jumlah: 1
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingHorizontal: 12,
  },
  promoTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  promoDetails: {
    fontSize: 15,
    color: '#6E6E73',
    marginTop: 8,
  },
});

export default BundlePromo;
