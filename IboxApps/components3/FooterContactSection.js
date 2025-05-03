import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

const FooterContactSection = () => {
  return (
    <View style={styles.container}>
      {/* Logo sertifikasi */}
      <View style={styles.logosContainer}>
        <Image source={require('../../assets/Logo3.png')} style={styles.logo} />
      </View>

      {/* Kontak */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.icon}>🕒</Text>
          <Text style={styles.infoText}>Jam 09:00 - 18:00</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.icon}>📧</Text>
          <Text style={styles.infoText}>
            Email :{' '}
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL('mailto:customercare@erajaya.com')
              }>
              customercare@erajaya.com
            </Text>
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.icon}>🎧</Text>
          <Text style={styles.infoText}>
            Contact Center :{' '}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('tel:1500372')}>
              1500372
            </Text>
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.icon}>💬</Text>
          <Text style={styles.infoText}>
            WhatsApp :{' '}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://wa.me/6281290777722')}>
              0812 9077 7722
            </Text>
          </Text>
        </View>
      </View>

      {/* Pengaduan Konsumen */}
      <View style={styles.complaintSection}>
        <Text style={styles.complaintTitle}>Layanan Pengaduan Konsumen</Text>
        <Text style={styles.complaintText}>
          Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
        </Text>
        <Text style={styles.complaintText}>
          Kementerian Perdagangan Republik Indonesia
        </Text>
        <Text style={styles.complaintText}>WhatsApp Ditjen PKTN:</Text>
        <Text style={styles.complaintBold}>0853-1111-1010</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#fff',
  },
  logosContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 24,
    gap: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 8,
    fontSize: 16,
    width: 20,
  },
  infoText: {
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
  },
  link: {
    color: '#0071E7',
  },
  complaintSection: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
    marginTop: 16,
  },
  complaintTitle: {
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  complaintText: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 4,
  },
  complaintBold: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default FooterContactSection;
