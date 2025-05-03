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

const storeData = [
  {
    title: 'Kirim atau ambil',
    subtitle: 'Bebas biaya kirim ambil sendiri',
    desc: 'Ambil pesananmu di toko iBox terdekat.',
    image: require('../../assets/ImageHomePage/HP51.png'),
  },
  {
    title: 'Cari toko terdekat',
    subtitle: 'Belanja produk terbaru Apple',
    desc: 'Temukan cabang iBox di lokasi terdekatmu.',
    image: require('../../assets/ImageHomePage/HP5282.png'),
  },
  {
    title: 'Ikuti Kelas',
    subtitle: 'Gratis setiap sesi kelasnya',
    desc: 'Sesi kreativitas gratis untukmu dalam bberbagai bidang..',
    image: require('../../assets/ImageHomePage/HP5383.png'),
  },
  {
    title: 'Bantuan untukmu',
    subtitle: 'iBox selalu ada solusi untukmu',
    desc: 'Mulai dari mengatur perangkat hingga memulihkan kebutuhan Apple Anda.',
    image: require('../../assets/ImageHomePage/HP5481.png'),
  },
];

const StoreClassSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        Ikuti kelas dan layanan{'\n'}lainnya di toko.
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {storeData.map((item, index) => (
          <View style={styles.card} key={index}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.label}>IN STORE.</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
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
    color: '#1E1E1E',
    marginBottom: 16,
  },
  card: {
    width: width * 0.7,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 12,
  },
  label: {
    fontSize: 11,
    color: '#999',
    marginBottom: 4,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 13,
    color: '#000',
  },
  desc: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default StoreClassSection;
