import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MenuIcon from '../Menulcon';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity accessible accessibilityLabel="Menu">
        <MenuIcon />
      </TouchableOpacity>

      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b24cd8ff0a28172c47a15f84006f54842faede89?placeholderIfAbsent=true',
        }}
        style={styles.logo}
        accessibilityLabel="iBox Logo"
      />

      <View style={styles.actions}>
        <TouchableOpacity accessible accessibilityLabel="Shop">
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/58ba5bb0235cd1a22f176a4ece0ca2a7a2fe9a8e?placeholderIfAbsent=true',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity accessible accessibilityLabel="User Profile">
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/244c9f708fabef8cd73bce799a8af5b03ea2d4eb?placeholderIfAbsent=true',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity accessible accessibilityLabel="Shopping Bag">
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/316dcb6e075ee43ae7e195d993b571b4298c4ab6?placeholderIfAbsent=true',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 141,
    height: 28,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default Header;
