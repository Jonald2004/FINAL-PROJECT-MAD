import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const FooterShipping = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jasa Pengiriman</Text>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3ac33abb17e3eab5d35813aa6ddf5944069999',
        }}
        style={styles.image}
        accessibilityLabel="Jasa Pengiriman"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#121212',
    marginBottom: 12,
  },
  image: {
    width: 200,
    height: 35,
    resizeMode: 'contain',
  },
});

export default FooterShipping;
