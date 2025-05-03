import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const AccountStatusCard = () => {
  return (
    <View style={styles.container}>
      {/* Status Member */}
      <View style={styles.card}>
        <Image
          source={require('../../assets/Ikon/Icon12.png')}
          style={styles.icon}
        />
        <Text style={styles.label}>Status member</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Lihat detail</Text>
        </TouchableOpacity>
      </View>

      {/* Poin MyEraSpace */}
      <View style={styles.card}>
        <Image
          source={require('../../assets/Ikon/Icon13.png')}
          style={styles.icon}
        />
        <Text style={styles.label}>Poin MyEraSpace</Text>
        <Text style={styles.point}>0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  link: {
    color: '#0071E7',
    fontSize: 13,
    fontWeight: '600',
  },
  point: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
  },
});

export default AccountStatusCard;
