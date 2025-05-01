import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface CategoryCardProps {
  image: ImageSourcePropType;
  title: string;
  price: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({image, title, price}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 125,
    height: 125,
    padding: 2,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1.49,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E1E1E',
    marginTop: 6,
  },
  price: {
    fontSize: 7,
    fontWeight: '400',
    color: '#1E1E1E',
    marginTop: 6,
  },
});

export default CategoryCard;
