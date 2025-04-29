import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const DeliverySection: React.FC = () => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.title}>Dapatkan segera</Text>

      <View style={styles.pickupContainer}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/afa96339b64d2921ed35e7e517384c2a9258974e?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.icon}
          accessibilityLabel="Click & PickUp icon"
        />
        <Text style={styles.pickupText}>Click & PickUp</Text>
      </View>

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Check store availability">
        <Text style={styles.link}>Cek ketersediaan barang di toko &gt;</Text>
      </TouchableOpacity>

      <Text style={styles.deliveryTitle}>Pengiriman</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginBottom: 10,
  },
  pickupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    width: 27,
    aspectRatio: 0.68,
  },
  pickupText: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '700',
  },
  link: {
    color: '#0071E3',
    fontSize: 20,
    fontFamily: 'Public Sans',
    fontWeight: '700',
    alignSelf: 'center',
  },
  deliveryTitle: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '700',
    marginTop: 24,
    marginLeft: 33,
  },
});

export default DeliverySection;
