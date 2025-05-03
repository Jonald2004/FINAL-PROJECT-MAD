import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components3/Header';
import InfoBanner from './components3/InfoBanner';
import BannerCarousel from './components3/BannerCarousel';
import ProductSection from './components3/ProductSection';
import ProductSection2 from './components3/ProductSection2';
import ServiceOfferSection from './components3/ServiceOfferSection';
import ProductSection3 from './components3/ProductSection3';
import StoreClassSection from './components3/StoreClassSection';
import ProductSection4 from './components3/ProductSection4';
import SupportOptionsSection from './components3/SupportOptionsSection';
import AccessoriesSection from './components3/AccessoriesSection';
import HelpSection from './components3/HelpSection';
import AppleCareSection from './components3/AppleCareSection';
import CheckoutSection from './components3/CheckoutSection';
import AccordionSection from './components3/AccordionSection';
import FooterContactSection from './components3/FooterContactSection';
import FooterPaymentSection from './components3/FooterPaymentSection';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Header />
      <InfoBanner />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerCarousel />
        <ProductSection />
        <ProductSection2 />
        <ServiceOfferSection />
        <ProductSection3 />
        <StoreClassSection />
        <ProductSection4 />
        <SupportOptionsSection />
        <AccessoriesSection />
        <HelpSection />
        <AppleCareSection />
        <CheckoutSection />
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

export default HomePage;
