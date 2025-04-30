import React from 'react';
import {View, StyleSheet} from 'react-native';

const MenuIcon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <View style={styles.bar} />
      <View style={styles.bar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  bar: {
    width: 19,
    height: 2,
    backgroundColor: '#121212',
    borderRadius: 9999,
  },
});

export default MenuIcon;
