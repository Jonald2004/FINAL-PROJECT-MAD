import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const StoreSummarySection = () => {
  return (
    <View style={styles.container}>
      {/* Logo iBox dan lokasi */}
      <View style={styles.headerRow}>
        <Image
          source={require('../../assets/LogoiBoxAPPS.png')}
          style={styles.logo}
        />
        <Text style={styles.storeText}>iBox Centre Jakarta</Text>
      </View>

      {/* Produk */}
      <View style={styles.productRow}>
        <Image
          source={require('../../assets/Checkout/C11.png')}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>iPhone 15 128GB</Text>
          <Text style={styles.productColor}>Blue</Text>
          <Text style={styles.productPrice}>Rp 11.499.000</Text>
        </View>
        <Text style={styles.qty}>×1</Text>
      </View>

      {/* Opsi lainnya */}
      <TouchableOpacity style={styles.rowOption}>
        <Text style={styles.optionText}>Voucher Toko</Text>
        <Text style={styles.chevron}>{'>'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowOption}>
        <Text style={styles.optionText}>Pesan untuk iBox</Text>
        <Text style={styles.chevron}>{'>'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowOption}>
        <Text style={styles.optionText}>Opsi Pengiriman</Text>
        <Text style={styles.chevron}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 90,
    height: 40,
    resizeMode: 'contain',
    marginRight: 8,
  },
  storeText: {
    fontSize: 16,
    fontWeight: '700',
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
  },
  productColor: {
    fontSize: 14,
    color: '#555',
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },
  qty: {
    fontSize: 15,
    color: '#666',
    marginLeft: 6,
  },
  rowOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 15,
  },
  chevron: {
    fontSize: 18,
    color: '#999',
  },
});

export default StoreSummarySection;
