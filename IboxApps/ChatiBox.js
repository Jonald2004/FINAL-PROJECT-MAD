import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components14/Header';
import InfoBanner from './components14/InfoBanner';
import CartHeader from './components14/CartHeader';

const ChatiBox = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoBanner />
        <CartHeader />
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

export default ChatiBox;
