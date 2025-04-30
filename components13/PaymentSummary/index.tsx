import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PaymentSummary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ringkasan Pembayaran</Text>
      <View style={styles.row}>
        <Text>Total Produk</Text>
        <Text>Rp27.999.000</Text>
      </View>
      <View style={styles.row}>
        <Text>Ongkos Kirim</Text>
        <Text>Gratis</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.total}>Total Bayar</Text>
        <Text style={styles.total}>Rp27.999.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  total: {
    fontWeight: '700',
  },
});

export default PaymentSummary;
