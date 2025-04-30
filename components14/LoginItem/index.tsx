import * as React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface LoginItemProps {
  onPress?: () => void;
}

const LoginItem: React.FC<LoginItemProps> = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel="Login">
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef321b7ee723204055b1e1bed1abaccf2f760f02?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.image}
          accessibilityRole="image"
          accessibilityLabel="Login icon"
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Masuk</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(0, 0, 0, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 21,
    paddingBottom: 21,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    aspectRatio: 1,
    width: 24,
    height: undefined,
  },
  textContainer: {
    marginTop: 5,
    flex: 1,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
  },
});
export default LoginItem;
