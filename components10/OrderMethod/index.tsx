import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, typography, spacing} from '../CommonStyles';

export const OrderMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('online');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metode Pemesanan</Text>

      <TouchableOpacity
        style={[styles.option, selectedMethod === 'online' && styles.selected]}
        onPress={() => setSelectedMethod('online')}
        accessible={true}
        accessibilityRole="radio"
        accessibilityState={{checked: selectedMethod === 'online'}}>
        <View style={styles.radio}>
          {selectedMethod === 'online' && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.optionText}>Belanja online</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedMethod === 'pickup' && styles.selected]}
        onPress={() => setSelectedMethod('pickup')}
        accessible={true}
        accessibilityRole="radio"
        accessibilityState={{checked: selectedMethod === 'pickup'}}>
        <View style={styles.radio}>
          {selectedMethod === 'pickup' && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.optionText}>Click & PickUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  title: {
    ...typography.heading,
    marginBottom: spacing.lg,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: 5,
    marginBottom: spacing.sm,
  },
  selected: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  radio: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  radioInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.primary,
  },
  optionText: {
    ...typography.subheading,
    color: colors.black,
  },
});
