import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

const TradeInSection = () => {
  const [selectedOption, setSelectedOption] = useState('Tidak');

  const RadioButton = ({label}) => (
    <TouchableOpacity
      style={styles.radioRow}
      onPress={() => setSelectedOption(label)}>
      <View
        style={[
          styles.radioCircle,
          selectedOption === label && styles.radioSelected,
        ]}>
        {selectedOption === label && <View style={styles.radioDot} />}
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trade in</Text>
      <Text style={styles.subtitle}>Ingin menukar perangkat lamamu?</Text>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://ibox.co.id/trade-in')}>
        <Text style={styles.link}>Lebih lanjut</Text>
      </TouchableOpacity>

      <RadioButton label="Iya" />
      <RadioButton label="Tidak" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 12,
  },
  link: {
    color: '#2F74F8',
    fontWeight: '600',
    marginBottom: 16,
    fontSize: 15,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2F74F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioSelected: {
    borderColor: '#2F74F8',
  },
  radioDot: {
    width: 10,
    height: 10,
    backgroundColor: '#2F74F8',
    borderRadius: 5,
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TradeInSection;
