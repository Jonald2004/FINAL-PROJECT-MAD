import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const productList = [
  {
    image: require('../../assets/ImageHomePage/HP21.png'),
    name: 'Mac',
    price: 'Mulai Rp12 juta',
    screen: 'SemuaMac', // Nama halaman navigasi untuk Mac
  },
  {
    image: require('../../assets/ImageHomePage/HP2234.png'),
    name: 'iPhone',
    price: 'Mulai Rp8 juta',
    screen: 'SemuaIphone', // Nama halaman navigasi untuk iPhone
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
  const navigation = useNavigation();

  // Fungsi untuk navigasi ke halaman produk
  const handleProductPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Berbagai produk Apple.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {productList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleProductPress(item.screen || '')} // Menentukan navigasi saat produk ditekan
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
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
