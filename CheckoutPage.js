// CheckoutPage.tsx
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import CheckoutHeader from './components13/CheckoutHeader';
import StoreInfo from './components13/StoreInfo';
import ProductCard from './components13/ProductCard';
import ShippingOptions from './components13/ShippingOptions';
import PaymentSummary from './components13/PaymentSummary';
import CheckoutFooter from './components13/CheckoutFooter';

const CheckoutPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CheckoutHeader />
        <View style={styles.content}>
          <StoreInfo />
          <ProductCard />
          <ShippingOptions />
          <PaymentSummary />
          <Text style={styles.terms}>
            <Text style={styles.termsRegular}>
              Dengan melanjutkan. Saya setuju dengan Syarat dan Ketentuan yang
              berlaku.
            </Text>{' '}
            <Text style={styles.termsLink}>Syarat dan ketentuan</Text>
          </Text>
        </View>
      </ScrollView>
      <CheckoutFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    maxWidth: 480,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 20,
    paddingHorizontal: 32,
  },
  terms: {
    fontSize: 15,
    marginTop: 59,
  },
  termsRegular: {
    color: '#6E6E73',
  },
  termsLink: {
    color: '#0071E3',
    fontWeight: '600',
  },
});

export default CheckoutPage;
