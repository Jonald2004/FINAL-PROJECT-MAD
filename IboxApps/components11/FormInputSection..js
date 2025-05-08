import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const FormInputSection = ({form, handleChange}) => {
  const renderDropdownInput = (placeholder, field) => (
    <TouchableOpacity style={styles.dropdown}>
      <Text
        style={form[field] ? styles.dropdownText : styles.dropdownPlaceholder}>
        {form[field] || placeholder}
      </Text>
      <Image
        source={require('../../assets/Ikon/Icon21.png')}
        style={styles.dropdownIcon}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nama depan"
        value={form.namaDepan}
        onChangeText={text => handleChange('namaDepan', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Nama belakang"
        value={form.namaBelakang}
        onChangeText={text => handleChange('namaBelakang', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="No. handphone"
        keyboardType="phone-pad"
        value={form.noHp}
        onChangeText={text => handleChange('noHp', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Alamat"
        multiline
        numberOfLines={4}
        value={form.alamat}
        onChangeText={text => handleChange('alamat', text)}
        style={[styles.input, styles.textArea]}
      />

      <View style={styles.hintRow}>
        <Image
          source={require('../../assets/Ikon/Icon20.png')}
          style={styles.icon}
        />
        <Text style={styles.hintText}>
          Contoh: JL. Bandengan Selatan No. 11, RT.11/RW.5
        </Text>
      </View>

      {renderDropdownInput('Provinsi', 'provinsi')}
      {renderDropdownInput('Kota', 'kota')}
      {renderDropdownInput('Kecamatan', 'kecamatan')}
      {renderDropdownInput('Kelurahan', 'kelurahan')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 140,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  hintRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 10,
    marginTop: -1,
  },
  hintText: {
    fontSize: 13,
    color: '#333',
    flex: 1,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 12,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownPlaceholder: {
    fontSize: 16,
    color: '#999',
  },
  dropdownIcon: {
    width: 18,
    height: 18,
    tintColor: '#000',
  },
});

export default FormInputSection;
