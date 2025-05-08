import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {/* Icon kiri */}
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image
            source={require('../../assets/Ikon/Icon1.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Icon kanan */}
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/Ikon/Icon2.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image
              source={require('../../assets/Ikon/Icon3.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Keranjang')}>
            <Image
              source={require('../../assets/Ikon/Icon4.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Logo tengah */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/LogoiBoxAPPS.png')}
            style={styles.logo}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    paddingTop: 12,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{translateX: -60}], // 60 = setengah dari width logo
    top: -8,
  },
  logo: {
    width: 120,
    height: 36,
    resizeMode: 'contain',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#D3D3D3',
    marginHorizontal: 6,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 5,
  },
});

export default Header;
