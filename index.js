/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SignUpPage from './IboxApps/SignUpPage';
import SignInPage from './IboxApps/SignInPage';
import HomePage from './IboxApps/HomePage';
import AccountProfilePage from './IboxApps/AccountProfilePage';
import SemuaIphone from './IboxApps/SemuaIphone';
import PilihDetail from './IboxApps/PilihDetail';
import PreviewKeranjang from './IboxApps/PreviewKeranjang';
import LihatKeranjang from './IboxApps/LihatKeranjang';
import FavoritePage from './IboxApps/FavoritePage';
import Pemesanan from './IboxApps/Pemesanan';
import LengkapiAlamat from './IboxApps/LengkapiAlamat';

import Pages1 from './Pages1';
import tes2 from './tes2';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LengkapiAlamat);
