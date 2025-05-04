import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Ikon/Icon24.png')}
        style={styles.icon}
      />
      <TextInput
        placeholder="Cari produk"
        style={styles.input}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingHorizontal: 12,
    margin: 16,
    borderRadius: 12,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#999',
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
});

export default SearchBar;
