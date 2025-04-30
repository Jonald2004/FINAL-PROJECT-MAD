import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface MacProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

const MacProductCard: React.FC<MacProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
}) => {
  return (
    <View style={styles.container}>
      {' '}
      {/* Removed accessibilityRole="article" */}
      <Image
        source={{uri: imageUrl}}
        style={styles.image}
        accessibilityLabel={`${title} product image`}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity
        style={styles.button}
        accessibilityRole="button"
        accessibilityLabel={`Beli sekarang ${title}`}>
        <Text style={styles.buttonText}>Beli sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    marginVertical: 14,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Public Sans',
    fontSize: 40,
    color: '#1E1E1E',
    marginTop: 9,
    fontWeight: '600',
  },
  description: {
    color: '#6E6E73',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 9,
  },
  price: {
    color: '#6E6E73',
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    borderRadius: 25,
    borderColor: 'rgba(0, 113, 227, 0.5)',
    borderWidth: 1,
    marginTop: 17,
    paddingHorizontal: 41,
    paddingVertical: 12,
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default MacProductCard;
