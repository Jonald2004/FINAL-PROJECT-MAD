import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from '../Button';

interface HighlightCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <View style={styles.container} accessible>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>
      <Button title="Beli sekarang" onPress={() => {}} />
      <Image
        source={{uri: image}}
        style={styles.image}
        accessibilityLabel={title}
      />
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
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Public Sans',
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
