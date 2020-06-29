import React, {useContext} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {AuthContext} from './utils';

export function HomeScreen() {
  const {signOut} = useContext(AuthContext);
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
