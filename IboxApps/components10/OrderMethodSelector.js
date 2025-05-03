import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const OrderMethodSelector = () => {
  const [selected, setSelected] = useState('online');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => setSelected('online')}>
        <View
          style={[styles.radio, selected === 'online' && styles.selectedRadio]}
        />
        <Text style={styles.label}>Belanja online</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => setSelected('pickup')}>
        <View
          style={[styles.radio, selected === 'pickup' && styles.selectedRadio]}
        />
        <Text style={styles.label}>Click & PickUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0071E7',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadio: {
    backgroundColor: '#0071E7',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});

export default OrderMethodSelector;
