// components13/AlamatPengirimanCard.js
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const AlamatPengirimanCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../../assets/Ikon/Icon22.png')}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>Immanuela Griffin</Text>
            <Text style={styles.phone}>(+62) 821-2345-6789</Text>
          </View>
          <Text style={styles.address}>
            Universitas Klabat, Jalan Arnold Mononutu{'\n'}
            Airmadidi, Airmadidi Atas, Airmadidi{'\n'}
            (Gedung Administrasi) AIRMADIDI, KAB. MINAHASA UTARA, SULAWESI
            UTARA, ID 95371
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 12,
    marginTop: 4,
    tintColor: '#000',
  },
  textContainer: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  phone: {
    fontSize: 14,
    color: '#444',
  },
  address: {
    fontSize: 14,
    color: '#333',
  },
});

export default AlamatPengirimanCard;
