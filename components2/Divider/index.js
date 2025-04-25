import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Divider: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ATAU</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    color: 'rgba(198, 197, 197, 1)',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
});
