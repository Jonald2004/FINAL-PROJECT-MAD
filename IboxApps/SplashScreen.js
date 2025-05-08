import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('SignUp'); // Navigasi ke halaman SignUp setelah 3 detik
    }, 3000);

    return () => clearTimeout(timeout); // Bersihkan timeout jika component di-unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/LogoiBoxAPPS.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    top: -70,
  },
});

export default SplashScreen;
