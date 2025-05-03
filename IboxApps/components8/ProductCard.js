import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iPhone 15 128GB Blue</Text>
      <Image
        source={require('../../assets/LihatKeranjang/LK11.png')} // ganti path sesuai folder kamu
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.detail}>Warna: Pink</Text>
        <Text style={styles.detail}>Model: iPhone 15 Plus</Text>
        <Text style={styles.detail}>Kapasitas: 128 GB</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  details: {
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 10,
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
});

export default ProductCard;
