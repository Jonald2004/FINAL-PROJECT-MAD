import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import SearchBar from './components14/SearchBar';
import LoginItem from './components14/LoginItem';
import MenuItem from './components14/MenuItem';

const MenuHamburgerPage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        <SearchBar />

        <LoginItem onPress={() => console.log('Login pressed')} />

        <View style={styles.menuItems}>
          <MenuItem
            text="Mac"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('Mac clicked')}
          />
          <MenuItem
            text="iPad"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('iPad clicked')}
          />
          <MenuItem
            text="iPhone"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('iPhone clicked')}
          />
          <MenuItem
            text="Watch"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('Watch clicked')}
          />
          <MenuItem
            text="Music"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('Music clicked')}
          />
          <MenuItem
            text="Aksesoris"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('Aksesoris clicked')}
          />
          <MenuItem
            text="Layanan"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('Layanan clicked')}
          />
          <MenuItem
            text="Event & Promo"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('Event clicked')}
          />
          <MenuItem
            text="Toko"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('Toko clicked')}
          />
          <MenuItem
            text="Bisnis"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('Bisnis clicked')}
          />
          <MenuItem
            text="Edukasi"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/arrow.png"
            onPress={() => console.log('Edukasi clicked')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    paddingVertical: 10,
  },
  menuItems: {
    marginTop: 10,
  },
});

export default MenuHamburgerPage;
