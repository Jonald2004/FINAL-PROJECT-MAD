import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AddToCartBar = ({quantity}) => {
  const navigation = useNavigation();
  const unitPrice = 11499000;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    navigation.navigate('PreviewKeranjang');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>Rp{totalPrice.toLocaleString('id-ID')}</Text>
        <Text style={styles.installment}>
          atau Rp479.125/bln. untuk 24 bln.*
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Tambahkan keranjang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  installment: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#2979FF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 10,
  },
});

export default AddToCartBar;
