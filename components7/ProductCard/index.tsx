import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProductCard: React.FC = () => {
  return (
    <View style={styles.container} accessible={true} accessibilityRole="none">
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1dcf1f6175cad112caf423730ad8c5705ddec35?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
        }}
        style={styles.productImage}
        accessibilityLabel="iPhone 15 128GB Blue"
      />
      <View style={styles.details}>
        <Text style={styles.productTitle}>iPhone 15 128GB Blue</Text>
        <Text style={styles.specifications}>
          Warna: Blue{'\n'}
          Model: iPhone 15{'\n'}
          Kapasitas: 128 GB{'\n'}
          Jumlah: 1
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 18,
    alignItems: 'stretch',
    gap: 14,
  },
  productImage: {
    width: 94,
    height: 130,
    resizeMode: 'contain',
  },
  details: {
    marginTop: 25,
  },
  productTitle: {
    fontSize: 20,
    color: '#1E1E1E',
    fontWeight: '600',
  },
  specifications: {
    fontSize: 15,
    color: '#6E6E73',
    marginTop: 8,
  },
});

export default ProductCard;
