import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, typography, spacing} from '../CommonStyles';

export const ShippingSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dikirim ke</Text>

      <View style={styles.addressBox}>
        <Text style={styles.addressText}>
          Belum ada alamat yang disimpan. Isi alamat
        </Text>
      </View>

      <Text style={styles.subtitle}>Jasa pengiriman</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Masukkan alamat pengiriman untuk melihat biaya pengiriman.
        </Text>
      </View>

      <Text style={styles.subtitle}>Jasa layanan</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Pilih jasa pengiriman untuk melihat jenis layanan.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  title: {
    ...typography.subheading,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  subtitle: {
    ...typography.subheading,
    color: colors.primary,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  addressBox: {
    backgroundColor: colors.errorBg,
    borderColor: colors.errorRed,
    borderWidth: 1,
    borderRadius: 5,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  addressText: {
    ...typography.subheading,
    color: colors.black,
  },
  infoBox: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  infoText: {
    ...typography.body,
    color: colors.gray,
  },
});
