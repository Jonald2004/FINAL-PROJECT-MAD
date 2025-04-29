import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ModelSelectorProps {
  selectedModel: string;
  onModelSelect: (model: string) => void;
}

const models = ['iPhone 15', 'iPhone 15 Plus'];

const ModelSelector: React.FC<ModelSelectorProps> = ({
  selectedModel,
  onModelSelect,
}) => {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.title}>Model</Text>
      {models.map(model => (
        <TouchableOpacity
          key={model}
          style={[
            styles.modelButton,
            selectedModel === model && styles.selectedModel,
          ]}
          onPress={() => onModelSelect(model)}
          accessibilityLabel={`Select ${model}`}
          accessibilityState={{selected: selectedModel === model}}>
          <Text style={styles.modelText}>{model}</Text>
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
    marginBottom: 16,
  },
  modelButton: {
    borderRadius: 10,
    padding: 13,
    marginBottom: 8,
    backgroundColor: '#F5F5F7',
  },
  selectedModel: {
    backgroundColor: '#0071E3',
  },
  modelText: {
    fontSize: 20,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
  },
});

export default ModelSelector;
