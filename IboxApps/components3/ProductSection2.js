import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const latestProducts = [
  {
    image: require('../../assets/ImageHomePage/HP3141.png'),
    name: 'Macbook Pro M4',
    description: 'Bertenaga super berkat M4.',
    price: 'Mulai Rp27.999.000',
  },
  {
    image: require('../../assets/ImageHomePage/HP3242.png'),
    name: 'Mac mini M4',
    description: 'Ukuran lebih kecil. Tenaga lebih besar.',
    price: 'Mulai Rp9.999.000',
  },
  {
    image: require('../../assets/ImageHomePage/HP33.png'),
    name: 'Mac mini M4',
    description: 'Ukuran lebih kecil. Tenaga lebih besar.',
    price: 'Mulai Rp9.999.000',
  },
];

const ProductSection2 = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Cek yang terbaru.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {latestProducts.map((item, index) => (
          <View style={styles.card} key={index}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1E1E1E',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginRight: 16,
    width: Dimensions.get('window').width * 0.65,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    color: '#1E1E1E',
  },
  description: {
    fontSize: 13,
    color: '#555',
    marginBottom: 8,
  },
  price: {
    fontSize: 13,
    color: '#000',
    fontWeight: '600',
  },
});

export default ProductSection2;
