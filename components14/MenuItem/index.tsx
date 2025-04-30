import * as React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface MenuItemProps {
  text: string;
  imageUrl: string;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({text, imageUrl, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Navigate to ${text}`}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Image
          source={{uri: imageUrl}}
          style={styles.image}
          accessibilityRole="image"
          accessibilityLabel={`${text} icon`}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(0, 0, 0, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    zIndex: 10,
    display: 'flex',
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 22,
    paddingBottom: 22,
    alignItems: 'stretch',
    gap: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
  },
  image: {
    aspectRatio: 1.27,
    width: 28,
    height: undefined,
  },
});
export default MenuItem;
