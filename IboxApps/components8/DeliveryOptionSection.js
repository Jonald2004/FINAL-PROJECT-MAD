import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const DeliveryOptionSection = () => {
  return (
    <View style={styles.container}>
      {/* Click & PickUp */}
      <View style={styles.optionRow}>
        <Image
          source={require('../../assets/Ikon/Icon15.png')}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.optionTitle}>Click & PickUp</Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://ibox.co.id/store-availability')
            }>
            <Text style={styles.link}>
              Cek ketersediaan barang di toko {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pengiriman */}
      <View style={styles.optionRow}>
        <Image
          source={require('../../assets/Ikon/Icon14.png')}
          style={styles.icon}
        />
        <Text style={styles.optionTitle}>Pengiriman</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 22,
    height: 40,
    resizeMode: 'contain',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  link: {
    color: '#0071E7',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
});

export default DeliveryOptionSection;
