import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import ProductCard from './components3/ProductCard';
import ServiceCard from './components3/ServiceCard';
import CategoryCard from './components3/CategoryCard';
import HighlightCard from './components3/HighlightCard';
import Button from './components3/Button';

const {width} = Dimensions.get('window');

const HomePage = () => {
  const handleLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/LogoiBoxAPPS.png')}
          style={styles.logo}
        />
        <TouchableOpacity
          onPress={() => handleLinkPress('https://ibox.com/warning')}>
          <Text style={styles.warningText}>
            Waspada terhadap upaya penipuan yang mengatasnamakan iBox. Info
            selengkapnya, <Text style={styles.warningLink}>klik di sini</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.heroSection}>
        <Image
          source={require('./assets/ImageHomePage/HP11.png')}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>Berbagai produk Apple.</Text>
      </View>

      <View style={styles.categories}>
        <CategoryCard
          image={require('./assets/ImageHomePage/HP21.png')}
          title="Mac"
          price="Mulai Rp12 juta"
        />
        <CategoryCard
          image={require('./assets/ImageHomePage/HP2234.png')}
          title="iPhone"
          price="Mulai Rp8 juta"
        />
        <CategoryCard
          image={require('./assets/ImageHomePage/HP23.png')}
          title="iPad"
          price="Mulai Rp5 juta"
        />
      </View>

      <Text style={styles.sectionTitle}>Cek yang terbaru.</Text>

      <View style={styles.newProducts}>
        <ProductCard
          image={require('./assets/ImageHomePage/HP3141.png')}
          title="Macbook Pro M4"
          description="Bertenaga super berkat M4."
          price="Mulai Rp27.999.000"
        />
        <ProductCard
          image={require('./assets/ImageHomePage/HP3242.png')}
          title="Mac mini M4"
          description="Ukuran lebih kecil. Tenaga lebih besar."
          price="Mulai Rp9.999.000"
        />
      </View>

      <Text style={styles.sectionTitle}>
        Temukan layanan dan penawaran lainnya.
      </Text>

      <View style={styles.services}>
        <ServiceCard
          title="PICKUP"
          description="Kirim dan ambil. Belanja online dan bebas biaya kirim."
          type="pickup"
        />
        <ServiceCard
          title="FINANCING"
          description="Dapatkan harga spesial dan cicilan 0% untuk produk-produk Apple."
          type="financing"
        />
      </View>

      <HighlightCard
        image={require('./assets/ImageHomePage/HP3141.png')}
        title="MacBook Pro M4"
        description="Bertenaga super, berkat M4. Kini tersedia."
        price="Mulai dari Rp27.999.000"
      />
      <HighlightCard
        image={require('./assets/ImageHomePage/HP3242.png')}
        title="Mac mini M4"
        description="Ukuran lebih kecil. Tenaga lebih besar kini tersedia."
        price="Mulai dari Rp9.999.000"
      />
      <HighlightCard
        image={require('./assets/ImageHomePage/HP43.png')}
        title="Apple Watch Series 10"
        description="Tipis dan tetap klasik. Kini tersedia."
        price="Mulai dari Rp5.999.000"
      />

      <View style={styles.storeServices}>
        <Text style={styles.sectionTitle}>
          Ikuti kelas dan layanan lainnya di toko.
        </Text>
        <View style={styles.storeServiceCard}>
          <Image
            source={require('./assets/ImageHomePage/HP11.png')}
            style={styles.storeServiceImage}
          />
          <View style={styles.storeServiceContent}>
            <Text style={styles.storeServiceLabel}>IN STORE.</Text>
            <Text style={styles.storeServiceTitle}>Kirim atau ambil</Text>
            <Text style={styles.storeServiceSubtitle}>
              Bebas biaya kirim ambil sendiri
            </Text>
            <Text style={styles.storeServiceDescription}>
              Ambil pesananmu di toko iBox terdekat.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.tradeIn}>
        <Text style={styles.sectionTitle}>
          Trade in produkmu dengan produk terbaru.
        </Text>
        <View style={styles.tradeInCard}>
          <Image
            source={require('./assets/ImageHomePage/HP11.png')}
            style={styles.tradeInImage}
          />
          <Text style={styles.tradeInTitle}>iPhone 15</Text>
          <Text style={styles.tradeInOriginalPrice}>Rp 11.999.000</Text>
          <View style={styles.tradeInPriceContainer}>
            <Text style={styles.tradeInPrice}>Rp 11.499.000</Text>
            <Text style={styles.tradeInDiscount}>3%</Text>
          </View>
          <Button
            title="Beli sekarang"
            onPress={() => handleLinkPress('https://ibox.com/iphone15')}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Image
          source={require('./assets/ImageHomePage/HP11.png')}
          style={styles.footerLogo}
        />
        <View style={styles.footerContent}>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>Contact Information</Text>
            <Text style={styles.footerText}>Jam 09:00 - 18:00</Text>
            <Text style={styles.footerText}>
              Email: customercare@erajaya.com
            </Text>
            <Text style={styles.footerText}>Contact Center: 1500372</Text>
            <Text style={styles.footerText}>WhatsApp: 0812 9077 7722</Text>
          </View>
        </View>
        <Text style={styles.copyright}>
          Copyright © 2024 iBox. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 98,
    height: 19,
    marginBottom: 10,
  },
  warningText: {
    fontSize: 12,
    color: '#333',
  },
  warningLink: {
    color: '#0071E7',
    textDecorationLine: 'underline',
  },
  heroSection: {
    alignItems: 'center',
    padding: 20,
  },
  heroImage: {
    width: width * 0.9,
    height: 180,
    resizeMode: 'contain',
  },
  heroTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
    marginBottom: 10,
    color: '#1E1E1E',
  },
  newProducts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  storeServices: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  storeServiceCard: {
    flexDirection: 'row',
    marginTop: 10,
  },
  storeServiceImage: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  storeServiceContent: {
    flex: 1,
  },
  storeServiceLabel: {
    fontSize: 10,
    color: '#0071E7',
    fontWeight: 'bold',
  },
  storeServiceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  storeServiceSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  storeServiceDescription: {
    fontSize: 12,
    color: '#666',
  },
  tradeIn: {
    padding: 20,
  },
  tradeInCard: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
  },
  tradeInImage: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  tradeInTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tradeInOriginalPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#999',
  },
  tradeInPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  tradeInPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0071E7',
    marginRight: 10,
  },
  tradeInDiscount: {
    fontSize: 12,
    color: '#FF3B30',
  },
  footer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  footerLogo: {
    width: 98,
    height: 19,
    marginBottom: 10,
  },
  footerContent: {
    marginBottom: 10,
  },
  footerSection: {
    marginBottom: 10,
  },
  footerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
  copyright: {
    fontSize: 10,
    color: '#aaa',
    textAlign: 'center',
  },
});

export default HomePage;
