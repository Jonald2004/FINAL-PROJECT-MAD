import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StoreInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iBox Store</Text>
      <Text style={styles.subtitle}>Jl. Thamrin No. 10, Jakarta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#6E6E73',
  },
});

export default StoreInfo;
