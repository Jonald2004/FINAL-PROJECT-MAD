import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProductCard} from '../ProductCard';
import {CommonButton} from '../CommonButton';

export const ProductComparison: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <ProductCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/719a637a8840e2add63973e001b611a0024ff9af?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
          title="iPhone 15 Pro"
          price="Mulai dari Rp18.999.000"
        />
        <ProductCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f4954727e919c27534bcffe704aa0fdd7625cef2?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
          title="iPhone 14"
          price="Mulai dari Rp9.749.000"
        />
      </View>
      <Text style={styles.title}>Temukan iPhone terbaik untukmu.</Text>
      <CommonButton
        title="Bandingkan semua model"
        variant="outline"
        style={styles.compareButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  cardsContainer: {
    width: '100%',
    gap: 6,
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 33,
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  compareButton: {
    marginTop: 37,
  },
});
export default ProductComparison;
