import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface CapacitySelectorProps {
  selectedCapacity: string;
  onCapacitySelect: (capacity: string) => void;
}

const capacities = ['128 GB', '256 GB', '512 GB'];

const CapacitySelector: React.FC<CapacitySelectorProps> = ({
  selectedCapacity,
  onCapacitySelect,
}) => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.title}>Kapasitas</Text>
      {capacities.map(capacity => (
        <TouchableOpacity
          key={capacity}
          style={[
            styles.capacityButton,
            selectedCapacity === capacity && styles.selectedCapacity,
          ]}
          onPress={() => onCapacitySelect(capacity)}
          accessibilityLabel={`Select ${capacity} capacity`}
          accessibilityState={{selected: selectedCapacity === capacity}}>
          <Text style={styles.capacityText}>{capacity}</Text>
        </TouchableOpacity>
      ))}
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
    marginBottom: 8,
  },
  capacityButton: {
    borderRadius: 10,
    padding: 13,
    marginBottom: 8,
    backgroundColor: '#F5F5F7',
  },
  selectedCapacity: {
    backgroundColor: '#0071E3',
  },
  capacityText: {
    fontSize: 20,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
  },
});

export default CapacitySelector;
