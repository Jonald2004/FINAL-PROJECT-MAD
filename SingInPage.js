import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {LogoSection} from './components2/LogoSection';
import {InputField} from './components2/InputField';
import {Button} from './components2/Button';
import {Divider} from './components2/Divider';

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
  };

  const handleSignUp = () => {
    // Handle sign up logic
  };

  return (
    <View style={styles.container}>
      <LogoSection />

      <Text style={styles.title}>Masuk</Text>

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

        <TouchableOpacity
          onPress={handleForgotPassword}
          style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Lupa password?</Text>
        </TouchableOpacity>

        <Button
          title="Masuk"
          onPress={handleLogin}
          style={styles.loginButton}
        />

        <TouchableOpacity onPress={handleSignUp} style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Daftar akun</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Divider />

        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}>
          <View style={styles.googleButtonContent}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32850a971c695f9972f9751f58ac45a95bc7ef18?placeholderIfAbsent=true&apiKey=7eb232b930d84f9dbc8482e438a7b67a',
              }}
              style={styles.googleIcon}
              resizeMode="contain"
            />
            <Text style={styles.googleButtonText}>Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingLeft: 23,
    paddingRight: 72,
    paddingTop: 45,
    paddingBottom: 130,
    fontFamily: 'Roboto',
  },
  title: {
    color: 'rgba(30, 30, 30, 1)',
    fontSize: 32,
    fontFamily: 'Public Sans',
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 251,
  },
  formContainer: {
    gap: 7,
    marginTop: 28,
  },
  forgotPassword: {
    marginLeft: 49,
    marginTop: 7,
  },
  forgotPasswordText: {
    color: 'rgba(0, 113, 231, 1)',
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '500',
  },
  loginButton: {
    marginTop: 18,
    alignSelf: 'center',
  },
  signUpContainer: {
    marginTop: 18,
    alignItems: 'center',
  },
  signUpText: {
    color: 'rgba(0, 113, 227, 1)',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  footerContainer: {
    marginTop: 174,
  },
  googleButton: {
    borderRadius: 4,
    borderColor: 'rgba(110, 110, 115, 1)',
    borderWidth: 1,
    marginTop: 47,
    width: 296,
    maxWidth: '100%',
    paddingHorizontal: 70,
    paddingVertical: 9,
    alignItems: 'center',
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  googleIcon: {
    width: 11,
    aspectRatio: 0.73,
  },
  googleButtonText: {
    color: 'rgba(110, 110, 115, 1)',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default SignInPage;
