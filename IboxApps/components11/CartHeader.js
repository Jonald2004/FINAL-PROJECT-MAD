import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

const CartHeader = () => {
  const navigation = useNavigation(); // Access navigation

  // Handle the close button press to go back to the previous screen
  const handleClose = () => {
    navigation.goBack(); // Navigate to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah alamat baru</Text>
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
    fontSize: 22,
    fontWeight: '700',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
});

export default CartHeader;
