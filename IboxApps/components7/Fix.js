import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Fix = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Item Section */}
        <View style={styles.itemRow}>
          <Image
            source={require('../../assets/PreviewKeranjang/PK11.png')}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.itemTitle}>iPhone 15 128GB Blue</Text>
            <Text style={styles.detail}>Warna: Blue</Text>
            <Text style={styles.detail}>Model: iPhone 15</Text>
            <Text style={styles.detail}>Kapasitas: 128 GB</Text>
            <Text style={styles.detail}>Jumlah: 1</Text>
          </View>
        </View>

        {/* Promo Section */}
        <View style={styles.promoSection}>
          <Text style={styles.promoTitle}>Promo bundling</Text>
          <Text style={styles.promoDetail}>APP 20W USB-C POWER ADAPTER</Text>
          <Text style={styles.promoDetail}>Jumlah: 1</Text>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Lihat keranjang (1)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.linkText}>Lihat favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 20,
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
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  detail: {
    color: '#555',
    fontSize: 14,
  },
  promoSection: {
    marginTop: 20,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  promoDetail: {
    fontSize: 14,
    color: '#555',
  },
  bottomBar: {
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  checkoutButton: {
    backgroundColor: '#2F74F8',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginVertical: 10,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  linkText: {
    color: '#2F74F8',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default Fix;
