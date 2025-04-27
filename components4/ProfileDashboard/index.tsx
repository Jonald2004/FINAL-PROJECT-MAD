import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ProfileDashboard: React.FC = () => {
  return (
    <View>
      <View style={styles.dashboardHeader}>
        <Text style={styles.dashboardText}>Dashboard akun</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5a656df5551e8dbcb3b878c958f99b17c423e9f2?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
          }}
          style={styles.dashboardIcon}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.dashboardTitle}>Dashboard akun</Text>
      <Text style={styles.userName}>Immanuela Grifin</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b7e8929b256d9a6581bb38c13bdf6d46a2544cf9?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
            }}
            style={styles.statIcon}
            resizeMode="contain"
          />
          <View style={styles.statContent}>
            <Text style={styles.statLabel}>Status member</Text>
            <Text style={styles.statLink}>Lihat detail</Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1889bf2dd869f56b82161f4d27076679a8ea1fab?placeholderIfAbsent=true&apiKey=5a2266129e3445fbb07d6dab5d4689be',
            }}
            style={styles.statIcon}
            resizeMode="contain"
          />
          <View style={styles.statContent}>
            <Text style={styles.statLabel}>Poin MyEraSpace</Text>
            <Text style={styles.statValue}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 7,
    padding: 14,
  },
  dashboardText: {
    fontFamily: 'Public Sans',
    fontSize: 20,
    color: '#1E1E1E',
    fontWeight: '600',
  },
  dashboardIcon: {
    width: 22,
    height: 28,
  },
  dashboardTitle: {
    color: '#1E1E1E',
    fontSize: 40,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 5,
  },
  userName: {
    color: '#6E6E73',
    fontSize: 16,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 35,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 17,
  },
  statCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    width: 63,
    height: 80,
    marginRight: 10,
  },
  statContent: {
    flex: 1,
  },
  statLabel: {
    color: '#6E6E73',
    fontSize: 14,
    fontFamily: 'Public Sans',
    fontWeight: '600',
  },
  statLink: {
    color: '#0071E3',
    fontSize: 14,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 27,
  },
  statValue: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Public Sans',
    fontWeight: '600',
    marginTop: 31,
  },
});

export default ProfileDashboard;
