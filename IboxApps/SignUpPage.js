import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {CustomInput} from './components1/CustomInput';
import {CustomButton} from './components1/CustomButton';
import {GoogleSignInButton} from './components1/GoogleSignUpButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const SignUpPage = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsPress = () => {
    Linking.openURL('https://your-terms-url.com');
  };

  const handleSignUp = async () => {
    if (!termsAccepted) {
      Alert.alert(
        'Peringatan',
        'Anda harus menyetujui syarat dan ketentuan terlebih dahulu.',
      );
      return;
    }

    if (!email || !password) {
      Alert.alert('Peringatan', 'Email dan password wajib diisi.');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;

      // Simpan ke Realtime Database
      await database().ref(`/users/${user.uid}`).set({
        firstName,
        lastName,
        phone,
        email,
      });

      Alert.alert('Sukses', 'Pendaftaran berhasil!');
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Gagal', 'Email sudah digunakan');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Gagal', 'Format email tidak valid');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Gagal', 'Password terlalu lemah (minimal 6 karakter)');
      } else {
        Alert.alert('Gagal', error.message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.backText}>← Kembali ke halaman masuk</Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/LogoiBoxAPPS.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Daftar Akun</Text>

        <CustomInput
          label="Nama depan"
          value={firstName}
          onChangeText={setFirstName}
        />
        <CustomInput
          label="Nama belakang"
          value={lastName}
          onChangeText={setLastName}
        />
        <CustomInput
          label="No. handphone"
          value={phone}
          onChangeText={setPhone}
        />
        <CustomInput label="Email" value={email} onChangeText={setEmail} />
        <CustomInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.termsContainer}>
          <TouchableOpacity
            style={[styles.checkbox, termsAccepted && styles.checkboxChecked]}
            onPress={() => setTermsAccepted(!termsAccepted)}>
            {termsAccepted && <Icon name="check" size={16} color="#fff" />}
          </TouchableOpacity>

          <Text style={styles.termsText}>
            Dengan mendaftar, kamu setuju dengan{' '}
            <Text style={styles.termsLink} onPress={handleTermsPress}>
              Syarat, Ketentuan, dan Privasi kami.
            </Text>
          </Text>
        </View>

        <CustomButton
          title="Daftar akun"
          onPress={handleSignUp}
          style={styles.signUpButton}
        />

        <View style={styles.divider} />
        <Text style={styles.orText}>ATAU</Text>
        <View style={styles.divider} />

        <GoogleSignInButton onPress={() => {}} />

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{color: '#0071E7', fontSize: 12, marginTop: 16}}>
            Sudah punya akun? Masuk di sini
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  backText: {
    alignSelf: 'flex-start',
    marginBottom: 12,
    color: '#0071E7',
    fontSize: 12,
  },
  logo: {
    width: 98,
    height: 19,
    marginBottom: 40,
    alignSelf: 'flex-start',
    marginLeft: 23,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 20,
    fontFamily: 'Public Sans',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 10,
    width: '100%',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#C6C5C5',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#0071E7',
    borderColor: '#0071E7',
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#6E6E73',
  },
  termsLink: {
    color: '#0071E7',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    marginTop: 33,
    width: 150,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
  },
  divider: {
    width: '40%',
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 20,
  },
  orText: {
    fontSize: 12,
    color: '#C6C5C5',
    fontFamily: 'Roboto',
    marginBottom: 20,
  },
});

export default SignUpPage;
