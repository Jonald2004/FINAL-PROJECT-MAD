import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import CartHeader from './components11/CartHeader';
import FormInputSection from './components11/FormInputSection';
import CheckoutButton from './components11/CheckoutButton';

const LengkapiAlamat = () => {
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

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.wrapper}>
        <CartHeader onClose={() => console.log('back')} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FormInputSection form={form} handleChange={handleChange} />
          <CheckoutButton onPress={() => console.log('Lanjut pembayaran')} />
        </ScrollView>
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

export default LengkapiAlamat;
