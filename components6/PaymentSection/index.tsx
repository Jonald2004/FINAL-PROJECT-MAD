import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const PaymentSection: React.FC = () => {
  return (
    <View style={styles.container} accessible={true}>
      <View style={styles.header}>
        <Text style={styles.title}>Pilihan pembayaran</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49969ab97bfe44ae48ae4654ae5a2040f0f6f0ab?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.icon}
          accessibilityLabel="Payment options icon"
        />
      </View>

      <Text style={styles.description}>
        Cek semua pilihan pembyaran dari iBox
      </Text>

      <View style={styles.serviceSection}>
        <View>
          <Text style={styles.link}>Lebih lanjut</Text>
          <Text style={styles.serviceTitle}>Layanan teknis</Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dddc505add53b4be479d48f45008dde31be6f205?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.serviceIcon}
          accessibilityLabel="Technical service icon"
        />
      </View>

      <View style={styles.tradeInSection}>
        <Text style={styles.tradeInText}>Trade-in</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/198fda736b885b15792819b41c5b7466b3c287e4?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.tradeInIcon}
          accessibilityLabel="Trade-in icon"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#0071E3',
    fontSize: 20,
    fontFamily: 'Public Sans',
    fontWeight: '700',
  },
  icon: {
    width: 22,
    aspectRatio: 0.79,
  },
  description: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 16,
  },
  serviceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 66,
  },
  link: {
    color: '#0071E3',
    fontSize: 20,
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
  serviceTitle: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 16,
  },
  serviceIcon: {
    width: 22,
    aspectRatio: 0.79,
    marginTop: 40,
  },
  tradeInSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  tradeInText: {
    color: '#1E1E1E',
    fontSize: 24,
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
  tradeInIcon: {
    width: 22,
    aspectRatio: 0.79,
    marginTop: 14,
  },
});

export default PaymentSection;
