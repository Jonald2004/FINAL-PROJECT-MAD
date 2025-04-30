import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CheckoutFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        Terima kasih telah berbelanja di iBox
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6E6E73',
  },
});

export default CheckoutFooter;
