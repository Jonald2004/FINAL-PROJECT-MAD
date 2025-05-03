import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const serviceOffers = [
  {
    label: 'PICKUP',
    title: 'Kirim dan ambil.',
    description: 'Belanja online dan bebas biaya kirim.',
    labelColor: '#999',
  },
  {
    label: 'FINANCING',
    title: 'Dapatkan harga spesial dan cicilan 0%',
    description: 'untuk produk-produk Apple.',
    labelColor: '#0071BC',
  },
  {
    label: 'IBOX EXPERIENCE DAYS',
    title: 'Maksimalkan penggunaan produk Applke anda',
    description: 'bersama Apple expert.',
    labelColor: '#999',
  },
  {
    label: 'SALE',
    title: 'Penawaran terbaik hari ini',
    description: 'untuk Belanja Online dari Click & PickUp.',
    labelColor: '#1D7C38',
  },
];

const ServiceOfferSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        Temukan layanan dan penawaran lainnya.
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {serviceOffers.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={[styles.label, {color: item.labelColor}]}>
              {item.label}
            </Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
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
    width: 220,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
});

export default ServiceOfferSection;
