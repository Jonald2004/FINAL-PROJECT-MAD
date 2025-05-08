import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import {useCart} from '../contexts/CartContext';

const Fix = () => {
  const {cart} = useCart(); // Access cart state
  const navigation = useNavigation(); // Access navigation
  const unitPrice = 11499000;

  // Handle checkout button press
  const handleCheckout = () => {
    navigation.navigate('Pemesanan'); // Navigate to Pemesanan page
  };

  // Handle view favorite button press
  const handleViewFavorite = () => {
    navigation.navigate('Favorite'); // Navigate to Favorite page
  };

  // Handle view cart button press
  const handleViewCart = () => {
    navigation.navigate('LihatKeranjang'); // Navigate to LihatKeranjang page
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Item Section */}
        {cart.items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Image
              source={require('../../assets/PreviewKeranjang/PK11.png')}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={styles.itemTitle}>{item.product} 128GB Blue</Text>
              <Text style={styles.detail}>Warna: Blue</Text>
              <Text style={styles.detail}>Model: iPhone 15</Text>
              <Text style={styles.detail}>Kapasitas: 128 GB</Text>
              <Text style={styles.detail}>Jumlah: {item.quantity}</Text>
            </View>
          </View>
        ))}

        {/* Promo Section */}
        <View style={styles.promoSection}>
          <Text style={styles.promoTitle}>Promo bundling</Text>
          <Text style={styles.promoDetail}>APP 20W USB-C POWER ADAPTER</Text>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={handleViewCart}>
          <Text style={styles.linkText}>
            Lihat keranjang ({cart.items.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleViewFavorite}>
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
