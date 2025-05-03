import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const IphoneHighlightSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Temukan iPhone terbaik untukmu.</Text>

      <TouchableOpacity style={styles.compareButton}>
        <Text style={styles.compareText}>Bandingkan semua model</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/SemuaIphone/SI21.png')}
        style={styles.mainImage}
        resizeMode="contain"
      />

      <Text style={styles.modelName}>iPhone 15</Text>
      <Text style={styles.tagline}>Kesegaran baru.</Text>
      <Text style={styles.price}>Kini tersedia. Mulai dari Rp11.4999.000</Text>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Lebih lanjut &gt;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryText}>Beli sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  compareButton: {
    borderColor: '#0071E7',
    borderWidth: 1.5,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 18,
  },
  compareText: {
    color: '#0071E7',
    fontWeight: '600',
  },
  mainImage: {
    width: 300,
    height: 170,
    marginBottom: 24,
  },
  modelName: {
    fontSize: 28,
    fontWeight: '700',
  },
  tagline: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  secondaryButton: {
    borderWidth: 1.5,
    borderColor: '#0071E7',
    paddingVertical: 10,
    paddingHorizontal: 36,
    borderRadius: 30,
    marginBottom: 12,
  },
  secondaryText: {
    color: '#0071E7',
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#0071E7',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 30,
  },
  primaryText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default IphoneHighlightSection;
