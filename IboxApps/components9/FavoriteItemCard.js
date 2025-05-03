import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const favoriteItems = [
  {
    title: 'iPhone 15 128GB Blue',
    image: require('../../assets/FavoritePage/FP11.png'),
  },
  {
    title: 'iMac',
    image: require('../../assets/FavoritePage/FP12.png'),
  },
  {
    title: 'Apple Watch Series 10',
    image: require('../../assets/FavoritePage/FP13.png'),
  },
  {
    title: 'Mac mini',
    image: require('../../assets/FavoritePage/FP14.png'),
  },
];

const FavoriteItemCard = () => {
  return (
    <View style={styles.wrapper}>
      {favoriteItems.map((item, index) => (
        <View style={styles.card} key={index}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Beli sekarang</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2F74F8',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default FavoriteItemCard;
