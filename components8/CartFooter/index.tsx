import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CartFooter: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.totalLabel}>Total</Text>
    <Text style={styles.totalPrice}>Rp 18.999.000</Text>
    <TouchableOpacity style={styles.checkoutButton}>
      <Text style={styles.checkoutText}>Checkout</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 18,
    color: '#6E6E73',
    marginBottom: 8,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 20,
  },
  checkoutButton: {
    width: '100%',
    maxWidth: 340,
    paddingVertical: 16,
    backgroundColor: '#276EF1',
    borderRadius: 50,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CartFooter;
