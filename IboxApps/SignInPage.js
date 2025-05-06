import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {InputField} from './components2/InputField';
import {Button} from './components2/Button';
import {GoogleSignInButton} from './components2/GoogleSignUpButton';

const SignInPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fungsi login
  const handleLogin = () => {
    console.log('Login attempt:', {email, password});
    navigation.navigate('Home');
  };

  // Navigasi ke halaman SignUp
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoWrapper}>
        <Image
          source={require('../assets/LogoiBoxAPPS.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Judul */}
      <Text style={styles.title}>Masuk</Text>

      {/* Form */}
      <View style={styles.formContainer}>
        <InputField
          placeholder="Email atau no. handphone"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Lupa password?</Text>
        </TouchableOpacity>

        <Button
          title="Masuk"
          onPress={handleLogin}
          style={styles.loginButton}
        />

        <TouchableOpacity onPress={goToSignUp} style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Daftar akun</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.orText}>ATAU</Text>
          <View style={styles.divider} />
        </View>

        <GoogleSignInButton onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 23,
    paddingTop: 45,
    backgroundColor: '#fff',
  },
  logoWrapper: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  logo: {
    width: 98,
    height: 19,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'Public Sans',
    color: '#1E1E1E',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#0071E7',
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '500',
  },
  loginButton: {
    marginTop: 10,
    width: 150,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
  },
  signUpContainer: {
    marginTop: 15,
    alignSelf: 'center',
  },
  signUpText: {
    color: '#0071E7',
    fontSize: 12,
    fontWeight: '500',
  },
  footerContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#C6C5C5',
    fontFamily: 'Roboto',
  },
});

export default SignInPage;
