import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import QuantitySelector from './QuantitySelector';

const DetailOptionsSection = ({quantity, setQuantity}) => {
  const [selectedModel, setSelectedModel] = React.useState('iPhone 15');
  const [selectedStorage, setSelectedStorage] = React.useState('128 GB');

  return (
    <View style={styles.container}>
      {/* Model */}
      <Text style={styles.label}>Model</Text>
      {['iPhone 15', 'iPhone 15 Plus'].map(model => (
        <TouchableOpacity
          key={model}
          onPress={() => setSelectedModel(model)}
          style={styles.option}>
          <Text
            style={[
              styles.optionText,
              selectedModel === model && styles.selected,
            ]}>
            {model}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Storage */}
      <Text style={styles.label}>Kapasitas</Text>
      {['128 GB', '256 GB', '512 GB'].map(storage => (
        <TouchableOpacity
          key={storage}
          onPress={() => setSelectedStorage(storage)}
          style={styles.option}>
          <Text
            style={[
              styles.optionText,
              selectedStorage === storage && styles.selected,
            ]}>
            {storage}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Trade-in */}
      <Text style={styles.label}>Trade-in</Text>
      <Text style={styles.description}>
        Tukarkan produk lamamu untuk dapat potongan harga batu.
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://ibox.co.id/trade-in')}>
        <Text style={styles.link}>Lebih lanjut tentang trade-in {'>'}</Text>
      </TouchableOpacity>

      {/* Quantity */}
      <Text style={styles.label}>Jumlah</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  option: {
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  selected: {
    fontWeight: '700',
  },
  description: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  link: {
    color: '#0071E7',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 20,
  },
});

export default DetailOptionsSection;
