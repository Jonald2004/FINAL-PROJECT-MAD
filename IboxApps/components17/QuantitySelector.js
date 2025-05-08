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
      <TouchableOpacity onPress={decrement} style={styles.buttonLeft}>
        <Text style={styles.symbol}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
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
