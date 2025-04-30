import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const WarningBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      {' '}
      {/* Removed accessibilityRole="article" */}
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3014484d7ed62603afbe5b135f26d53d5f135766?placeholderIfAbsent=true',
        }}
        style={styles.image}
        accessibilityLabel="Warning banner image"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Waspada terhadap upaya penipuan yang mengatasnamakan iBox. Info
          selengkapnya, <Text style={styles.link}>klik di sini</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 440,
    height: 35,
    resizeMode: 'contain',
  },
  textContainer: {
    paddingHorizontal: 70,
    paddingVertical: 15,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
  },
  link: {
    color: '#C6C5C5',
  },
});

export default WarningBanner;
