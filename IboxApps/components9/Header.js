import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/Ikon/Icon1.png')}
        style={styles.icon}
      />

      <View style={styles.logoWrapper}>
        <Image
          source={require('../../assets/LogoiBoxAPPS.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.headerRight}>
        <Image
          source={require('../../assets/Ikon/Icon2.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../assets/Ikon/Icon3.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../assets/Ikon/Icon4.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    position: 'relative',
  },
  logoWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 5,
    alignItems: 'center',
    zIndex: 1,
  },
  logo: {width: 120, height: 36, resizeMode: 'contain'},
  icon: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#D3D3D3',
    marginHorizontal: 6,
  },
  headerRight: {flexDirection: 'row', alignItems: 'center', top: 5},
});

export default Header;
