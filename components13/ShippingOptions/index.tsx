import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ShippingOptions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Jasa Pengiriman</Text>
      <Text style={styles.info}>JNE - Reguler</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: '#6E6E73',
  },
});

export default ShippingOptions;
