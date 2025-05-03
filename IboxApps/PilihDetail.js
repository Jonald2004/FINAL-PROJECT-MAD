// PilihDetail.js
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components6/Header';
import InfoBanner from './components6/InfoBanner';
import ProductHeaderSection from './components6/ProductHeaderSection';
import DetailOptionsSection from './components6/DetailOptionsSection';
import DeliverySection from './components6/DeliverySection';
import FooterContactSection from './components6/FooterContactSection';
import FooterPaymentSection from './components6/FooterPaymentSection';
import AddToCartBar from './components6/AddToCartBar';

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
