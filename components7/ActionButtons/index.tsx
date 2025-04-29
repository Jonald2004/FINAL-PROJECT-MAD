import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ActionButtons: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.viewCartButton}
        accessibilityRole="button"
        accessibilityLabel="View cart with 1 item">
        <Text style={styles.viewCartText}>Lihat keranjang (1)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.checkoutButton}
        accessibilityRole="button"
        accessibilityLabel="Proceed to checkout">
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.favoritesButton}
        accessibilityRole="button"
        accessibilityLabel="View favorites">
        <Text style={styles.favoritesText}>Lihat favorite</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 18,
  },
  viewCartButton: {
    width: '100%',
    maxWidth: 370,
    paddingVertical: 14,
    alignItems: 'center',
  },
  checkoutButton: {
    width: '100%',
    maxWidth: 370,
    marginTop: 12,
    paddingVertical: 18,
    backgroundColor: '#276EF1',
    borderRadius: 50,
    alignItems: 'center',
  },
  favoritesButton: {
    width: '100%',
    maxWidth: 370,
    marginTop: 20,
    paddingVertical: 14,
    alignItems: 'center',
  },
  viewCartText: {
    fontSize: 18,
    color: '#276EF1',
    fontWeight: '600',
  },
  checkoutText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  favoritesText: {
    fontSize: 18,
    color: '#276EF1',
    fontWeight: '600',
  },
});

export default ActionButtons;
