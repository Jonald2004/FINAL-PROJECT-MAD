import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TradeInSection: React.FC = () => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.title}>Trade-in</Text>
      <Text style={styles.description}>
        Tukarkan produk lamamu untuk dapat potongan harga batu.
      </Text>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Learn more about trade-in">
        <Text style={styles.link}>Lebih lanjut tentang trade-in &gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    color: '#6E6E73',
    fontSize: 20,
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
  link: {
    color: '#0071E3',
    fontSize: 20,
    fontFamily: 'Public Sans',
    fontWeight: '700',
    marginTop: 8,
  },
});

export default TradeInSection;
