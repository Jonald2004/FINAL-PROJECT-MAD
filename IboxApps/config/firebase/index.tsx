// IboxApps/config/firebase.js
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBUsHnd86Vw_Zi_TIGGRbl8OQzXPAZRT2Q',
  authDomain: 'iboxapps-mad2025.firebaseapp.com',
  projectId: 'iboxapps-mad2025',
  storageBucket: 'iboxapps-mad2025.appspot.com',
  messagingSenderId: '473525915679',
  appId: '1:473525915679:web:49144919922e121395452a',
  databaseURL: 'https://iboxapps-mad2025-default-rtdb.firebaseio.com/',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); // WAJIB inisialisasi sekali
}

export default firebase;
