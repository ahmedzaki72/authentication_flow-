/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Navigation from './src/navigation';

const App: () => React$Node = () => {
  const {container} = styles;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={container}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
