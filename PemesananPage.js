import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {HeaderComponent} from './components10/HeaderComponent';
import {WarningBanner} from './components10/WarningBanner';
import {OrderMethod} from './components10/OrderMethod';
import {ShippingSection} from './components10/ShippingSection';
import {TradeInSection} from './components10/TradeInSection';
import {OrderSummary} from './components10/OrderSummary';
import {ActionButtons} from './components10/ActionButtons';
import {commonStyles} from './components10/CommonStyles';

const PemesananPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={commonStyles.container}>
        <HeaderComponent />
        <WarningBanner />
        <OrderMethod />
        <ShippingSection />
        <TradeInSection />
        <OrderSummary />
        <ActionButtons />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
});

export default PemesananPage;
