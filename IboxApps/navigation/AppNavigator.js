import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import semua page
import SignUpPage from '../SignUpPage';
import SignInPage from '../SignInPage';
import HomePage from '../HomePage';
import AccountProfilePage from '../AccountProfilePage';
import SemuaIphone from '../SemuaIphone';
import PilihDetail from '../PilihDetail';
import PilihDetail2 from '../PilihDetail2';
import PreviewKeranjang from '../PreviewKeranjang';
import LihatKeranjang from '../LihatKeranjang';
import Keranjang from '../Keranjang';
import FavoritePage from '../FavoritePage';
import Pemesanan from '../Pemesanan';
import Alamat from '../Alamat';
import SemuaMac from '../SemuaMac';
import Checkout from '../Checkout';
import ChatiBox from '../ChatiBox';
import Menu from '../Menu';
import OrderConfirmationPage from '../OrderConfirmationPage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Account" component={AccountProfilePage} />
        <Stack.Screen name="SemuaIphone" component={SemuaIphone} />
        <Stack.Screen name="PilihDetail" component={PilihDetail} />
        <Stack.Screen name="PilihDetail2" component={PilihDetail2} />
        <Stack.Screen name="PreviewKeranjang" component={PreviewKeranjang} />
        <Stack.Screen name="LihatKeranjang" component={LihatKeranjang} />
        <Stack.Screen name="Keranjang" component={Keranjang} />
        <Stack.Screen name="Favorite" component={FavoritePage} />
        <Stack.Screen name="Pemesanan" component={Pemesanan} />
        <Stack.Screen name="Alamat" component={Alamat} />
        <Stack.Screen name="SemuaMac" component={SemuaMac} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="ChatiBox" component={ChatiBox} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen
          name="OrderConfirmationPage"
          component={OrderConfirmationPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
