import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import {SocialLinks} from '../SocialLinks';
import {PaymentMethods} from '../PaymentMethods';
import {ContactInfo} from '../ContactInfo';

export const ShowcaseFooter: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sections}>
        {['Belanja', 'Layanan', 'Tentang iBox', 'Kebijakan'].map(
          (section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section}</Text>
            </View>
          ),
        )}
      </View>

      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2464177aafe90d095c3123626d7e3bb2a68c1c58?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
        }}
        style={styles.logo}
        accessibilityLabel="iBox logo"
      />

      <ContactInfo />
      <SocialLinks />
      <PaymentMethods />

      <View style={styles.companyInfo}>
        <Text style={styles.companyDescription}>
          iBox adalah Apple Premium Reseller terkemuka di Indonesia yang
          mengkhususkan diri dalam produk-produk Apple dan berbagai macam
          aksesoris pelengkap, software dan produk lainnya
        </Text>
        <Text style={styles.copyright}>
          Copyright © 2024 iBox. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 24,
  },
  sections: {
    width: 350,
    maxWidth: '100%',
  },
  section: {
    borderTopWidth: 1,
    borderColor: '#D9D9D9',
    paddingVertical: 20,
    paddingRight: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontSize: 18,
    color: '#121212',
    fontWeight: '600',
  },
  logo: {
    width: 130,
    aspectRatio: 0.93,
    alignSelf: 'center',
    marginVertical: 56,
  },
  companyInfo: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 24,
    marginTop: 24,
  },
  companyDescription: {
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#121212',
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 15,
  },
  copyright: {
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#6E6E73',
    textAlign: 'center',
    paddingTop: 12,
  },
});
export default ShowcaseFooter;
