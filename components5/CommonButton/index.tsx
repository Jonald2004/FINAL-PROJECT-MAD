import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface CommonButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'outline' | 'filled';
  style?: object;
}

export const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  onPress,
  variant = 'outline',
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'outline' ? styles.outlineButton : styles.filledButton,
        style,
      ]}
      onPress={onPress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={title}>
      <Text
        style={[
          styles.buttonText,
          variant === 'outline' ? styles.outlineText : styles.filledText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 34,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 155,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: 'rgba(0, 113, 227, 0.5)',
    backgroundColor: 'transparent',
  },
  filledButton: {
    backgroundColor: 'rgba(0, 113, 227, 1)',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  outlineText: {
    color: 'rgba(0, 113, 227, 1)',
  },
  filledText: {
    color: '#FFFFFF',
  },
});
export default CommonButton;
