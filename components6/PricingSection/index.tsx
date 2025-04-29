import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface PricingSectionProps {
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  monthlyPayment: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  originalPrice,
  discountedPrice,
  discount,
  monthlyPayment,
}) => {
  return (
    <View style={styles.container} accessible={true}>
      <View style={styles.priceContainer}>
        <View>
          <View style={styles.originalPriceContainer}>
            <View style={styles.strikethrough} />
            <Text style={styles.originalPrice}>{originalPrice}</Text>
          </View>
          <Text style={styles.discountedPrice}>{discountedPrice}</Text>
        </View>
        <Text style={styles.discount}>[{discount}]</Text>
      </View>

      <Text style={styles.separator}>atau</Text>
      <Text style={styles.monthlyPayment}>{monthlyPayment}</Text>

      <TouchableOpacity>
        <Text style={styles.simulationLink}>
          Simulasi cicilan dan Paylater &gt;
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.bonusLink}>
          Kamu sudah memilih bonus produk eksklusif. &gt;
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  originalPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  strikethrough: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: '#6E6E73',
    top: '50%',
  },
  originalPrice: {
    color: '#6E6E73',
    fontSize: 15,
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
  discountedPrice: {
    color: '#1E1E1E',
    fontSize: 32,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 4,
  },
  discount: {
    color: '#E04327',
    fontSize: 14,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    textAlign: 'center',
  },
  separator: {
    color: '#6E6E73',
    fontSize: 15,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 8,
  },
  monthlyPayment: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 8,
  },
  simulationLink: {
    color: '#0071E3',
    fontSize: 20,
    fontFamily: 'Public Sans',
    fontWeight: '700',
    marginTop: 8,
  },
  bonusLink: {
    color: '#5856D9',
    fontSize: 16,
    fontFamily: 'Public Sans',
    fontWeight: '700',
    marginTop: 34,
  },
});

export default PricingSection;
