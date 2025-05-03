import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const checkoutItems = [
  {
    image: require('../../assets/ImageHomePage/HP10.png'),
    name: '13-inch iPad Pro M4',
    oldPrice: 'Rp 25.999.000',
    newPrice: 'Rp 25.499.000',
    discount: '2%',
  },
  {
    image: require('../../assets/ImageHomePage/HP101.png'),
    name: '15-inch Macbook Air',
    oldPrice: null,
    newPrice: 'Rp 25.499.000',
    discount: null,
  },
  {
    image: require('../../assets/ImageHomePage/HP102.png'),
    name: 'iPhone 15 Pro Max',
    oldPrice: 'Rp 24.999.000',
    newPrice: 'Rp 22.999.000',
    discount: '8%',
  },
];

const CheckoutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout sekarang.</Text>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setActiveIndex(index);
        }}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}>
        {checkoutItems.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.productName}>{item.name}</Text>
            {item.oldPrice && (
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
            )}
            <View style={styles.priceRow}>
              <Text style={styles.newPrice}>{item.newPrice}</Text>
              {item.discount && (
                <Text style={styles.discount}>{item.discount}</Text>
              )}
            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>Beli Sekarang</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {checkoutItems.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === activeIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    width: width - 32,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  oldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  newPrice: {
    fontSize: 16,
    fontWeight: '700',
  },
  discount: {
    fontSize: 14,
    color: '#D64545',
    fontWeight: '600',
  },
  buyButton: {
    backgroundColor: '#0071E7',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginBottom: 10,
  },
  buyText: {
    color: 'white',
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  activeDot: {
    backgroundColor: '#222',
  },
});

export default CheckoutSection;
