import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface ProductCardProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
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
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 6,
    color: '#1E1E1E',
  },
  description: {
    fontSize: 8,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  price: {
    fontSize: 7,
    fontWeight: '500',
    color: '#1E1E1E',
    marginTop: 18,
  },
});

export default ProductCard;
