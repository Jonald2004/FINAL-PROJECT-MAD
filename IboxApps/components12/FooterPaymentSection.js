import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const FooterPaymentSection = () => {
  return (
    <View style={styles.container}>
      {/* Social Media Icons */}
      <View style={styles.socialContainer}>
        <Image
          source={require('../../assets/Ikon/Icon8.png')}
          style={styles.fullSocialImage}
          resizeMode="contain"
        />
      </View>

      {/* Payment Methods */}
      <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
      <Image
        source={require('../../assets/Ikon/Icon9.png')}
        style={styles.fullGridImage}
        resizeMode="contain"
      />

      {/* Shipping Partners */}
      <Text style={styles.sectionTitle}>Jasa Pengiriman</Text>
      <Image
        source={require('../../assets/Ikon/Icon10.png')}
        style={styles.shippingImage}
        resizeMode="contain"
      />

      {/* Description */}
      <Text style={styles.description}>
        iBox adalah Apple Premium Reseller terkemuka di Indonesia yang
        mengkhususkan diri dalam produk-produk Apple dan berbagai macam
        aksesoris pelengkap, software dan produk lainnya
      </Text>
      <Text style={styles.copyright}>
        Copyright © 2024 iBox. All rights reserved.
      </Text>

      {/* Floating Chat Button */}
      <TouchableOpacity style={styles.floatingChat}>
        <Image
          source={require('../../assets/Ikon/Icon11.png')}
          style={styles.chatIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    position: 'relative',
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  fullSocialImage: {
    width: 350,
    height: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  fullGridImage: {
    width: width - 32,
    height: 250,
    alignSelf: 'center',
  },
  shippingImage: {
    width: width - 100,
    height: 35,
    alignSelf: 'center',
    marginBottom: 24,
  },
  description: {
    textAlign: 'center',
    color: '#555',
    fontSize: 13,
    marginTop: 24,
    lineHeight: 18,
    paddingHorizontal: 8,
  },
  copyright: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 12,
    marginTop: 10,
  },
  floatingChat: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0071E7',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  chatIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
    resizeMode: 'contain',
  },
});

export default FooterPaymentSection;
