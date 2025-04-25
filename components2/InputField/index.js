import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(110, 110, 115, 1)"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 296,
    maxWidth: '100%',
  },
  input: {
    borderRadius: 4,
    borderColor: 'rgba(217, 217, 217, 1)',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 10,
    color: 'rgba(110, 110, 115, 1)',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '500',
  },
});
