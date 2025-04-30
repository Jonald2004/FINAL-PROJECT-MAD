import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FooterCopyright = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>
        iBox adalah Apple Premium Reseller terkemuka di Indonesia yang
        mengkhususkan diri dalam produk-produk Apple dan berbagai macam
        aksesoris pelengkap, software dan produk lainnya
      </Text>
      <Text style={styles.copyright}>
        Copyright © 2024 iBox. All rights reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  desc: {
    fontSize: 12,
    color: '#6E6E73',
    textAlign: 'center',
    marginBottom: 16,
  },
  copyright: {
    fontSize: 10,
    color: '#6E6E73',
    textAlign: 'center',
  },
});

export default FooterCopyright;
