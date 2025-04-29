import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Linking} from 'react-native';

const socialLinks = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c355d1dfbabbea6d6b588a479e20567ed68ef503?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
    url: 'https://twitter.com/ibox',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13c2d54d52c47477759a2e15adc9e6de425e01bf?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
    url: 'https://facebook.com/ibox',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90ca4d57f4c0cada07b81e2ddc57101e22a7a506?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
    url: 'https://instagram.com/ibox',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/02f30ae4378dad89526041d7eff9dcb524348986?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
    url: 'https://youtube.com/ibox',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/88179e19c7c485013627965132ccee1de9c61aec?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
    url: 'https://tiktok.com/@ibox',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6e679838c97ee099a8298b09bad15cbbf5881c4b?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
    url: 'https://wa.me/081290777722',
  },
];

export const SocialLinks: React.FC = () => {
  return (
    <View style={styles.container}>
      {socialLinks.map((link, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => Linking.openURL(link.url)}
          accessibilityLabel={`Social media link ${index + 1}`}
          style={styles.iconContainer}>
          <Image
            source={{uri: link.icon}}
            style={styles.icon}
            accessibilityLabel={`Social media icon ${index + 1}`}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 57,
    gap: 24,
  },
  iconContainer: {
    width: 20,
    height: 20,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
export default SocialLinks;
