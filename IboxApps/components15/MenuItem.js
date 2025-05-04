import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const MenuItem = ({title, onPress, background = '#fff', isLogin = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, {backgroundColor: background}]}>
      <View style={styles.left}>
        {isLogin && (
          <Image
            source={require('../../assets/Ikon/Icon26.png')}
            style={styles.icon}
          />
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
      {!isLogin && (
        <Image
          source={require('../../assets/Ikon/Icon25.png')}
          style={styles.chevron}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#000',
    marginRight: 10,
  },
  chevron: {
    width: 16,
    height: 16,
    tintColor: '#666',
  },
});

export default MenuItem;
