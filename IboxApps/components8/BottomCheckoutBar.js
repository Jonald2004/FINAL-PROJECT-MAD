import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const BottomCheckoutBar = ({total = 11499000}) => {
  const formatRupiah = num => {
    return 'Rp' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.totalText}>
        Total pembayaran:{' '}
        <Text style={styles.totalValue}>{formatRupiah(total)}</Text>
      </Text>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>

      {/* Floating Chat Button */}
      <TouchableOpacity style={styles.floatingChat}>
        <Image
          source={require('../../assets/Ikon/Icon11.png')}
          style={styles.chatIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingBottom: 30,
    paddingTop: 16,
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  totalValue: {
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#2F74F8',
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  floatingChat: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: '#0071E7',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  chatIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
    resizeMode: 'contain',
  },
});

export default BottomCheckoutBar;
