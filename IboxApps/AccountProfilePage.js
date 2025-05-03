import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Header from './components4/Header';
import InfoBanner from './components4/InfoBanner';
import AccountDropdownHeader from './components4/AccountDropdownHeader';
import AccountStatusCard from './components4/AccountStatusCard';
import TransactionAndAddressSection from './components4/TransactionAndAddressSection';
import AccordionSection from './components4/AccordionSection';
import FooterContactSection from './components4/FooterContactSection';
import FooterPaymentSection from './components4/FooterPaymentSection';

const AccountProfilePage = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <View style={styles.wrapper}>
        <InfoBanner />
        <AccountDropdownHeader />
        <AccountStatusCard />
        <TransactionAndAddressSection />
        <AccordionSection />
        <FooterContactSection />
        <FooterPaymentSection />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
  },
  name: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
});

export default AccountProfilePage;
