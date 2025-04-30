import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import WarningBanner from './components12/WarningBanner';
import ProductCard from './components12/ProductCard';
import MacProductCard from './components12/MacProductCard';

import FooterContact from './components12/FooterComponents/FooterContact';
import FooterSocial from './components12/FooterComponents/FooterSocial';
import FooterPayment from './components12/FooterComponents/FooterPayment';
import FooterShipping from './components12/FooterComponents/FooterShipping';
import FooterCopyright from './components12/FooterComponents/FooterCopyright';

const SemuaMacPage: React.FC = () => {
  const iPhoneProducts = [
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/719a637a8840e2add63973e001b611a0024ff9af?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      title: 'iPhone 15 Pro',
      price: 'Mulai dari Rp18.999.000',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/f4954727e919c27534bcffe704aa0fdd7625cef2?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      title: 'iPhone 14',
      price: 'Mulai dari Rp9.749.000',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/cd52fe38e24d46316ca5113aac9ad8c175babd38?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      title: 'iPhone 13',
      price: 'Mulai dari Rp8.449.000',
    },
  ];

  const macProducts = [
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/831b18bd076cb2ed8dabe5b4ee3bfffcc05b8df9?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      title: 'MacBook Pro M4',
      description: 'Bertenaga super berkat M4',
      price: 'Mulai dari Rp27.999.000',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ae9b17f8bd78176d011399be69bd3938ca1027bb?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      title: 'Mac mini',
      description: 'Ukuran lebih kecil. Tenaga lebih besar.',
      price: 'Mulai dari Rp9.999.000',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/9034cb1d728480cf1efa58799c08b28a5429e11d?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      title: 'MacBook Pro',
      description: 'Begitu mengesankan. Mencuri perhatian.',
      price: 'Mulai dari Rp24.999.000',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/5dcee651fae8b24310522ee2cf93cee160af5fd2?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      title: 'iMac',
      description: 'Brillllllian.',
      price: 'Mulai dari Rp19.499.000',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/977a99cffc6235f6ef775ae43e43fea32c10a9d1?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      title: 'Mac Aksesori',
      description: '',
      price: 'Mulai dari Rp1.799.000',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <WarningBanner />

        <View style={styles.productsContainer}>
          {iPhoneProducts.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          ))}
        </View>

        <View style={styles.macContainer}>
          {macProducts.map((product, index) => (
            <MacProductCard
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <FooterContact />
          <FooterSocial />
          <FooterPayment />
          <FooterShipping />
          <FooterCopyright />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    maxWidth: 531,
    alignSelf: 'center',
  },
  productsContainer: {
    marginTop: 16,
    marginHorizontal: 12,
    gap: 6,
  },
  macContainer: {
    paddingHorizontal: 25,
    paddingBottom: 37,
  },
  footer: {
    width: '100%',
  },
});

export default SemuaMacPage;
