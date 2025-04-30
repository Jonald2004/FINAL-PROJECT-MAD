import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, spacing} from '../CommonStyles';

export const WarningBanner = () => {
  return (
    <View style={styles.banner} accessible={true} accessibilityRole="alert">
      <Text style={styles.bannerText}>
        Waspada terhadap upaya penipuan yang mengatasnamakan iBox. Info
        selengkapnya, <Text style={styles.link}>klik di sini</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.primary,
    padding: spacing.md,
  },
  bannerText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 12,
  },
  link: {
    color: colors.lightGray,
  },
});
