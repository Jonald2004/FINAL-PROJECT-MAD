import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CartHeader = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.goBack(); // Kembali ke halaman sebelumnya
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tanya iBox</Text>
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
    fontSize: 25,
    fontWeight: '600',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
});

export default CartHeader;
