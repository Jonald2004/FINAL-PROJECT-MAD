import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

const NotificationBanner: React.FC = () => {
  const handlePress = () => {
    Linking.openURL('https://ibox.com/warning');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Waspada terhadap upaya penipuan yang mengatasnamakan iBox. Info
        selengkapnya,{' '}
        <Text onPress={handlePress} style={styles.link}>
          klik di sini
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0071E3',
    padding: 15,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
  },
  link: {
    color: '#C6C5C5',
  },
});

export default NotificationBanner;
