import React from 'react';
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';
import ProfileDashboard from './components4/ProfileDashboard';
import FooterSection from './components4/FooterSection/FooterSection';

const AccountProfilePage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        {/* Header */}
        <Image
          accessibilityLabel="iBox logo"
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d64b6def3c4af18b6f873d69b08f9fcfa996aee5?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.headerLogo}
          resizeMode="contain"
        />

        <View style={styles.warningBanner}>
          <Text style={styles.warningText}>
            Waspada terhadap upaya penipuan yang mengatasnamakan iBox. Info
            selengkapnya, <Text style={styles.warningLink}>klik di sini</Text>
          </Text>
        </View>

        <View style={styles.content}>
          <ProfileDashboard />

          {/* Transactions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Transaksi berlangsung</Text>
            <Text style={styles.sectionText}>
              Tidak ada transaksi berlangsung.
            </Text>
          </View>

          {/* Address Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Alamat</Text>
            <Text style={styles.sectionText}>Belum ada alamat tersimpan.</Text>
          </View>

          <FooterSection />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    maxWidth: 480,
    width: '100%',
    alignSelf: 'center',
    paddingTop: 41,
  },
  headerLogo: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },
  warningBanner: {
    width: '100%',
    paddingHorizontal: 70,
    paddingVertical: 15,
    backgroundColor: '#000',
  },
  warningText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
  },
  warningLink: {
    color: '#C6C5C5',
  },
  content: {
    marginTop: 29,
    paddingHorizontal: 14,
  },
  section: {
    marginTop: 43,
  },
  sectionTitle: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginBottom: 17,
  },
  sectionText: {
    color: '#6E6E73',
    fontSize: 14,
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
});

export default AccountProfilePage;
