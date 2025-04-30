import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DeliveryOptions: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Opsi Pengiriman</Text>
    <Text style={styles.option}>Standar (3-5 hari kerja)</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  option: {
    marginTop: 8,
    fontSize: 16,
    color: '#6E6E73',
  },
});

export default DeliveryOptions;
