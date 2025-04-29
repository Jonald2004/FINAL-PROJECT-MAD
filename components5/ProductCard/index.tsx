import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  style?: object;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  style,
}) => {
  return (
    <View style={[styles.container, style]} accessible={true}>
      <Image
        source={{uri: imageUrl}}
        style={styles.image}
        accessibilityLabel={`${title} product image`}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} accessibilityRole="header">
          {title}
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 66,
    aspectRatio: 0.86,
  },
  textContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Public Sans',
    color: '#1E1E1E',
  },
  price: {
    fontSize: 8,
    fontWeight: '600',
    fontFamily: 'Public Sans',
    color: 'rgba(110, 110, 115, 1)',
  },
});
export default ProductCard;
