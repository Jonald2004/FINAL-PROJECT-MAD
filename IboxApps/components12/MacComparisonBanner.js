import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const MacComparisonBanner = () => {
  return (
    <View style={styles.container}>
      {/* Gambar di kiri */}
      <Image
        source={require('../../assets/SemuaMac/SM21.png')}
        style={styles.image}
      />

      {/* Teks di kanan */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Temukan Mac terbaik untukmu.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bandingkan semua model</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 👉 susun horizontal kiri-kanan
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0071E3',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#0071E3',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default MacComparisonBanner;
