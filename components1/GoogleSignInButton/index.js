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
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fd60cc76d7163cb1d656f77733995192fb434610?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.icon}
          accessibilityLabel="Google icon"
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
  icon: {
    width: 11,
    height: 15,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'rgba(110, 110, 115, 1)',
    fontWeight: '500',
  },
});
