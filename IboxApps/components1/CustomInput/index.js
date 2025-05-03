import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={label}
      placeholderTextColor="rgba(110, 110, 115, 1)"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      accessibilityLabel={label}
      accessibilityHint={`Isi ${label.toLowerCase()}`}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    width: 296,
  },
  input: {
    borderRadius: 4,
    borderColor: 'rgba(217, 217, 217, 1)',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'rgba(110, 110, 115, 1)',
    fontWeight: '500',
  },
});
