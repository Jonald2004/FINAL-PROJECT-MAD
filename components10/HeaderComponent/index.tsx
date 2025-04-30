import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {colors, spacing} from '../CommonStyles';

export const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <View
        style={styles.menuButton}
        accessible={true}
        accessibilityRole="button">
        <View style={styles.menuIcon} />
      </View>

      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b24cd8ff0a28172c47a15f84006f54842faede89?placeholderIfAbsent=true',
        }}
        style={styles.logo}
        accessibilityLabel="iBox Logo"
      />

      <View style={styles.iconContainer}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/58ba5bb0235cd1a22f176a4ece0ca2a7a2fe9a8e?placeholderIfAbsent=true',
          }}
          style={styles.icon}
          accessibilityLabel="Shop Icon"
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/244c9f708fabef8cd73bce799a8af5b03ea2d4eb?placeholderIfAbsent=true',
          }}
          style={styles.icon}
          accessibilityLabel="User Icon"
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?placeholderIfAbsent=true',
          }}
          style={styles.icon}
          accessibilityLabel="Shopping Bag Icon"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  menuButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 141,
    height: 28,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  icon: {
    width: 27,
    height: 39,
  },
});
