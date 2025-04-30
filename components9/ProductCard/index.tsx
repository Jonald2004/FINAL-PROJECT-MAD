import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ProductCardProps {
  image: string;
  title: string;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({image, title, onPress}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: image}}
        style={styles.image}
        accessibilityLabel={title}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          accessible
          accessibilityLabel={`Beli sekarang ${title}`}>
          <Text style={styles.buttonText}>Beli sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: 155,
    height: 170,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Public Sans',
    fontSize: 20,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0071E3',
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default ProductCard;
