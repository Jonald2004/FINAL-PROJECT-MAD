import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Alert} from 'react-native';
import CartHeader from './components11/CartHeader';
import FormInputSection from './components11/FormInputSection.';
import CheckoutButton from './components11/CheckoutButton';

const Alamat = () => {
  const [form, setForm] = useState({
    namaDepan: '',
    namaBelakang: '',
    noHp: '',
    alamat: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    kelurahan: '',
  });

  const handleChange = (field, value) => {
    setForm(prev => ({...prev, [field]: value}));
  };

  const handleCheckout = () => {
    // Pastikan semua field terisi sebelum melanjutkan
    if (form.namaDepan && form.namaBelakang && form.noHp && form.alamat) {
      console.log('Lanjut ke pembayaran');
      // Jika data valid, navigasikan ke halaman Checkout
    } else {
      console.log('Data belum lengkap');
      Alert.alert(
        'Data belum lengkap',
        'Harap isi nama depan, nama belakang, nomor HP, dan alamat Anda untuk melanjutkan pembayaran.',
        [{text: 'OK'}],
      );
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.wrapper}>
        <CartHeader onClose={() => console.log('Back')} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FormInputSection form={form} handleChange={handleChange} />
        </ScrollView>
        {/* Tombol Lanjut Pembayaran */}
        <CheckoutButton onPress={handleCheckout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
  },
});

export default Alamat;
