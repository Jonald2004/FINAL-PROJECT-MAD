import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';

export const ContactInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <ContactItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1c8a909403e534e981f7020bca2017f5972f031e?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        text="Jam 09:00 - 18:00"
      />
      <ContactItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/90b94d6505926ca6563e93ed91340b63113d82ed?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        text="Email : customercare@erajaya.com"
        isLink
      />
      <ContactItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae0982cd88d00dd11a11b11af9789bad9b621a2?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        text="Contact Center : 1500372"
        isLink
      />
      <ContactItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7e474e39d7ab80fd9f4afc5c8a33d177315a7d94?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        text="WhatsApp : 0812 9077 7722"
        isLink
      />
    </View>
  );
};

interface ContactItemProps {
  icon: string;
  text: string;
  isLink?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({icon, text, isLink}) => {
  return (
    <View style={styles.item}>
      <Image
        source={{uri: icon}}
        style={styles.icon}
        accessibilityLabel="Contact icon"
      />
      <Text
        style={[styles.text, isLink && styles.linkText]}
        onPress={isLink ? () => Linking.openURL(`tel:${text}`) : undefined}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 144,
    paddingHorizontal: 48,
    paddingBottom: 24,
    gap: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 16,
    height: 16,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#464646',
    lineHeight: 21,
  },
  linkText: {
    color: 'rgba(0,113,227,1)',
  },
});
export default ContactInfo;
