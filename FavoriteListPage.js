import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from './components9/Header';
import NotificationBanner from './components9/NotificationBanner';
import ProductCard from './components9/ProductCard';

const FavoriteListPage: React.FC = () => {
  const products = [
    {
      id: '1',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/0ddbe3b33e29e5e2df83d51ded24306b7f24e5c3?placeholderIfAbsent=true',
      title: 'iPhone 15 128GB Blue',
    },
    {
      id: '2',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/b887b88aeb182a6e8ee6b35491bbb1d00102688d?placeholderIfAbsent=true',
      title: 'iMac',
    },
    {
      id: '3',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/98b566319d8321f49be25d193767e9f6c5bd69af?placeholderIfAbsent=true',
      title: 'Apple Watch Series 10',
    },
    {
      id: '4',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/94c6d6103dab5575b2ffd881217e2a8ddfd7b62a?placeholderIfAbsent=true',
      title: 'Mac mini',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <NotificationBanner />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Favoritmu</Text>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Close favorites">
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/894e9ed0bed3e4b30cd0da401c0350fbf6ed383b?placeholderIfAbsent=true',
              }}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        </View>

        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            onPress={() => {
              console.log(`Buy ${product.title}`);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontFamily: 'Public Sans',
    fontSize: 32,
    fontWeight: '700',
    color: '#1E1E1E',
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
});

export default FavoriteListPage;
