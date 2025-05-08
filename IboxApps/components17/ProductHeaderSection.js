import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // ← Tambah ini

const ProductHeaderSection = () => {
  const navigation = useNavigation();

  const [selectedColor, setSelectedColor] = useState('#D4D9DB');
  const [colorLabel, setColorLabel] = useState('Blue');

  const productImages = {
    '#D4D9DB': require('../../assets/PilihDetailProduk/PDP111.png'),
    '#E9C7C9': require('../../assets/PilihDetailProduk/PDP144.png'),
    '#E8DEB6': require('../../assets/PilihDetailProduk/PDP133.png'),
    '#EDF0E5': require('../../assets/PilihDetailProduk/PDP122.png'),
    '#1F1F1F': require('../../assets/PilihDetailProduk/PDP155.png'),
  };

  const colorNames = {
    '#D4D9DB': 'Blue',
    '#E9C7C9': 'Pink',
    '#E8DEB6': 'Yellow',
    '#EDF0E5': 'Green',
    '#1F1F1F': 'Black',
  };

  const handleColorSelect = color => {
    setSelectedColor(color);
    setColorLabel(colorNames[color]);
  };

  const goToFavorite = () => {
    navigation.navigate('Favorite');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>iPhone 15 Plus</Text>
      <Text style={styles.sku}>SKU: 81000122762</Text>

      <View style={styles.imageContainer}>
        <Image
          source={productImages[selectedColor]}
          style={styles.productImage}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.loveIconWrapper} onPress={goToFavorite}>
          <Image
            source={require('../../assets/Ikon/Icon27.png')}
            style={styles.loveIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>Rp13.999.000</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.newPrice}>Rp13.499.000</Text>
          <Text style={styles.discount}>[21%]</Text>
        </View>
        <Text style={styles.orText}>atau</Text>
        <Text style={styles.installment}>Rp479.125/bln. untuk 24 bln.*</Text>
        <Text style={styles.link}>Simulasi cicilan dan Paylater {'>'}</Text>
        <Text style={styles.bonusLink}>
          Kamu sudah memilih bonus produk eksklusif. {'>'}
        </Text>
      </View>

      <Text style={styles.colorLabel}>Warna - {colorLabel}</Text>
      <View style={styles.colorOptions}>
        {['#D4D9DB', '#E9C7C9', '#E8DEB6', '#EDF0E5', '#1F1F1F'].map(
          (color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorCircle, {backgroundColor: color}]}
              onPress={() => handleColorSelect(color)}
            />
          ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  productName: {
    fontSize: 22,
    fontWeight: '600',
  },
  sku: {
    color: '#888',
    fontSize: 12,
    marginBottom: 12,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 240,
  },
  loveIconWrapper: {
    position: 'absolute',
    top: 270,
    right: 5,
    zIndex: 10,
  },
  loveIcon: {
    width: 28,
    height: 28,
  },
  priceContainer: {
    marginBottom: 16,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 14,
  },
  newPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginRight: 6,
  },
  discount: {
    color: '#D64545',
    fontSize: 12,
  },
  orText: {
    fontSize: 12,
    color: '#666',
    marginTop: 6,
  },
  installment: {
    fontSize: 14,
    fontWeight: '500',
  },
  link: {
    fontSize: 13,
    color: '#0071E7',
    marginTop: 4,
  },
  bonusLink: {
    fontSize: 13,
    color: '#2E35DE',
    marginTop: 6,
  },
  colorLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  colorOptions: {
    flexDirection: 'row',
    gap: 20,
  },
  colorCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default ProductHeaderSection;
