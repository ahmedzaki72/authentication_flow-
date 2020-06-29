import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export function SplashScreen() {
  const {container, text} = styles;
  return (
    <View style={container}>
      <Text style={text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
