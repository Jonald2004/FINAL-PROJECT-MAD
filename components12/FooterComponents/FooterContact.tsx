import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const FooterContact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Informasi Kontak</Text>

      <View style={styles.contactRow}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1c8a909403e534e981f7020bca2017f5972f031e',
          }}
          style={styles.icon}
        />
        <Text style={styles.text}>Jam 09:00 - 18:00</Text>
      </View>

      <View style={styles.contactRow}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90b94d6505926ca6563e93ed91340b63113d82ed',
          }}
          style={styles.icon}
        />
        <Text style={styles.text}>
          Email: <Text style={styles.link}>customercare@erajaya.com</Text>
        </Text>
      </View>

      <View style={styles.contactRow}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/71b1b5ef5d21fc91570d75826788a302b6c58c30',
          }}
          style={styles.icon}
        />
        <Text style={styles.text}>Contact Center: 1500372</Text>
      </View>

      <View style={styles.contactRow}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c62e969858daddf9e5610586d0d2dc98c982f234',
          }}
          style={styles.icon}
        />
        <Text style={styles.text}>WhatsApp: 0812 9077 7722</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#121212',
    marginBottom: 16,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: '#464646',
  },
  link: {
    color: '#0071E3',
  },
});

export default FooterContact;
