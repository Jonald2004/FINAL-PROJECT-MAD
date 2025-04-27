import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0071E3',
    borderRadius: 25,
    paddingVertical: 18,
    paddingHorizontal: 44,
    marginTop: 15,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
});

export default Button;
