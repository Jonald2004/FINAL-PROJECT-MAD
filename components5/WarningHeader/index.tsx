import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const WarningHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/268963d1218cf235dfa073dc6379b0f4fa2c8012?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
        }}
        style={styles.logo}
        accessibilityLabel="iBox logo"
      />
      <View style={styles.warningContainer}>
        <Text style={styles.warningText} accessibilityRole="alert">
          Waspada terhadap upaya penipuan yang mengatasnamakan iBox. Info
          selengkapnya, <Text style={styles.linkText}>klik di sini</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 41,
    paddingBottom: 18,
  },
  logo: {
    width: 440,
    aspectRatio: 12.5,
    resizeMode: 'contain',
  },
  warningContainer: {
    paddingHorizontal: 70,
    paddingVertical: 15,
  },
  warningText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
  },
  linkText: {
    color: 'rgba(198,197,197,1)',
  },
});
export default WarningHeader;
