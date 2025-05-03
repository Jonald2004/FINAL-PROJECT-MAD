import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components10/Header';
import InfoBanner from './components10/InfoBanner';
import CartHeader from './components10/CartHeader';
import OrderMethodSelector from './components10/OrderMethodSelector';
import DeliveryInfoSection from './components10/DeliveryInfoSection';
import TradeInSection from './components10/TradeInSection';
import RingkasanBelanjaSection from './components10/RingkasanBelanjaSection';
import BottomPaymentBar from './components10/BottomPaymentBar';

const Pemesanan = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoBanner />
        <CartHeader />
        <OrderMethodSelector />
        <DeliveryInfoSection />
        <TradeInSection />
        <RingkasanBelanjaSection />
        <BottomPaymentBar />
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

export default Pemesanan;
