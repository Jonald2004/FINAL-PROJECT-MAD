import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import SearchBar from './components15/SearchBar';
import MenuItem from './components15/MenuItem';

const menuItems = [
  {title: 'Mac', navigateTo: 'SemuaMac'},
  {title: 'iPad', navigateTo: 'SemuaIpad'},
  {title: 'iPhone', navigateTo: 'SemuaIphone'},
  {title: 'Watch', navigateTo: 'SemuaWatch'},
  {title: 'Music', navigateTo: 'SemuaMusic'},
  {title: 'Aksesorii', navigateTo: 'SemuaAksesorii'},
  {title: 'Layanan', navigateTo: 'Layanan'},
  {title: 'Event & Promo', navigateTo: 'EventPromo'},
  {title: 'Toko', navigateTo: 'Toko'},
  {title: 'Bisnis', navigateTo: 'Bisnis'},
  {title: 'Edukasi', navigateTo: 'Edukasi'},
];

const Menu = () => {
  const navigation = useNavigation(); // Initialize useNavigation

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            onPress={() => navigation.navigate(item.navigateTo)} // Navigate to corresponding page
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
