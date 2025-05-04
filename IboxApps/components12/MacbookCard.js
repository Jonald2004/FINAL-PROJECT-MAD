import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const IphoneCard = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/SemuaMac/SM31.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Macbook Pro M4</Text>
        <Text style={styles.subText}>Bertenaga super berkat M4.</Text>
        <Text style={styles.price}>Mulai dari Rp27.999.000</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Beli sekarang</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../assets/SemuaMac/SM32.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Mac mini</Text>
        <Text style={styles.subText}>
          Ukuran lebih kecil. Tenaga lebih besar.
        </Text>
        <Text style={styles.price}>Mulai dari Rp9.999.000</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Beli sekarang</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../assets/SemuaMac/SM33.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>MacBook Pro</Text>
        <Text style={styles.subText}>
          Begitu Mengesankan. Mencuri Perhatian.
        </Text>
        <Text style={styles.price}>Mulai dari Rp24.999.000</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Beli sekarang</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../assets/SemuaMac/SM34.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>iMac</Text>
        <Text style={styles.subText}>Brillllllian.</Text>
        <Text style={styles.price}>Mulai dari Rp19.499.000.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Beli sekarang</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../assets/SemuaMac/SM35.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Mac Aksesori</Text>
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
