import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CartHeader = ({onClose}) => {
  const navigation = useNavigation();

  const handleClose = () => {
    // Menggunakan navigation.goBack untuk kembali ke halaman sebelumnya
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keranjangmu Kosong</Text>
      <TouchableOpacity onPress={handleClose}>
        <Image
          source={require('../../assets/Ikon/Icon16.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 85,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
});

export default CartHeader;
