import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const AddressPreview: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/12e37fcb65ec8b93e0b8fb38cd75e076932fe268?placeholderIfAbsent=true',
          }}
          style={styles.icon}
        />
        <View style={styles.dot} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Contoh: Jl. Bandengan Selatan No. 11, RT.11/RW.5
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {
    position: 'relative',
    width: 30,
    aspectRatio: 0.492,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 9,
    paddingBottom: 38,
  },
  icon: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  dot: {
    borderRadius: 50,
    width: 14,
    height: 14,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: '#121212',
    fontSize: 16,
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
});

export default AddressPreview;
