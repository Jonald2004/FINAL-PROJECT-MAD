import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useCart} from '../contexts/CartContext'; // Import Cart Context

const QuantitySelector = ({product}) => {
  const {cart, addToCart} = useCart(); // Access cart state and addToCart function

  const increment = () => addToCart(product, 1); // Add product with 1 quantity
  const decrement = () => {
    if (cart.items.find(item => item.product === product)?.quantity > 1) {
      addToCart(product, -1); // Decrease quantity by 1
    }
  };

  // Find the current quantity of the selected product
  const currentQuantity =
    cart.items.find(item => item.product === product)?.quantity || 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrement} style={styles.buttonLeft}>
        <Text style={styles.symbol}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{currentQuantity}</Text>
      <TouchableOpacity onPress={increment} style={styles.buttonRight}>
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonLeft: {
    padding: 10,
    marginLeft: 20,
  },
  buttonRight: {
    padding: 10,
    marginRight: 20,
  },
  symbol: {
    fontSize: 20,
    fontWeight: '600',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default QuantitySelector;
