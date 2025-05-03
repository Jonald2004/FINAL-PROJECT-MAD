import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const appleCareList = [
  {
    id: 1,
    title: 'MacBook Air',
    subtitle: 'AppleCare mulai Rp3.000.000 untuk 3 tahun',
    desc: 'Tambahkan AppleCare saat pembelian MacBook Air online atau di toko.',
    image: require('../../assets/ImageHomePage/HP91.png'),
  },
  {
    id: 2,
    title: 'MacBook Pro',
    subtitle: 'AppleCare mulai Rp2.000.000 untuk 2 tahun',
    desc: 'Tambahkan AppleCare saat pembelian MacBook Pro online atau di toko.',
    image: require('../../assets/ImageHomePage/HP91.png'),
  },
  {
    id: 3,
    title: 'iMac',
    subtitle: 'AppleCare mulai Rp2.000.000 untuk 2 tahun',
    desc: 'Tambahkan AppleCare saat pembelian iMac online atau di toko.',
    image: require('../../assets/ImageHomePage/HP91.png'),
  },
];

const AppleCareSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Tenang dengan AppleCare.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {appleCareList.map(item => (
          <View key={item.id} style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.product}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
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
    width: width * 0.7,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    marginBottom: 16,
  },
  product: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  desc: {
    fontSize: 13,
    color: '#555',
  },
});

export default AppleCareSection;
