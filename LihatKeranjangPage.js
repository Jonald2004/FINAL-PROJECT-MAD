import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CartWarningBanner from './components8/CartWarningBanner';
import CartItem from './components8/CartItem';
import DeliveryOptions from './components8/DeliveryOptions';
import CartFooter from './components8/CartFooter';

const LihatKeranjangPage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CartWarningBanner />
        <CartItem />
        <DeliveryOptions />
        <CartFooter />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingBottom: 40,
  },
  container: {
    width: '100%',
    maxWidth: 440,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});

export default LihatKeranjangPage;
