import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({imageUrl, title, price}) => {
  return (
    <View style={styles.container} accessibilityRole="none">
      <Image
        source={{uri: imageUrl}}
        style={styles.image}
        accessibilityLabel={`${title} product image`}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
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
    paddingRight: 10,
    marginBottom: 6,
    overflow: 'hidden',
  },
  image: {
    width: 66,
    height: 77,
    resizeMode: 'contain',
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Public Sans',
    fontSize: 14,
    fontWeight: '700',
    color: '#6E6E73',
  },
  price: {
    fontSize: 8,
    fontWeight: '600',
    color: '#6E6E73',
  },
});

export default ProductCard;
