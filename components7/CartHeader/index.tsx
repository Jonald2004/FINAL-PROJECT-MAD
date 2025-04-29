import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const CartHeader: React.FC = () => {
  return (
    <View style={styles.container} accessibilityRole="header">
      <Text style={styles.title}>Keranjangmu</Text>
      <TouchableOpacity
        accessibilityLabel="Tutup keranjang"
        accessibilityRole="button">
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d662bec7808de15bfbd070f043d48ac2bd07bb9?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.closeIcon}
          accessibilityLabel="Ikon tutup keranjang"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    color: '#1E1E1E',
    fontWeight: '600',
  },
  closeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default CartHeader;
