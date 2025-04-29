import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface ProductHeaderProps {
  title: string;
  sku: string;
  imageUrl: string;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  title,
  sku,
  imageUrl,
}) => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      <Text style={styles.sku}>SKU: {sku}</Text>
      <Image
        source={{uri: imageUrl}}
        style={styles.image}
        accessibilityLabel={`${title} product image`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    color: '#1E1E1E',
    fontSize: 32,
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
  sku: {
    color: '#6E6E73',
    fontSize: 14,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 11,
  },
  image: {
    width: '100%',
    aspectRatio: 0.85,
    marginTop: 31,
  },
});

export default ProductHeader;
