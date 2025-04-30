import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface FormInputProps {
  label: string;
  style?: object;
}

export const FormInput: React.FC<FormInputProps> = ({label, style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.dot} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: '#6E6E73',
    borderWidth: 1,
    paddingLeft: 29,
    paddingRight: 80,
    paddingTop: 18,
    paddingBottom: 18,
  },
  labelContainer: {
    zIndex: 10,
  },
  label: {
    fontFamily: 'Public Sans',
    fontSize: 16,
    color: '#6E6E73',
    fontWeight: '600',
  },
  dot: {
    borderRadius: 50,
    marginTop: -14,
    width: 14,
    height: 14,
  },
});

export default FormInput;
