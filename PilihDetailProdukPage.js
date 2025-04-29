import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  AccessibilityInfo,
} from 'react-native';

import WarningBanner from './components6/WarningBanner';
import ProductHeader from './components6/ProductHeader';
import PricingSection from './components6/PricingSection';
import ColorSelector from './components6/ColorSelector';
import ModelSelector from './components6/ModelSelector';
import CapacitySelector from './components6/CapacitySelector';
import TradeInSection from './components6/TradeInSection';
import QuantitySelector from './components6/QuantitySelector';
import DeliverySection from './components6/DeliverySection';
import PaymentSection from './components6/PaymentSection';
import Footer from './components6/Footer';

const PilihDetailProdukPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Blue');
  const [selectedModel, setSelectedModel] = useState('iPhone 15');
  const [selectedCapacity, setSelectedCapacity] = useState('128 GB');

  return (
    <ScrollView style={styles.container} accessible={true}>
      <WarningBanner />
      <View style={styles.content}>
        <ProductHeader
          title="iPhone 15"
          sku="81000122762"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a482422c0d859c266b966215fdec9ee80f647989?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        />

        <PricingSection
          originalPrice="Rp 11.999.000"
          discountedPrice="Rp11.499.000"
          discount="21%"
          monthlyPayment="Rp479.125/bln. untuk 24 bln.*"
        />

        <ColorSelector
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />

        <ModelSelector
          selectedModel={selectedModel}
          onModelSelect={setSelectedModel}
        />

        <CapacitySelector
          selectedCapacity={selectedCapacity}
          onCapacitySelect={setSelectedCapacity}
        />

        <TradeInSection />

        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

        <DeliverySection />

        <PaymentSection />

        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 41,
  },
});

export default PilihDetailProdukPage;
