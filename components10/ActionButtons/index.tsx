import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, commonStyles, spacing} from '../CommonStyles';

export const ActionButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[commonStyles.button, commonStyles.primaryButton]}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Lanjut pembayaran">
        <Text style={commonStyles.primaryButtonText}>Lanjut pembayaran</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[commonStyles.button, commonStyles.secondaryButton]}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Kembali ke keranjang">
        <Text style={commonStyles.secondaryButtonText}>
          Kembali ke keranjang
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: spacing.lg,
  },
});
