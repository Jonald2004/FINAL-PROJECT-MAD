import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import Button from '../Button';

interface HighlightCardProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button title="Beli sekarang" onPress={() => {}} />
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 44,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#1E1E1E',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
    textAlign: 'center',
    marginTop: 15,
  },
  image: {
    width: 214,
    aspectRatio: 1.69,
    resizeMode: 'contain',
    marginTop: 15,
  },
});

export default HighlightCard;
