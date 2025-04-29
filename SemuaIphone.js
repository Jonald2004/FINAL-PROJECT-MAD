import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import CommonButton from './components5/CommonButton';
import ProductCard from './components5/ProductCard';
import ProductComparison from './components5/ProductComparison';
import WarningHeader from './components5/WarningHeader';
import ShowcaseFooter from './components5/ShowcaseFooter';
import ContactInfo from './components5/ContactInfo';
import PaymentMethods from './components5/PaymentMethods';
import SocialLinks from './components5/SocialLinks';

const SemuaIphone: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <WarningHeader />
      <ProductComparison />

      <View style={styles.mainShowcase}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a6771ce69373bde9ecb4b800ffa4bd80ba14b5e4?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.showcaseImage}
          accessibilityLabel="iPhone 15 showcase"
        />

        <Text style={styles.productTitle}>iPhone 15</Text>
        <Text style={styles.subtitle}>Kesegaran baru.</Text>
        <Text style={styles.price}>Kini tersedia. Mulai dari Rp11.499.000</Text>

        <View style={styles.buttonGroup}>
          <CommonButton
            title="Lebih lanjut >"
            variant="outline"
            style={{marginBottom: 8}}
          />
          <CommonButton title="Beli sekarang" variant="filled" />
        </View>
      </View>

      <View style={styles.productGrid}>
        {[
          {
            image:
              'https://cdn.builder.io/api/v1/image/assets/TEMP/1e3c6dc19683af8e3536ea41fc37293e548a79ac?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
            title: 'iPhone 15 Pro',
            description: 'Titanium.\nMulai dari Rp18.999.000',
          },
          {
            image:
              'https://cdn.builder.io/api/v1/image/assets/TEMP/491fe12f4bd80abf4da997e39e1985f1cacb8aca?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
            title: 'iPhone 13',
            description:
              'Keunikan memikat. Kemampuan hebat.\nMulai dari Rp8.499.000',
          },
          {
            image:
              'https://cdn.builder.io/api/v1/image/assets/TEMP/d6ef7e1d4c373d8cf7710df6346fa97c288a4236?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
            title: 'iPhone 12',
            description: 'Lebih hebat dari cepat.\nMulai dari Rp7.749.000',
          },
        ].map((product, index) => (
          <View key={index} style={styles.productCard}>
            <Image
              source={{uri: product.image}}
              style={styles.productImage}
              accessibilityLabel={`${product.title} image`}
            />
            <Text style={styles.productCardTitle}>{product.title}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <CommonButton
              title="Beli sekarang"
              variant="filled"
              style={{marginTop: 10}}
            />
          </View>
        ))}
      </View>

      <ShowcaseFooter />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainShowcase: {
    alignItems: 'center',
    padding: 16,
  },
  showcaseImage: {
    width: 344,
    aspectRatio: 1.4,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 40,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    marginTop: 13,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    marginTop: 5,
  },
  price: {
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    textAlign: 'center',
    marginTop: 25,
  },
  buttonGroup: {
    marginTop: 25,
    width: '100%',
    alignItems: 'center',
  },
  productGrid: {
    padding: 16,
  },
  productCard: {
    alignItems: 'center',
    padding: 22,
    marginBottom: 40,
  },
  productImage: {
    width: '100%',
    aspectRatio: 1.04,
    resizeMode: 'contain',
  },
  productCardTitle: {
    fontSize: 40,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    marginTop: 9,
  },
  productDescription: {
    fontSize: 16,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: 'rgba(110, 110, 115, 1)',
    textAlign: 'center',
    marginTop: 9,
    marginBottom: 27,
  },
});

export default SemuaIphone;
