import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// Komponen
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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const uid = auth().currentUser?.uid;
    console.log('UID user saat ini:', uid);
    if (uid) {
      const userRef = database().ref(`/users/${uid}`);
      const onValueChange = userRef.on('value', snapshot => {
        console.log('Isi snapshot:', snapshot.val());
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      });

      return () => userRef.off('value', onValueChange);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Sapaan user */}
        {userData && (
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>
              Selamat datang, {userData.firstName} {userData.lastName}! 👋
            </Text>
          </View>
        )}

        <InfoBanner />
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
  greetingContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
  },
});

export default HomePage;
