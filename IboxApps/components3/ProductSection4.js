import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const tradeInProducts = [
  {
    name: 'iPhone 15',
    image: require('../../assets/ImageHomePage/HP61.png'),
    originalPrice: 'Rp 11.999.000',
    discountedPrice: 'Rp 11.499.000',
    discount: '3%',
  },
  {
    name: 'Apple Watch Series 9',
    image: require('../../assets/ImageHomePage/HP62.png'),
    originalPrice: 'Rp 11.499.000',
    discountedPrice: 'Rp 10.999.000',
    discount: '4%',
  },
];

const ProductSection4 = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Trade in produkmu dengan produk terbaru.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tradeInProducts.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.originalPrice}>{item.originalPrice}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
              <Text style={styles.discount}>{item.discount}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Beli sekarang</Text>
            </TouchableOpacity>
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
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 16,
    padding: 12,
    alignItems: 'center',
    width: 220,
    elevation: 2,
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 6,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: '#888',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  discountedPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  discount: {
    fontSize: 12,
    color: 'red',
    marginLeft: 6,
  },
  button: {
    backgroundColor: '#0071E7',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default ProductSection4;
