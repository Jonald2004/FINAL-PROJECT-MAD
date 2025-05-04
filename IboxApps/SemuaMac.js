import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components12/Header';
import InfoBanner from './components12/InfoBanner';
import HorizontalProductCard from './components12/HorinzontalProductCard';
import MacComparisonBanner from './components12/MacComparisonBanner';
import MacbookCard from './components12/MacbookCard';
import FooterContactSection from './components12/FooterContactSection';
import FooterPaymentSection from './components12/FooterPaymentSection';

const SemuaMac = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoBanner />
        <HorizontalProductCard />
        <MacComparisonBanner />
        <MacbookCard />
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

export default SemuaMac;
