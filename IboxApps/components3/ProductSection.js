import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const productList = [
  {
    image: require('../../assets/ImageHomePage/HP21.png'),
    name: 'Mac',
    price: 'Mulai Rp12 juta',
  },
  {
    image: require('../../assets/ImageHomePage/HP2234.png'),
    name: 'iPhone',
    price: 'Mulai Rp8 juta',
  },
  {
    image: require('../../assets/ImageHomePage/HP23.png'),
    name: 'iPad',
    price: 'Mulai Rp5 juta',
  },
  {
    image: require('../../assets/ImageHomePage/HP24.png'),
    name: 'Watch',
    price: 'Mulai Rp3 juta',
  },
  {
    image: require('../../assets/ImageHomePage/HP25.png'),
    name: 'Music',
    price: 'Mulai Rp1 juta',
  },
  {
    image: require('../../assets/ImageHomePage/HP26.png'),
    name: 'Accessories',
    price: 'Mulai Rp400 ribu',
  },
  {
    image: require('../../assets/ImageHomePage/HP27.png'),
    name: 'Airtag',
    price: 'Mulai Rp400 ribu',
  },
];

const ProductSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Berbagai produk Apple.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {productList.map((item, index) => (
          <View style={styles.card} key={index}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#1E1E1E',
  },
  card: {
    alignItems: 'center',
    marginRight: 20,
    width: 110,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default ProductSection;
