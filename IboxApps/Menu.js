import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SearchBar from './components15/SearchBar';
import MenuItem from './components15/MenuItem';

const menuItems = [
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'Music',
  'Aksesorii',
  'Layanan',
  'Event & Promo',
  'Toko',
  'Bisnis',
  'Edukasi',
];

const Menu = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item}
            onPress={() => console.log(item)}
          />
        ))}
        <MenuItem
          title="Masuk"
          icon="user"
          background="#f2f2f2"
          isLogin
          onPress={() => console.log('Masuk ditekan')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Menu;
