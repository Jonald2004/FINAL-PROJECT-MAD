import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, typography, spacing} from '../CommonStyles';

export const OrderSummary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ringkasan belanja</Text>

      <View style={styles.productContainer}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/043e8b34e15c850ecaa567b35c92af8cc98f849b?placeholderIfAbsent=true',
          }}
          style={styles.productImage}
          accessibilityLabel="iPhone 15"
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>iPhone 15 128GB Blue</Text>
          <Text style={styles.productSpec}>Warna: Pink</Text>
          <Text style={styles.productSpec}>Model: iPhone 15 Plus</Text>
          <Text style={styles.productSpec}>Kapasitas: 128 GB</Text>
          <Text style={styles.productSpec}>Jumlah: 1</Text>
        </View>
      </View>

      <Text style={styles.bundleTitle}>Promo bundling</Text>
      <View style={styles.bundleItem}>
        <Text style={styles.bundleName}>APP 20W USB-C POWER ADAPTER</Text>
        <Text style={styles.bundleQuantity}>Jumlah: 1</Text>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total pesanan</Text>
          <Text style={styles.summaryValue}>Rp11. 499.000</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Biaya pengiriman</Text>
          <Text style={styles.summaryValue}>Masukkan jasa pengiriman</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Asuransi pengiriman</Text>
          <Text style={styles.summaryValue}>Masukkan jasa pengiriman</Text>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Pembayaran</Text>
        <Text style={styles.totalAmount}>Rp 11. 499.000</Text>
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
    color: colors.black,
    marginBottom: spacing.lg,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  productImage: {
    width: 94,
    height: 131,
  },
  productDetails: {
    marginLeft: spacing.md,
  },
  productName: {
    ...typography.subheading,
    color: colors.black,
    marginBottom: spacing.xs,
  },
  productSpec: {
    ...typography.body,
    color: colors.gray,
    marginBottom: spacing.xs,
  },
  bundleTitle: {
    ...typography.body,
    fontWeight: '700',
    color: colors.black,
    marginBottom: spacing.sm,
  },
  bundleItem: {
    marginBottom: spacing.lg,
  },
  bundleName: {
    ...typography.body,
    fontWeight: '700',
    color: colors.gray,
  },
  bundleQuantity: {
    ...typography.body,
    color: colors.gray,
  },
  summaryContainer: {
    marginBottom: spacing.lg,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  summaryLabel: {
    ...typography.body,
    fontWeight: '700',
    color: colors.black,
  },
  summaryValue: {
    ...typography.body,
    color: colors.gray,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
  },
  totalLabel: {
    ...typography.subheading,
    color: colors.black,
  },
  totalAmount: {
    ...typography.subheading,
    color: colors.black,
  },
});
