import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const DeliveryInfoSection = () => {
  return (
    <View style={styles.container}>
      {/* Dikirim ke */}
      <Text style={styles.sectionTitle}>Dikirim ke</Text>
      <TouchableOpacity
        style={styles.alertBox}
        onPress={() => navigation.navigate('AlamatPage')} // ganti dengan nama screen kamu
        activeOpacity={0.8}>
        <Image
          source={require('../../assets/Ikon/Icon18.png')}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.alertTitle}>
            Belum ada alamat yang disimpan. Isi alamat
          </Text>
        </View>
      </TouchableOpacity>

      {/* Jasa Pengiriman */}
      <Text style={styles.subHeading}>Jasa pengiriman</Text>
      <View style={styles.infoRow}>
        <Image
          source={require('../../assets/Ikon/Icon19.png')}
          style={styles.grayIcon}
        />
        <Text style={styles.infoText}>
          Masukkan alamat pengiriman untuk melihat biaya pengiriman.
        </Text>
      </View>

      {/* Jasa Layanan */}
      <Text style={styles.subHeading}>Jasa layanan</Text>
      <View style={styles.infoRow}>
        <Image
          source={require('../../assets/Ikon/Icon19.png')}
          style={styles.grayIcon}
        />
        <Text style={styles.infoText}>
          Pilih jasa pengiriman untuk melihat jenis layanan.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    color: '#0071E7',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  alertBox: {
    backgroundColor: '#FFF4F4',
    borderColor: '#DE3B3B',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  alertTitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  grayIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    marginTop: 3,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
});

export default DeliveryInfoSection;
