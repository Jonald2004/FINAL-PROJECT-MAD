import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Detail = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Favorite'); // Pastikan nama ini sesuai dengan Stack.Screen name Anda
  };

  return (
    <TouchableOpacity style={styles.linkContainer} onPress={handlePress}>
      <Text style={styles.link}>Lihat Favoritmu</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  link: {
    color: '#0071E7',
    fontSize: 16,
    fontWeight: '600',
    top: 300, // pertimbangkan untuk sesuaikan ini dengan layout agar tidak terlalu turun
  },
});

export default Detail;
