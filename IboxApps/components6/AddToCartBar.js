import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import {useCart} from '../contexts/CartContext'; // Import Cart Context

const AddToCartBar = ({product}) => {
  const navigation = useNavigation(); // Inisialisasi useNavigation
  const {cart} = useCart(); // Access cart state

  const unitPrice = 11499000; // Harga produk satuan
  const currentQuantity =
    cart.items.find(item => item.product === product)?.quantity || 0; // Ambil kuantitas produk
  const totalPrice = unitPrice * currentQuantity; // Menghitung harga total berdasarkan kuantitas

  const handleAddToCart = () => {
    navigation.navigate('PreviewKeranjang'); // Navigasi ke halaman Preview Keranjang
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
