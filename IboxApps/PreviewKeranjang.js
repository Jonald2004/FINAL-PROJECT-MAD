import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import CartHeader from './components7/CartHeader';
import Fix from './components7/Fix';

const PreviewKeranjang = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.wrapper}>
        <CartHeader onClose={() => console.log('Tutup keranjang')} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Fix />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
  },
});

export default PreviewKeranjang;
