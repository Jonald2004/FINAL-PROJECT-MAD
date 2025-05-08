import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import CartHeader from './components16/CartHeader';
import Detail from './components16/Detail';

const Keranjang = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartHeader />
        <Detail />
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

export default Keranjang;
