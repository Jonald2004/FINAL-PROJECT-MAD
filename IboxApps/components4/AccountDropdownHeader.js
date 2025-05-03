import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const AccountDropdownHeader = () => {
  const [selected, setSelected] = useState('dashboard');

  return (
    <View style={styles.container}>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selected}
          onValueChange={itemValue => setSelected(itemValue)}
          style={styles.dropdown}
          dropdownIconColor="#333"
          mode="dropdown">
          <Picker.Item label="Dashboard akun" value="dashboard" />
          <Picker.Item label="Pengaturan akun" value="settings" />
          <Picker.Item label="Riwayat pesanan" value="orders" />
        </Picker>
      </View>

      <Text style={styles.title}>Dashboard akun</Text>
      <Text style={styles.username}>Immanuela Griffin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 16,
    height: 44,
    justifyContent: 'center',
  },
  dropdown: {
    width: '100%',
    height: Platform.OS === 'ios' ? undefined : 50,
    color: '#000',
    fontSize: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
});

export default AccountDropdownHeader;
