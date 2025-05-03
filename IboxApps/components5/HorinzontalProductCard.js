import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const products = [
  {
    name: 'iPhone 15 Pro',
    price: 'Mulai dari Rp18.999.000',
    image: require('../../assets/SemuaIphone/SI11.png'),
  },
  {
    name: 'iPhone 14',
    price: 'Mulai dari Rp9.749.000',
    image: require('../../assets/SemuaIphone/SI12.png'),
  },
  {
    name: 'iPhone 13',
    price: 'Mulai dari Rp8.499.000',
    image: require('../../assets/SemuaIphone/SI13.png'),
  },
];

const HorizontalProductCard = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      {products.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fff',
    marginRight: 12,
  },
  image: {
    width: 60,
    height: 80,
    marginRight: 12,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  price: {
    fontSize: 13,
    color: '#555',
  },
});

export default HorizontalProductCard;
