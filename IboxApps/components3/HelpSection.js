import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const helpData = [
  {
    image: require('../../assets/ImageHomePage/HP5481.png'),
    title: 'Butuh bantuan?',
    desc: 'Dapatkan bantuan yang kamu butuhkan.',
    button: 'Hubungi kami',
  },
  {
    image: require('../../assets/ImageHomePage/HP5282.png'),
    title: 'Toko terdekat',
    desc: 'Temukan iBox di dekatmu.',
    button: 'Cari toko',
  },
  {
    image: require('../../assets/ImageHomePage/HP5383.png'),
    title: 'Ikuti kelas',
    desc: 'Temukan berbagai kelas di iBox',
    button: 'Jadwalkan',
  },
];

const HelpSection = () => {
  return (
    <View style={styles.section}>
      {helpData.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <TouchableOpacity style={styles.buttonOutline}>
            <Text style={styles.buttonText}>{item.button}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    paddingTop: 30,
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    paddingBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: '#0071E7',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#0071E7',
    fontWeight: '600',
  },
});

export default HelpSection;
