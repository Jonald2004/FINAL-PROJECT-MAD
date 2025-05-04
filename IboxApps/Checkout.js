import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components13/Header';
import InfoBanner from './components13/InfoBanner';
import CartHeader from './components13/CartHeader';
import AlamatPengirimanCard from './components13/AlamatPengirimanCard';
import StoreSummarySection from './components13/StoreSummarySection';
import CheckoutSummary from './components13/CheckoutSummary';
import PaymentSummary from './components13/PaymentSummary';
import CheckoutBottomBar from './components13/CheckoutBottomBar';

const Checkout = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoBanner />
        <CartHeader />
        <AlamatPengirimanCard />
        <StoreSummarySection />
        <CheckoutSummary />
        <PaymentSummary />
        <CheckoutBottomBar />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Checkout;
