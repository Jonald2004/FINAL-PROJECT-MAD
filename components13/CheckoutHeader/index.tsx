import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CheckoutHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Checkout</Text>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f56bba3e6a801f674fe13f52ebed0106bcbbefbf',
        }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default CheckoutHeader;
