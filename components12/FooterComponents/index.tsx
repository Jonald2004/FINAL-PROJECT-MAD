import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

export const FooterContact: React.FC = () => {
  return (
    <View style={styles.contactContainer}>
      <ContactItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f97ef3285a0b7c0b80e0df0e9900021d8782002d?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        text="Jam 09:00 - 18:00"
      />
      <ContactItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cafefe4dc51f482f10d22351cc23126847d422a8?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        text="Email: customercare@erajaya.com"
        isLink
      />
      <ContactItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae0982cd88d00dd11a11b11af9789bad9b621a2?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        text="Contact Center: 1500372"
        isLink
      />
      <ContactItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/051b5d579b616e45c35d8af74af39b15c3b231df?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        text="WhatsApp: 0812 9077 7722"
        isLink
      />
    </View>
  );
};

export const ContactItem: React.FC<{
  icon: string;
  text: string;
  isLink?: boolean;
}> = ({icon, text, isLink}) => {
  return (
    <View style={styles.contactItem}>
      <Image
        source={{uri: icon}}
        style={styles.contactIcon}
        accessibilityLabel="Contact icon"
      />
      <Text style={[styles.contactText, isLink && styles.linkText]}>
        {text}
      </Text>
    </View>
  );
};

export const FooterSocial: React.FC = () => {
  const socialIcons = [
    {
      url: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c355d1dfbabbea6d6b588a479e20567ed68ef503?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      name: 'Twitter',
    },
    {
      url: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13c2d54d52c47477759a2e15adc9e6de425e01bf?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      name: 'Facebook',
    },
    {
      url: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90ca4d57f4c0cada07b81e2ddc57101e22a7a506?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      name: 'Instagram',
    },
    {
      url: 'https://cdn.builder.io/api/v1/image/assets/TEMP/02f30ae4378dad89526041d7eff9dcb524348986?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      name: 'Youtube',
    },
    {
      url: 'https://cdn.builder.io/api/v1/image/assets/TEMP/67904561c0d204c4f34b724804ea9e16839d9dd6?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      name: 'TikTok',
    },
    {
      url: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6ad4b476607d3bdb0b404e87e64e58c518844a23?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
      name: 'WhatsApp',
    },
  ];

  return (
    <View style={styles.socialContainer}>
      {socialIcons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          style={styles.socialIcon}
          accessibilityLabel={`${icon.name} link`}>
          <Image
            source={{uri: icon.url}}
            style={styles.socialIconImage}
            accessibilityLabel={`${icon.name} icon`}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const FooterPayment: React.FC = () => {
  return (
    <View style={styles.paymentContainer}>
      <Text style={styles.paymentTitle}>Metode Pembayaran</Text>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb8d0a152e07d677b429eae272d03b5cf7c0a435?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
        }}
        style={styles.paymentImage}
        accessibilityLabel="Payment methods"
      />
    </View>
  );
};

export const FooterShipping: React.FC = () => {
  return (
    <View style={styles.shippingContainer}>
      <Text style={styles.shippingTitle}>Jasa Pengiriman</Text>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3ac33abb17e3eab5d35813aa6ddf5944069999?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
        }}
        style={styles.shippingImage}
        accessibilityLabel="Shipping methods"
      />
    </View>
  );
};

export const FooterCopyright: React.FC = () => {
  return (
    <View style={styles.copyrightContainer}>
      <Text style={styles.copyrightText}>
        iBox adalah Apple Premium Reseller terkemuka di Indonesia yang
        mengkhususkan diri dalam produk-produk Apple dan berbagai macam
        aksesoris pelengkap, software dan produk lainnya
      </Text>
      <Text style={styles.copyrightYear}>
        Copyright © 2024 iBox. All rights reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    padding: 24,
    gap: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactIcon: {
    width: 16,
    height: 16,
  },
  contactText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#464646',
  },
  linkText: {
    color: '#0071E3',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    paddingHorizontal: 57,
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  socialIconImage: {
    width: '100%',
    height: '100%',
  },
  paymentContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  paymentTitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#121212',
  },
  paymentImage: {
    width: 412,
    height: 234,
    resizeMode: 'contain',
  },
  shippingContainer: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 78,
  },
  shippingTitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#121212',
  },
  shippingImage: {
    width: 195,
    height: 35,
    resizeMode: 'contain',
    marginTop: 16,
  },
  copyrightContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    marginTop: 24,
    paddingVertical: 41,
  },
  copyrightText: {
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#121212',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  copyrightYear: {
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#6E6E73',
    textAlign: 'center',
    paddingHorizontal: 74,
    paddingBottom: 13,
  },
});
