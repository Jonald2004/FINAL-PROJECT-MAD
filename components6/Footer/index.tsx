import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.container} accessible={true}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/174c4bd6a472f70c73270403f80916301f28f45f?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
        }}
        style={styles.logo}
        accessibilityLabel="iBox logo"
      />

      <View style={styles.sections}>
        <Text style={styles.sectionTitle}>Belanja</Text>
        <Text style={styles.sectionTitle}>Layanan</Text>
        <Text style={styles.sectionTitle}>Tentang iBox</Text>
        <Text style={styles.sectionTitle}>Kebijakan</Text>
      </View>

      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2464177aafe90d095c3123626d7e3bb2a68c1c58?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
        }}
        style={styles.brandLogo}
        accessibilityLabel="Brand logo"
      />

      <View style={styles.contactInfo}>
        <View style={styles.contactItem}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1c8a909403e534e981f7020bca2017f5972f031e?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
            }}
            style={styles.icon}
            accessibilityLabel="Time icon"
          />
          <Text style={styles.contactText}>Jam 09:00 - 18:00</Text>
        </View>

        <View style={styles.contactItem}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90b94d6505926ca6563e93ed91340b63113d82ed?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
            }}
            style={styles.icon}
            accessibilityLabel="Email icon"
          />
          <Text style={styles.contactText}>
            Email: <Text style={styles.link}>customercare@erajaya.com</Text>
          </Text>
        </View>

        {/* Additional contact items */}
      </View>

      <View style={styles.socialLinks}>
        {/* Social media icons */}
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c355d1dfbabbea6d6b588a479e20567ed68ef503?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.socialIcon}
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13c2d54d52c47477759a2e15adc9e6de425e01bf?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.socialIcon}
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90ca4d57f4c0cada07b81e2ddc57101e22a7a506?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.socialIcon}
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/02f30ae4378dad89526041d7eff9dcb524348986?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.socialIcon}
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/88179e19c7c485013627965132ccee1de9c61aec?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.socialIcon}
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c5034602f6b2607580efb264e65b58f4b9224eb2?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.socialIcon}
        />
      </View>

      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>Metode Pembayaran</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb8d0a152e07d677b429eae272d03b5cf7c0a435?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.paymentMethods}
          accessibilityLabel="Payment methods"
        />
      </View>

      <View style={styles.shippingSection}>
        <Text style={styles.shippingTitle}>Jasa Pengiriman</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3ac33abb17e3eab5d35813aa6ddf5944069999?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.shippingMethods}
          accessibilityLabel="Shipping methods"
        />
      </View>

      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>
          iBox adalah Apple Premium Reseller terkemuka di Indonesia yang
          mengkhususkan diri dalam produk-produk Apple dan berbagai macam
          aksesoris pelengkap, software dan produk lainnya
        </Text>
        <Text style={styles.copyrightYear}>
          Copyright © 2024 iBox. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  logo: {
    width: 27,
    aspectRatio: 0.41,
    alignSelf: 'center',
  },
  sections: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter',
    color: '#121212',
    fontWeight: '600',
    lineHeight: 28,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
  },
  brandLogo: {
    width: 130,
    aspectRatio: 0.93,
    alignSelf: 'center',
    marginVertical: 56,
  },
  contactInfo: {
    paddingHorizontal: 48,
    paddingBottom: 24,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  contactText: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#464646',
  },
  link: {
    color: '#0071E3',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 40,
  },
});

export default Footer;
