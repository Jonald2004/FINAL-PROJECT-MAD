import React from 'react';
import {View, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const bannerImages = [
  require('../../assets/ImageHomePage/HP11.png'),
  require('../../assets/ImageHomePage/HP12.png'),
  require('../../assets/ImageHomePage/HP13.png'),
];

const BannerCarousel = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      decelerationRate="fast">
      {bannerImages.map((src, index) => (
        <View style={styles.card} key={index}>
          <Image source={src} style={styles.image} resizeMode="cover" />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {paddingHorizontal: 12},
  card: {
    width: width - 24,
    height: 230,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
  },
  image: {width: '100%', height: '100%', borderRadius: 12},
});

export default BannerCarousel;
