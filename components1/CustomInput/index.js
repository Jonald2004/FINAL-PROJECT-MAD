import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

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
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        accessibilityLabel={label}
        accessibilityHint={`Enter your ${label.toLowerCase()}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  input: {
    borderRadius: 4,
    borderColor: 'rgba(217, 217, 217, 1)',
    borderWidth: 1,
    width: 296,
    maxWidth: '100%',
    paddingHorizontal: 24,
    paddingVertical: 10,
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'rgba(110, 110, 115, 1)',
  },
});
