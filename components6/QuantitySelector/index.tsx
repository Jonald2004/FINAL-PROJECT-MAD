import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
}) => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.title}>Jumlah</Text>
      <View style={styles.selector}>
        <TouchableOpacity
          onPress={() => quantity > 1 && onQuantityChange(quantity - 1)}
          accessibilityLabel="Decrease quantity"
          style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantity}>{quantity}</Text>

        <TouchableOpacity
          onPress={() => onQuantityChange(quantity + 1)}
          accessibilityLabel="Increase quantity"
          style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginBottom: 16,
  },
  selector: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 11,
    backgroundColor: '#F5F5F7',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
  },
  quantity: {
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
  },
});

export default QuantitySelector;
