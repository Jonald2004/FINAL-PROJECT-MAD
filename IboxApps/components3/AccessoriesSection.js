import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const accessories = [
  {
    id: 1,
    image: require('../../assets/ImageHomePage/HP71.png'),
    title: 'Aksesori Mac',
    subtitle: 'Belanja aksesori Mac di sini',
    price: 'Tersedia mulai Rp459.000.',
  },
  {
    id: 2,
    image: require('../../assets/ImageHomePage/HP72.png'),
    title: 'Aksesori iPad',
    subtitle: 'Belanja aksesori iPad di sini',
    price: 'Tersedia mulai Rp1.299.000.',
  },
  {
    id: 3,
    image: require('../../assets/ImageHomePage/HP73.png'),
    title: 'Aksesori Watch',
    subtitle: 'Belanja aksesori Watch di sini',
    price: 'Tersedia mulai Rp399.000.',
  },
  {
    id: 4,
    image: require('../../assets/ImageHomePage/HP74.png'),
    title: 'Aksesori iPhone',
    subtitle: 'Belanja aksesori iPhone di sini',
    price: 'Tersedia mulai Rp999.000.',
  },
];

const AccessoriesSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Aksesori unggulan Apple.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {accessories.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
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
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    width: width * 0.6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  price: {
    fontSize: 13,
    color: '#555',
  },
});

export default AccessoriesSection;
