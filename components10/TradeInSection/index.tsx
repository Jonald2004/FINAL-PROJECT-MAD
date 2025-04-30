import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, typography, spacing} from '../CommonStyles';

export const TradeInSection = () => {
  const [tradeIn, setTradeIn] = useState('no');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trade in</Text>
      <Text style={styles.question}>Ingin menukar perangkat lamamu?</Text>

      <TouchableOpacity
        style={[styles.option, tradeIn === 'yes' && styles.selected]}
        onPress={() => setTradeIn('yes')}
        accessible={true}
        accessibilityRole="radio"
        accessibilityState={{checked: tradeIn === 'yes'}}>
        <View style={styles.radio}>
          {tradeIn === 'yes' && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.optionText}>Iya</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, tradeIn === 'no' && styles.selected]}
        onPress={() => setTradeIn('no')}
        accessible={true}
        accessibilityRole="radio"
        accessibilityState={{checked: tradeIn === 'no'}}>
        <View style={styles.radio}>
          {tradeIn === 'no' && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.optionText}>Tidak</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  title: {
    ...typography.subheading,
    color: colors.black,
    marginBottom: spacing.sm,
  },
  question: {
    ...typography.subheading,
    color: colors.black,
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
