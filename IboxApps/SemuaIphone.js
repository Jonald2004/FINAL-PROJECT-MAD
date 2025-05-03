import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components5/Header';
import InfoBanner from './components5/InfoBanner';
import HorinzontalProductCard from './components5/HorinzontalProductCard';
import IphoneHighlightSection from './components5/IphoneHighlightSection';
import IphoneCard from './components5/IphoneCard';
import AccordionSection from './components5/AccordionSection';
import FooterContactSection from './components5/FooterContactSection';
import FooterPaymentSection from './components5/FooterPaymentSection';

const SemuaIphone = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoBanner />
        <HorinzontalProductCard />
        <IphoneHighlightSection />
        <IphoneCard />
        <AccordionSection />
        <FooterContactSection />
        <FooterPaymentSection />
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

export default SemuaIphone;
