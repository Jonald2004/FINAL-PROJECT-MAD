import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Header from './components9/Header';
import InfoBanner from './components9/InfoBanner';
import CartHeader from './components9/CartHeader';
import FavoriteItemCard from './components9/FavoriteItemCard';

const FavoritePage = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoBanner />
        <CartHeader />
        <FavoriteItemCard />
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

export default FavoritePage;
