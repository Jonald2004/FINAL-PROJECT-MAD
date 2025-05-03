import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CartItemSection = ({quantity, setQuantity, pricePerItem}) => {
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Format rupiah
  const formatPrice = price =>
    'Rp' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <View style={styles.container}>
      {/* Quantity Selector */}
      <View style={styles.quantityRow}>
        <TouchableOpacity onPress={decrement}>
          <Text style={styles.symbol}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={increment}>
          <Text style={styles.symbol}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Harga dan tombol hapus */}
      <View style={styles.priceRow}>
        <Text style={styles.price}>{formatPrice(pricePerItem * quantity)}</Text>
        <TouchableOpacity>
          <Text style={styles.hapus}>Hapus</Text>
        </TouchableOpacity>
      </View>

      {/* Promo Item */}
      <Text style={styles.promo}>ADP 20W USB-C POWER ADAPTER</Text>
      <View style={styles.subRow}>
        <Text style={styles.grayText}>1x</Text>
        <Text style={styles.grayText}>Rp499.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  quantityRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  symbol: {
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
  hapus: {
    color: '#2F74F8',
    fontSize: 14,
    fontWeight: '500',
  },
  promo: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
  },
  subRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  grayText: {
    fontSize: 14,
    color: '#555',
  },
});

export default CartItemSection;
