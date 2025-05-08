import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {launchImageLibrary} from 'react-native-image-picker';

const AccountDropdownHeader = () => {
  const [selected, setSelected] = useState('dashboard');
  const [profileImage, setProfileImage] = useState(null); // Menyimpan gambar profil

  // Fungsi untuk memilih gambar
  const chooseImage = () => {
    launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setProfileImage(response.assets[0].uri); // Menyimpan URL gambar
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Gambar Profil */}
      <TouchableOpacity
        onPress={chooseImage}
        style={styles.profileImageWrapper}>
        <Image
          source={
            profileImage ? {uri: profileImage} : require('../../assets/73.png')
          }
          style={styles.profileImage}
        />
      </TouchableOpacity>

      {/* Nama dan Username */}
      <View style={styles.pickerWrapper}>
        <Text style={styles.title}>Dashboard akun</Text>
        <Text style={styles.username}>Immanuela Griffin</Text>
      </View>

      {/* Picker di bawah nama pengguna */}
      <Picker
        selectedValue={selected}
        onValueChange={itemValue => setSelected(itemValue)}
        style={styles.dropdown}
        dropdownIconColor="#333"
        mode="dropdown">
        <Picker.Item label="Dashboard akun" value="dashboard" />
        <Picker.Item label="Riwayat pesanan" value="orders" />
        <Picker.Item label="Pengaturan akun" value="settings" />
        <Picker.Item label="Log-out" value="out" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    alignItems: 'center', // Menyelaraskan elemen di tengah
  },
  profileImageWrapper: {
    marginBottom: 16,
    borderRadius: 50, // Membuat gambar profil bulat
    overflow: 'hidden', // Untuk memastikan gambar tidak keluar dari lingkaran
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50, // Membuat gambar profil bulat
    resizeMode: 'cover',
  },
  pickerWrapper: {
    marginBottom: 16,
    alignItems: 'center', // Menyelaraskan nama dan username ke tengah
  },
  dropdown: {
    width: '100%',
    height: Platform.OS === 'ios' ? undefined : 50,
    color: '#000',
    fontSize: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
});

export default AccountDropdownHeader;
