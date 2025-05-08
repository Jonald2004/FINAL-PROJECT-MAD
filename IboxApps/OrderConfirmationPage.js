import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrderConfirmationPage = ({route}) => {
  const {productName, productPrice, discount, totalPrice} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesanan Anda</Text>

      <Text style={styles.detailText}>Produk: {productName}</Text>
      <Text style={styles.detailText}>Harga: Rp {productPrice}</Text>
      {discount && (
        <Text style={styles.detailText}>Diskon: -Rp {discount}</Text>
      )}
      <Text style={styles.detailText}>Total Pembayaran: Rp {totalPrice}</Text>

      <Text style={styles.termsText}>
        Dengan melanjutkan, Anda setuju dengan Syarat dan Ketentuan.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
  termsText: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
  },
});

export default OrderConfirmationPage;
