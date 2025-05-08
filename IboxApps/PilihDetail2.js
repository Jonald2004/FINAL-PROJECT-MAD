// PilihDetail.js
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components17/Header';
import InfoBanner from './components17/InfoBanner';
import ProductHeaderSection from './components17/ProductHeaderSection';
import DetailOptionsSection from './components17/DetailOptionsSection';
import DeliverySection from './components17/DeliverySection';
import FooterContactSection from './components17/FooterContactSection';
import FooterPaymentSection from './components17/FooterPaymentSection';
import AddToCartBar from './components17/AddToCartBar';

const PilihDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.safe}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoBanner />
        <ProductHeaderSection />
        <DetailOptionsSection quantity={quantity} setQuantity={setQuantity} />
        <DeliverySection />
        <FooterContactSection />
        <FooterPaymentSection />
      </ScrollView>
      <AddToCartBar quantity={quantity} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default PilihDetail;
