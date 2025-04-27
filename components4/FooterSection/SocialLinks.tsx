import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const SocialLinks: React.FC = () => {
  const socialIcons = [
    {
      uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bd8258d8e8a678fc123dd83fb9ebf974b611700c?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      key: 'twitter',
    },
    {
      uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c5b47fdb00fb61cea6a418ae1d023935f2e7876?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      key: 'facebook',
    },
    {
      uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/78824193cae6c0ae654f744eed2d557d4248fae8?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      key: 'instagram',
    },
    {
      uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b481198c496610e9afec06f1219e2eea9981f8f3?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      key: 'youtube',
    },
    {
      uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/46b9b09c5d2a1d265bcab88424d044c79ed5b28a?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      key: 'tiktok',
    },
    {
      uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1d4e4249da3bdcaa970e0964dcf7d7f2dffbebde?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      key: 'whatsapp',
    },
  ];

  return (
    <View style={styles.container}>
      {socialIcons.map(icon => (
        <TouchableOpacity
          key={icon.key}
          style={styles.iconContainer}
          accessibilityLabel={`Visit our ${icon.key} page`}>
          <Image
            source={{uri: icon.uri}}
            style={styles.icon}
            resizeMode="contain"
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
    alignItems: 'center',
    paddingHorizontal: 57,
    gap: 24,
  },
  iconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default SocialLinks;
