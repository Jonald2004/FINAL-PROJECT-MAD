import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DeliverySection = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showTrade, setShowTrade] = useState(false);

  return (
    <View style={styles.container}>
      {/* Click & PickUp */}
      <Text style={styles.label}>Dapatkan segera</Text>
      <View style={styles.row}>
        <Image
          source={require('../../assets/Ikon/Icon15.png')}
          style={styles.icon}
        />
        <Text style={styles.pickupTitle}>Click & PickUp</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://ibox.co.id/store-availability')
        }>
        <Text style={styles.link}>Cek ketersediaan barang di toko {'>'}</Text>
      </TouchableOpacity>

      {/* Pengiriman */}
      <View style={[styles.row, {marginTop: 24}]}>
        <Image
          source={require('../../assets/Ikon/Icon14.png')}
          style={styles.icon}
        />
        <Text style={styles.label}>Pengiriman</Text>
      </View>
      <TouchableOpacity onPress={() => setShowPayment(prev => !prev)}>
        <Text style={styles.dropdownHeader}>
          Pilihan pembayaran{' '}
          <Icon name={showPayment ? 'expand-less' : 'expand-more'} size={18} />
        </Text>
      </TouchableOpacity>
      {showPayment && (
        <Text style={styles.description}>
          Cek semua pilihan pembayaran dari iBox
        </Text>
      )}

      {/* Lebih lanjut */}
      <TouchableOpacity onPress={() => Linking.openURL('https://ibox.co.id')}>
        <Text style={[styles.link, {marginTop: 16}]}>Lebih lanjut</Text>
      </TouchableOpacity>

      {/* Layanan Teknis */}
      <TouchableOpacity onPress={() => setShowService(prev => !prev)}>
        <Text style={styles.dropdownHeader}>
          Layanan teknis{' '}
          <Icon name={showService ? 'expand-less' : 'expand-more'} size={18} />
        </Text>
      </TouchableOpacity>

      {/* Trade-in */}
      <TouchableOpacity onPress={() => setShowTrade(prev => !prev)}>
        <Text style={styles.dropdownHeader}>
          Trade-in{' '}
          <Icon name={showTrade ? 'expand-less' : 'expand-more'} size={18} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  icon: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  pickupTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  link: {
    fontSize: 14,
    color: '#0071E7',
    fontWeight: '500',
  },
  dropdownHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
  },
});

export default DeliverySection;
