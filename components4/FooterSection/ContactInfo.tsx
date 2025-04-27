import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ContactInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoItem}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b142cef616e9c8c69e78ee223cc834c4b94de5f?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.text}>Jam 09:00 - 18:00</Text>
      </View>

      <View style={styles.infoItem}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/201cb7b6ec2fbfeafa9e9f013b7083de99ed1b2c?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Email: <Text style={styles.link}>customercare@erajaya.com</Text>
        </Text>
      </View>

      <View style={styles.infoItem}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/42d255999b57aa47bca5505c1df0b592e74efac1?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Contact Center: <Text style={styles.link}>1500372</Text>
        </Text>
      </View>

      <View style={styles.infoItem}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bbf2d7d5b5f16c566c6155dd1cd47905aeec7453?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          WhatsApp: <Text style={styles.link}>0812 9077 7722</Text>
        </Text>
      </View>

      <View style={styles.complaintService}>
        <Text style={styles.complaintTitle}>Layanan Pengaduan Konsumen</Text>
        <Text style={styles.complaintText}>
          Direktorat Jenderal Perlindungan Konsumen dan{'\n'}
          Tertib Niaga{'\n'}
          Kementerian Perdagangan Republik Indonesia{'\n'}
          WhatsApp Ditjen PKTN:{'\n'}
          0853-1111-1010
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 144,
    paddingHorizontal: 48,
    paddingBottom: 24,
    marginTop: 56,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#464646',
    lineHeight: 21,
  },
  link: {
    color: '#0071E3',
  },
  complaintService: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  complaintTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#464646',
    textAlign: 'center',
    marginBottom: 16,
  },
  complaintText: {
    fontSize: 14,
    color: '#464646',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default ContactInfo;
