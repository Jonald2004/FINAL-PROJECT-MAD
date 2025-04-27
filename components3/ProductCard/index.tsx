import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <View style={styles.container} accessible>
      <Image
        source={{uri: image}}
        style={styles.image}
        accessibilityLabel={title}
      />
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
    width: '48%',
  },
  image: {
    width: '100%',
    aspectRatio: 1.58,
    resizeMode: 'contain',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    marginTop: 6,
  },
  description: {
    fontSize: 8,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
  },
  price: {
    fontSize: 7,
    fontFamily: 'Public Sans',
    fontWeight: '500',
    color: '#1E1E1E',
    marginTop: 18,
  },
});

export default ProductCard;
