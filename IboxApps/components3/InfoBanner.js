import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InfoBanner = () => {
  return (
    <View style={styles.infoBanner}>
      <Text style={styles.infoText}>
        Waspada terhadap upaya penipuan yang{'\n'}
        mengatasnamakan iBox. Info selengkapnya,{' '}
        <Text style={styles.link}>klik di sini</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBanner: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  infoText: {color: 'white', fontSize: 12, textAlign: 'center', lineHeight: 16},
  link: {textDecorationLine: 'underline', fontWeight: '600'},
});

export default InfoBanner;
