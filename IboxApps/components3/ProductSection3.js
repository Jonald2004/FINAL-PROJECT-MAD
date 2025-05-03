import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const promos = [
  {
    title: 'MacBook Pro M4',
    desc: 'Bertenaga super, berkat M4. Kini tersedia. Mulai dari Rp27.999.000',
    image: require('../../assets/ImageHomePage/HP3141.png'),
  },
  {
    title: 'Mac mini M4',
    desc: 'Ukuran lebih kecil. Tenaga lebih besar kini tersedia. Mulai dari Rp9.999.000',
    image: require('../../assets/ImageHomePage/HP3242.png'),
  },
  {
    title: 'Apple Watch Series 10',
    desc: 'Tipis dan tetap klasik. Kini tersedia. Mulai dari Rp5.999.000',
    image: require('../../assets/ImageHomePage/HP43.png'),
  },
];

const PromotionalSection = () => {
  return (
    <View style={styles.section}>
      {promos.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Beli sekarang</Text>
          </TouchableOpacity>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    marginTop: 40,
    gap: 40,
  },
  card: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1E1E1E',
  },
  desc: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#0071E7',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default PromotionalSection;
