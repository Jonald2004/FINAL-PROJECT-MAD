import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const CartHeader = ({onClose}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metode Pemesanan</Text>
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
