import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import QuantityControl from '../QuantityControl';

const CartItem: React.FC = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1dcf1f6175cad112caf423730ad8c5705ddec35',
      }}
      style={styles.image}
    />
    <View style={styles.details}>
      <Text style={styles.title}>iPhone 15 128GB Blue</Text>
      <Text style={styles.description}>128GB - Blue</Text>
      <QuantityControl />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  details: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    color: '#6E6E73',
  },
});

export default CartItem;
