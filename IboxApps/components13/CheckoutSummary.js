import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const CheckoutSummary = () => {
  return (
    <View style={styles.container}>
      {/* Garansi Pengiriman */}
      <View style={styles.shippingBox}>
        <View style={styles.rowBetween}>
          <Text style={styles.shippingType}>Reguler</Text>
          <Text style={styles.shippingFee}>Rp25.000</Text>
        </View>
        <Text style={styles.guaranteeText}>
          <Text style={styles.linkText}>Garansi tiba: 24 - 28 Mar</Text>
        </Text>
        <Text style={styles.descText}>
          Voucher s/d Rp10.000 jika pesanan belum tiba 28 Mar 2025
        </Text>
      </View>

      {/* Total dan Voucher */}
      <View style={styles.rowBetween}>
        <Text style={styles.totalLabel}>Total 1 Produk</Text>
        <Text style={styles.totalPrice}>Rp11.499.000</Text>
      </View>

      <View style={styles.rowBetween}>
        <View style={styles.voucherRow}>
          <Image
            source={require('../../assets/Ikon/Icon23.png')}
            style={styles.voucherIcon}
          />
          <Text style={styles.voucherLabel}>Voucher</Text>
        </View>
        <Text style={styles.discount}>-Rp599.000</Text>
      </View>

      {/* Metode Pembayaran */}
      <View style={styles.rowBetween}>
        <Text style={styles.paymentLabel}>Metode Pembayaran</Text>
        <TouchableOpacity>
          <Text style={styles.paymentLink}>Pilih Metode Pembayaran</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  shippingBox: {
    backgroundColor: '#F0F7FF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#0071E7',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  shippingType: {
    fontWeight: '700',
    fontSize: 15,
  },
  shippingFee: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  guaranteeText: {
    fontSize: 14,
    marginBottom: 4,
  },
  linkText: {
    color: '#0071E7',
    fontWeight: '600',
  },
  descText: {
    fontSize: 12,
    color: '#555',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: '700',
  },
  voucherRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voucherIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
    resizeMode: 'contain',
  },
  voucherLabel: {
    fontSize: 15,
    fontWeight: '500',
  },
  discount: {
    color: '#CC3D3D',
    fontWeight: '700',
    backgroundColor: '#F9D9D9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  paymentLabel: {
    fontSize: 15,
    fontWeight: '500',
  },
  paymentLink: {
    color: '#0071E7',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default CheckoutSummary;
