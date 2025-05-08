import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation untuk navigasi

const CheckoutButton = ({onPress}) => {
  const navigation = useNavigation(); // Inisialisasi useNavigation

  // Fungsi untuk menangani tombol checkout
  const handleCheckout = () => {
    if (onPress) {
      onPress(); // Panggil fungsi onPress jika ada
    }
    // Navigasi ke halaman checkout setelah tombol ditekan
    navigation.navigate('Checkout'); // Gantilah 'Checkout' dengan nama halaman yang sesuai
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.buttonText}>Lanjut pembayaran</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#2F74F8', // Warna biru
    paddingVertical: 14,
    borderRadius: 40, // Membuat sudut melengkung
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Warna teks putih
    fontSize: 16,
    fontWeight: '600', // Gaya font
  },
});

export default CheckoutButton;
