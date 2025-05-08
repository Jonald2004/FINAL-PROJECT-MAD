import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

const BottomPaymentBar = ({total = 11499000, onCheckout, isAddressFilled}) => {
  const navigation = useNavigation(); // Initialize navigation

  const formatPrice = price =>
    'Rp ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Function to handle checkout
  const handleCheckout = () => {
    if (isAddressFilled) {
      navigation.navigate('Checkout'); // Navigate to Checkout if address is filled
    } else {
      // If no address, alert user and navigate to LengkapiAlamat
      alert('Harap lengkapi alamat terlebih dahulu!');
      navigation.navigate('Alamat'); // Navigate to LengkapiAlamat
    }
  };

  // Function to go back to the cart
  const handleBackToCart = () => {
    navigation.navigate('LihatKeranjang'); // Navigate back to LihatKeranjang page
  };

  return (
    <View style={styles.container}>
      {/* Total Pembayaran */}
      <View style={styles.totalRow}>
        <Text style={styles.label}>Total Pembayaran</Text>
        <Text style={styles.total}>{formatPrice(total)}</Text>
      </View>

      {/* Tombol Checkout */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutText}>Lanjut pembayaran</Text>
      </TouchableOpacity>

      {/* Tombol Kembali */}
      <TouchableOpacity onPress={handleBackToCart}>
        <Text style={styles.backText}>&lt; Kembali ke keranjang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  total: {
    fontSize: 18,
    fontWeight: '700',
  },
  checkoutButton: {
    backgroundColor: '#2F74F8',
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 12,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backText: {
    color: '#2F74F8',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default BottomPaymentBar;
