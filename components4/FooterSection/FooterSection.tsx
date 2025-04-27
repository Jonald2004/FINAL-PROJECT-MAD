import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import PaymentShipping from './PaymentShipping';

const FooterSection: React.FC = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.navSection}>
        <Text style={styles.navItem}>Belanja</Text>
        <Text style={styles.navItem}>Layanan</Text>
        <Text style={styles.navItem}>Tentang iBox</Text>
        <Text style={styles.navItem}>Kebijakan</Text>
      </View>

      <ContactInfo />
      <SocialLinks />
      <PaymentShipping />

      <View style={styles.copyrightSection}>
        <Text style={styles.description}>
          iBox adalah Apple Premium Reseller terkemuka di Indonesia yang
          mengkhususkan diri dalam produk-produk Apple dan berbagai macam
          aksesoris pelengkap, software dan produk lainnya
        </Text>
        <Text style={styles.copyright}>
          Copyright © 2024 iBox. All rights reserved.
        </Text>
        <View style={styles.separator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 204,
    paddingBottom: 41,
  },
  navSection: {
    width: 350,
    maxWidth: '100%',
    alignSelf: 'center',
  },
  navItem: {
    fontFamily: 'Inter',
    fontSize: 18,
    color: '#121212',
    fontWeight: '600',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
  },
  copyrightSection: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 41,
  },
  description: {
    fontSize: 10,
    color: '#121212',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    lineHeight: 15,
  },
  copyright: {
    fontSize: 10,
    color: '#6E6E73',
    textAlign: 'center',
    paddingHorizontal: 74,
    paddingBottom: 13,
    lineHeight: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    width: '100%',
  },
});

export default FooterSection;
