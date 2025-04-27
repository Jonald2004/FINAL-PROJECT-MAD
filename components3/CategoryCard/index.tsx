import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface CategoryCardProps {
  image: string;
  title: string;
  price: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
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
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    marginTop: 6,
  },
  price: {
    fontSize: 7,
    fontFamily: 'Public Sans',
    fontWeight: '400',
    color: '#1E1E1E',
    marginTop: 6,
  },
});

export default CategoryCard;
