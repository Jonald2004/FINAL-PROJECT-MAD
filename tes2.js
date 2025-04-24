import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from './assets/logo.svg';

const App = () => {
  return (
    <View style={styles.container}>
      <Logo width={120} height={120} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
