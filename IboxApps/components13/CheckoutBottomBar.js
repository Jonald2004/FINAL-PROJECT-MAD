import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

const CheckoutBottomBar = () => {
  const navigation = useNavigation(); // Initialize useNavigation

  // Function to handle the button press and navigate to OrderConfirmationPage
  const handleCreateOrder = () => {
    navigation.navigate('OrderConfirmationPage', {
      productName: 'iPhone 15 128GB Blue', // Pass product details
      productPrice: '11,499,000',
      discount: '599,000',
      totalPrice: '10,925,000',
    });
  };

  return (
    <View style={styles.container}>
      {/* Harga dan Hemat */}
      <View style={styles.priceSection}>
        <Text style={styles.totalPrice}>Rp10.925.000</Text>
        <Text style={styles.saving}>Hemat Rp599.000</Text>
      </View>

      {/* Tombol Buat Pesanan */}
      <TouchableOpacity style={styles.button} onPress={handleCreateOrder}>
        <Text style={styles.buttonText}>Buat Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  priceSection: {
    flex: 1,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#D3472F',
  },
  saving: {
    fontSize: 14,
    fontWeight: '500',
    color: '#888',
  },
  button: {
    backgroundColor: '#2F74F8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CheckoutBottomBar;
