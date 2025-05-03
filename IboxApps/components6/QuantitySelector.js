import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const QuantitySelector = ({quantity, setQuantity}) => {
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.symbol}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    padding: 10,
  },
  symbol: {
    fontSize: 20,
    fontWeight: '600',
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default QuantitySelector;
