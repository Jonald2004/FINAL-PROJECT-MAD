import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FormInput} from './components11/FormInput';
import {AddressPreview} from './components11/AddressPreview';

const LengkapiAlamatPage: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Tambah alamat baru</Text>
          </View>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d662bec7808de15bfbd070f043d48ac2bd07bb9?placeholderIfAbsent=true',
            }}
            style={styles.headerIcon}
          />
        </View>

        <FormInput label="Nama depan" style={styles.input} />
        <FormInput label="Nama belakang" style={styles.input} />
        <FormInput label="No. handphone" style={styles.input} />
        <FormInput label="Alamat" style={[styles.input, styles.addressInput]} />

        <AddressPreview />

        {['Provinsi', 'Kota', 'Kecamatan', 'Kelurahan'].map((item, index) => (
          <View style={styles.dropdownContainer} key={index}>
            <View style={styles.dropdown}>
              <Text style={styles.dropdownLabel}>{item}</Text>
              <Image
                source={{
                  uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f06e0c75e4235727fea3a846be952d37b1c75951?placeholderIfAbsent=true',
                }}
                style={styles.dropdownIcon}
              />
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lanjut pembayaran</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 51,
    paddingBottom: 19,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 49,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Public Sans',
    fontSize: 32,
    color: '#1E1E1E',
    fontWeight: '600',
  },
  headerIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  input: {
    marginBottom: 13,
  },
  addressInput: {
    paddingBottom: 190,
  },
  dropdownContainer: {
    marginTop: 13,
  },
  dropdown: {
    borderRadius: 5,
    borderColor: '#6E6E73',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  dropdownLabel: {
    fontFamily: 'Public Sans',
    fontSize: 16,
    color: '#6E6E73',
    fontWeight: '600',
  },
  dropdownIcon: {
    width: 22,
    height: 28,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#0071E3',
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 32,
    width: '100%',
    maxWidth: 382,
    paddingHorizontal: 70,
    paddingVertical: 20,
  },
  buttonText: {
    fontFamily: 'Public Sans',
    fontSize: 20,
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default LengkapiAlamatPage;
