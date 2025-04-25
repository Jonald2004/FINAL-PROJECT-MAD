import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {CustomInput} from './components1/CustomInput';
import {CustomButton} from './components1/CustomButton';
import {GoogleSignInButton} from './components1/GoogleSignInButton';

export const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSignUp = () => {
    // Implement sign up logic
    console.log('Sign up pressed');
  };

  const handleGoogleSignIn = () => {
    // Implement Google sign in logic
    console.log('Google sign in pressed');
  };

  const handleTermsPress = () => {
    Linking.openURL('https://your-terms-url.com');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('./assets/LogoiBoxAPPS.png')}
          style={styles.googleIcon}
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
            style={styles.checkbox}
            onPress={() => setTermsAccepted(!termsAccepted)}
            accessibilityRole="checkbox"
            accessibilityState={{checked: termsAccepted}}>
            <View style={styles.checkboxInner} />
          </TouchableOpacity>

          <Text style={styles.termsText}>
            Dengan mendaftar, kamu setuju dengan{' '}
            <Text
              style={styles.termsLink}
              onPress={handleTermsPress}
              accessibilityRole="link">
              Syarat, Ketentuan, dan Privasi kami.
            </Text>
          </Text>
        </View>

        <CustomButton
          title="Daftar akun"
          onPress={handleSignUp}
          style={styles.signUpButton}
        />

        <Text style={styles.orText}>ATAU</Text>

        <GoogleSignInButton onPress={handleGoogleSignIn} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingLeft: 23,
    paddingRight: 72,
    paddingTop: 45,
    paddingBottom: 130,
    alignItems: 'center',
  },
  logo: {
    width: 98,
    height: 19,
    resizeMode: 'contain',
  },
  title: {
    color: 'rgba(30, 30, 30, 1)',
    fontSize: 32,
    fontFamily: 'Public Sans',
    fontWeight: '700',
    marginTop: 251,
    marginBottom: 28,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
    gap: 4,
    paddingHorizontal: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: 'rgba(198, 197, 197, 1)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: 'transparent',
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'rgba(110, 110, 115, 1)',
  },
  termsLink: {
    textDecorationLine: 'underline',
    color: 'rgba(0,113,231,1)',
  },
  signUpButton: {
    marginTop: 33,
    width: 111,
  },
  orText: {
    color: 'rgba(198, 197, 197, 1)',
    marginTop: 48,
    marginBottom: 47,
    fontSize: 12,
    fontFamily: 'Roboto',
  },
});

export default SignUpPage;
