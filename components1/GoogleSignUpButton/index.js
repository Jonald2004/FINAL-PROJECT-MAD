import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface GoogleSignInButtonProps {
  onPress: () => void;
}

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Sign in with Google">
      <View style={styles.content}>
        <Image
          source={require('../../assets/GoogleLogo.png')}
          style={styles.googleIcon}
          resizeMode="contain"
        />
        <Text style={styles.text}>Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderColor: 'rgba(110, 110, 115, 1)',
    borderWidth: 1,
    width: 296,
    maxWidth: '100%',
    paddingHorizontal: 70,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  googleIcon: {
    width: 18,
    height: 18,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'rgba(110, 110, 115, 1)',
    fontWeight: '500',
  },
});
