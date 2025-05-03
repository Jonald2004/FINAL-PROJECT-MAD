import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ExperienceSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tingkat pengalaman</Text>

      <View style={styles.card}>
        <Image
          source={require('../../assets/LihatKeranjang/LK12.png')} // ganti path sesuai lokasi gambar kamu
          style={styles.image}
        />

        <Text style={styles.title}>Apple Watch Ultra 2 with Ocean Band</Text>

        <Text style={styles.oldPrice}>Rp 11.999.000</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>Rp11.499.000</Text>
          <Text style={styles.discount}>3%</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Beli sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 2,
  },
  image: {
    width: 220,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 6,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 14,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  discount: {
    color: '#E53935',
    fontWeight: '600',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#2F74F8',
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 28,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default ExperienceSection;
