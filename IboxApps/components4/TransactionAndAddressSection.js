import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TransactionAndAddressSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>Transaksi berlangsung</Text>
        <Text style={styles.subText}>Tidak ada transaksi berlangsung.</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>Alamat</Text>
        <Text style={styles.subText}>Belum ada alamat tersimpan.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  block: {
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: '#444',
  },
});

export default TransactionAndAddressSection;
