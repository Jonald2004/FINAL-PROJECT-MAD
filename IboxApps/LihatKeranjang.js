import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components8/Header';
import InfoBanner from './components8/InfoBanner';
import CartHeader from './components8/CartHeader';
import ProductCard from './components8/ProductCard';
import CartItemSection from './components8/CartItemSection';
import DeliveryOptionSection from './components8/DeliveryOptionSection';
import ExperienceSection from './components8/ExperienceSection';
import BottomCheckoutBar from './components8/BottomCheckoutBar';

const LihatKeranjang = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 11499000;
  const totalPrice = quantity * pricePerItem;

  return (
    <SafeAreaView style={styles.safe}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoBanner />
        <CartHeader />
        <ProductCard />
        <CartItemSection
          quantity={quantity}
          setQuantity={setQuantity}
          pricePerItem={pricePerItem}
        />
        <DeliveryOptionSection />
        <ExperienceSection />
      </ScrollView>
      <BottomCheckoutBar total={totalPrice} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default LihatKeranjang;
