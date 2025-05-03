import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const IphoneCard = () => {
  return (
    <View style={styles.wrapper}>
      {/* iPhone 15 Pro */}
      <View style={styles.card}>
        <Image
          source={require('../../assets/SemuaIphone/SI22.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/SemuaIphone/SI23.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>iPhone 15 Pro</Text>
        <Text style={styles.subText}>Titanium.</Text>
        <Text style={styles.price}>Mulai dari Rp18.999.000</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Beli sekarang</Text>
        </TouchableOpacity>
      </View>

      {/* iPhone 13 */}
      <View style={styles.card}>
        <Image
          source={require('../../assets/SemuaIphone/SI24.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>iPhone 13</Text>
        <Text style={styles.subText}>Keunikan memikat. Kemampuan hebat.</Text>
        <Text style={styles.price}>Mulai dari Rp8.499.000</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Beli sekarang</Text>
        </TouchableOpacity>
      </View>

      {/* iPhone 12 */}
      <View style={styles.card}>
        <Image
          source={require('../../assets/SemuaIphone/SI25.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>iPhone 12</Text>
        <Text style={styles.subText}>Lebih hebat dari cepat.</Text>
        <Text style={styles.price}>Mulai dari Rp7.749.000</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Beli sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 40,
  },
  card: {
    alignItems: 'center',
    marginBottom: 48,
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0071E3',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default IphoneCard;
