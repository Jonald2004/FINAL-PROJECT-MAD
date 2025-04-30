import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63a...'}}
        style={styles.icon}
      />
      <TextInput placeholder="Cari produk" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    fontSize: 14,
    flex: 1,
  },
});

export default SearchBar;
