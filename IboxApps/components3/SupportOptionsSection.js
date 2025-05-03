import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const supportOptions = [
  {
    icon: require('../../assets/Ikon/Icon5.png'),
    title: 'Simulasi kredit dan cicilan',
    desc: 'Berbagai pilihan pembayaran kredit dan cicilan. Semua pilihanmu.',
  },
  {
    icon: require('../../assets/Ikon/Icon6.png'),
    title: 'Dapatkan servis dan bantuan profesional.',
    desc: 'Mulai dari pengaturan device terbaru-mu hingga servis, dapatkan pengalaman terbaiknya.',
  },
  {
    icon: require('../../assets/Ikon/Icon7.png'),
    title: 'Beli online, ambil di toko.',
    desc: 'Order barangnya online dan ambil langsung di toko.',
  },
];

const SupportOptionsSection = () => {
  return (
    <View style={styles.container}>
      {supportOptions.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Lebih lanjut {'>'}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 32,
    gap: 28,
  },
  card: {
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    marginBottom: 14,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  desc: {
    fontSize: 13,
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
    lineHeight: 18,
  },
  link: {
    color: '#0071E7',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default SupportOptionsSection;
