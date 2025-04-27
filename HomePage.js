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
  AccessibilityInfo,
} from 'react-native';
import ProductCard from './components3/ProductCard';
import ServiceCard from './components3/ServiceCard';
import CategoryCard from './components3/CategoryCard';
import HighlightCard from './components3/HighlightCard';
import Button from './components3/Button';

const {width} = Dimensions.get('window');

export const HomePage: React.FC = () => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} accessible>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3014484d7ed62603afbe5b135f26d53d5f135766?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.logo}
          accessibilityLabel="iBox Logo"
        />
        <TouchableOpacity
          onPress={() => handleLinkPress('https://ibox.com/warning')}
          accessibilityRole="link"
          accessibilityLabel="Warning about fraud attempts">
          <Text style={styles.warningText}>
            Waspada terhadap upaya penipuan yang mengatasnamakan iBox. Info
            selengkapnya, <Text style={styles.warningLink}>klik di sini</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.heroSection}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b9c36756aefb67e6d04faaffe2b06dffe7cc140?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.heroImage}
          accessibilityLabel="Hero banner"
        />
        <Text style={styles.heroTitle}>Berbagai produk Apple.</Text>
      </View>

      <View style={styles.categories}>
        <CategoryCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/8c2b8441a6f0f4e95827ab5b7a912b1f9723c2fb?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
          title="Mac"
          price="Mulai Rp12 juta"
        />
        <CategoryCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d06cd9d08afab995ba3efc5d6ee2021965e1da?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
          title="iPhone"
          price="Mulai Rp8 juta"
        />
        <CategoryCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/8414a4525613194cf30cf11598cbf816a1fa6b62?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
          title="iPad"
          price="Mulai Rp5 juta"
        />
      </View>

      <Text style={styles.sectionTitle}>Cek yang terbaru.</Text>

      <View style={styles.newProducts}>
        <ProductCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/a68755503ab18920db6ba549435d488084575028?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
          title="Macbook Pro M4"
          description="Bertenaga super berkat M4."
          price="Mulai Rp27.999.000"
        />
        <ProductCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/b4642c93c175e9906efbba17427076b86cc2170c?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
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
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/2b9cc9515bcaebfe6d50cf78ea53fec040900c02?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        title="MacBook Pro M4"
        description="Bertenaga super, berkat M4. Kini tersedia."
        price="Mulai dari Rp27.999.000"
      />

      <HighlightCard
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/b095002a16976e4bd3fba998cbffa19cea42567a?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        title="Mac mini M4"
        description="Ukuran lebih kecil. Tenaga lebih besar kini tersedia."
        price="Mulai dari Rp9.999.000"
      />

      <HighlightCard
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1c3965b5a662b21969c00cc1e98198e860f46e?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be"
        title="Apple Watch Series 10"
        description="Tipis dan tetap klasik. Kini tersedia."
        price="Mulai dari Rp5.999.000"
      />

      {/* Store Services Section */}
      <View style={styles.storeServices}>
        <Text style={styles.sectionTitle}>
          Ikuti kelas dan layanan lainnya di toko.
        </Text>
        <View style={styles.storeServiceCard}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c9e6bd658a95371c91efda30f0a44735f31cef29?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
            }}
            style={styles.storeServiceImage}
            accessibilityLabel="Store service illustration"
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

      {/* Trade In Section */}
      <View style={styles.tradeIn}>
        <Text style={styles.sectionTitle}>
          Trade in produkmu dengan produk terbaru.
        </Text>
        <View style={styles.tradeInCard}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b8f0267be086ae3b2586f7817524f11ebee3c985?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
            }}
            style={styles.tradeInImage}
            accessibilityLabel="iPhone 15"
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

      {/* Footer */}
      <View style={styles.footer}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2464177aafe90d095c3123626d7e3bb2a68c1c58?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.footerLogo}
          accessibilityLabel="iBox logo"
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
    paddingTop: 41,
    alignItems: 'center',
  },
  logo: {
    width: width,
    height: width / 12.5,
    resizeMode: 'contain',
  },
  warningText: {
    padding: 15,
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  warningLink: {
    color: '#C6C5C5',
  },
  heroSection: {
    marginTop: 15,
    paddingHorizontal: 14,
  },
  heroImage: {
    width: '100%',
    aspectRatio: 2.18,
    resizeMode: 'contain',
  },
  heroTitle: {
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    marginTop: 14,
  },
  categories: {
    flexDirection: 'row',
    marginTop: 14,
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    color: '#1E1E1E',
    marginTop: 14,
    marginBottom: 14,
    paddingHorizontal: 14,
  },
  newProducts: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },
  services: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    marginTop: 14,
    gap: 8,
  },
  storeServices: {
    marginTop: 29,
    paddingHorizontal: 14,
  },
  storeServiceCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6E6E73',
    overflow: 'hidden',
  },
  storeServiceImage: {
    width: '100%',
    aspectRatio: 1.83,
    resizeMode: 'contain',
  },
  storeServiceContent: {
    padding: 21,
  },
  storeServiceLabel: {
    fontSize: 10,
    color: '#6E6E73',
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
  storeServiceTitle: {
    fontSize: 20,
    color: '#1E1E1E',
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 12,
  },
  storeServiceSubtitle: {
    fontSize: 15,
    color: '#1E1E1E',
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 25,
  },
  storeServiceDescription: {
    fontSize: 12,
    color: '#1E1E1E',
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 7,
  },
  tradeIn: {
    marginTop: 12,
    paddingHorizontal: 14,
  },
  tradeInCard: {
    borderRadius: 10,
    padding: 17,
    alignItems: 'center',
  },
  tradeInImage: {
    width: '100%',
    aspectRatio: 1.19,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  tradeInTitle: {
    fontSize: 15,
    color: '#1E1E1E',
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 14,
    textAlign: 'center',
  },
  tradeInOriginalPrice: {
    fontSize: 12,
    color: '#6E6E73',
    fontFamily: 'Public Sans',
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginTop: 27,
  },
  tradeInPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  tradeInPrice: {
    fontSize: 15,
    color: '#1E1E1E',
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
  tradeInDiscount: {
    fontSize: 12,
    color: '#E04327',
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginLeft: 8,
  },
  footer: {
    marginTop: 65,
    paddingHorizontal: 25,
    paddingBottom: 28,
  },
  footerLogo: {
    width: 130,
    aspectRatio: 0.93,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  footerContent: {
    marginTop: 56,
  },
  footerSection: {
    marginBottom: 24,
  },
  footerTitle: {
    fontSize: 18,
    color: '#121212',
    fontFamily: 'Inter',
    fontWeight: '600',
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#464646',
    fontFamily: 'Inter',
    marginBottom: 8,
  },
  copyright: {
    fontSize: 10,
    color: '#6E6E73',
    fontFamily: 'Inter',
    textAlign: 'center',
    marginTop: 24,
  },
});

export default HomePage;
