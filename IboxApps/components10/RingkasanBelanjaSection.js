import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const RingkasanBelanjaSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Ringkasan belanja</Text>

      {/* Produk */}
      <View style={styles.productRow}>
        <Image
          source={require('../../assets/PreviewKeranjang/PK11.png')}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.title}>iPhone 15 128GB Blue</Text>
          <Text style={styles.grayText}>Warna: Pink</Text>
          <Text style={styles.grayText}>Model: iPhone 15 Plus</Text>
          <Text style={styles.grayText}>Kapasitas: 128 GB</Text>
          <Text style={styles.grayText}>Jumlah: 1</Text>
        </View>
      </View>

      {/* Promo */}
      <Text style={styles.promoTitle}>Promo bundling</Text>
      <Text style={styles.grayText}>APP 20W USB-C POWER ADAPTER</Text>
      <Text style={styles.grayText}>Jumlah: 1</Text>

      {/* Total */}
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total pesanan</Text>
        <Text style={styles.totalValue}>Rp11.499.000</Text>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Biaya pengiriman</Text>
        <Text style={styles.placeholder}>Masukkan jasa pengiriman</Text>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Asuransi pengiriman</Text>
        <Text style={styles.placeholder}>Masukkan jasa pengiriman</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  grayText: {
    fontSize: 14,
    color: '#555',
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  totalValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  placeholder: {
    fontSize: 14,
    color: '#888',
  },
});

export default RingkasanBelanjaSection;
