import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ColorSelectorProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const colors = ['Blue', 'Black', 'White', 'Pink', 'Green'];

const ColorSelector: React.FC<ColorSelectorProps> = ({
  selectedColor,
  onColorSelect,
}) => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.title}>Warna - {selectedColor}</Text>
      <View style={styles.colorContainer}>
        {colors.map(color => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorButton,
              {backgroundColor: color.toLowerCase()},
              selectedColor === color && styles.selectedColor,
            ]}
            onPress={() => onColorSelect(color)}
            accessibilityLabel={`Select ${color} color`}
            accessibilityState={{selected: selectedColor === color}}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginBottom: 16,
  },
  colorContainer: {
    flexDirection: 'row',
    gap: 13,
  },
  colorButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: '#0071E3',
  },
});

export default ColorSelector;
