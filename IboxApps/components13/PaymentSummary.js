import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PaymentSummary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Rincian Pembayaran</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal untuk Produk</Text>
        <Text style={styles.value}>Rp11.524.000</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal Pengiriman</Text>
        <Text style={styles.value}>Rp20.000</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Voucher Diskon</Text>
        <Text style={[styles.value, styles.discount]}>-Rp599.000</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.labelBold}>Total Pembayaran</Text>
        <Text style={[styles.valueBold, styles.underline]}>Rp10.925.000</Text>
      </View>

      <Text style={styles.terms}>
        Dengan melanjutkan, Saya setuju dengan Syarat dan Ketentuan yang
        berlaku. <Text style={styles.link}>Syarat dan ketentuan</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  labelBold: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  value: {
    fontSize: 14,
    color: '#000',
  },
  valueBold: {
    fontSize: 14,
    fontWeight: '700',
  },
  discount: {
    color: '#D34040',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  terms: {
    fontSize: 12,
    color: '#888',
    marginTop: 16,
  },
  link: {
    color: '#2F74F8',
  },
});

export default PaymentSummary;
