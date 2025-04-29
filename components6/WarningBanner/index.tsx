import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const WarningBanner: React.FC = () => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.text}>
        Waspada terhadap upaya penipuan yang mengatasnamakan iBox. Info
        selengkapnya, <Text style={styles.link}>klik di sini</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 70,
    paddingVertical: 15,
    backgroundColor: '#0071E3',
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
