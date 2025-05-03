import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CheckoutButton = ({onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
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
    backgroundColor: '#2F74F8',
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CheckoutButton;
