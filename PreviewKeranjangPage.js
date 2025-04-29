import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CartHeader from './components7/CartHeader';
import ProductCard from './components7/ProductCard';
import BundlePromo from './components7/BundlePromo';
import ActionButtons from './components7/ActionButtons';

const PreviewKeranjangPage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CartHeader />
        <View style={styles.productSection}>
          <ProductCard />
          <BundlePromo />
        </View>
        <ActionButtons />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  container: {
    width: '100%',
    maxWidth: 440,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  productSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    marginTop: 30,
  },
});

export default PreviewKeranjangPage;
