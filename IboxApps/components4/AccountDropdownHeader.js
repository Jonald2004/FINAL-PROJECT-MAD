import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';

const AccountDropdownHeader = () => {
  const [selected, setSelected] = useState('dashboard');
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  // Ambil nama dari Realtime Database
  useEffect(() => {
    const fetchUsername = async () => {
      const currentUser = auth().currentUser;
      if (currentUser) {
        try {
          const snapshot = await database()
            .ref(`/users/${currentUser.uid}`)
            .once('value');
          const data = snapshot.val();
          if (data?.firstName && data?.lastName) {
            setUsername(`${data.firstName} ${data.lastName}`);
          }
        } catch (error) {
          console.log('Gagal mengambil nama dari database:', error);
        }
      }
    };
    fetchUsername();
  }, []);

  const chooseImage = () => {
    launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
    } catch (error) {
      Alert.alert('Logout Gagal', error.message);
    }
  };

  const handleValueChange = value => {
    setSelected(value);
    if (value === 'out') {
      handleLogout();
    }
  };

  return (
    <View style={styles.container}>
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

      <View style={styles.pickerWrapper}>
        <Text style={styles.title}>Dashboard akun</Text>
        <Text style={styles.username}>{username}</Text>
      </View>

      <Picker
        selectedValue={selected}
        onValueChange={handleValueChange}
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
    alignItems: 'center',
  },
  profileImageWrapper: {
    marginBottom: 16,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  pickerWrapper: {
    marginBottom: 16,
    alignItems: 'center',
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
