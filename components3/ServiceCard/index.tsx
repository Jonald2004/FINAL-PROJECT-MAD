import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ServiceCardProps {
  title: string;
  description: string;
  type: 'pickup' | 'financing';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  type,
}) => {
  return (
    <View
      style={[
        styles.container,
        type === 'financing' && styles.financingContainer,
      ]}
      accessible>
      <Text
        style={[styles.title, type === 'financing' && styles.financingTitle]}
        accessibilityRole="header">
        {title}
      </Text>
      <Text
        style={[
          styles.description,
          type === 'financing' && styles.financingDescription,
        ]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 14,
  },
  title: {
    fontSize: 8,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#707070',
  },
  description: {
    fontSize: 15,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    marginTop: 6,
  },
  financingContainer: {
    paddingVertical: 8,
  },
  financingTitle: {
    color: '#0071E3',
  },
  financingDescription: {
    color: '#1E1E1E',
  },
});

export default ServiceCard;
