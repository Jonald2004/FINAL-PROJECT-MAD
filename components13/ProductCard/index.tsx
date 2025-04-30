import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProductCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aad8e38db09df33ab867ef0b9d5e5a808d14b9e2',
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>iPhone 15</Text>
        <Text style={styles.price}>Rp27.999.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    color: '#6E6E73',
  },
});

export default ProductCard;
