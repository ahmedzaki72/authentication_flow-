import React, {useContext} from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';
import {AuthContext} from './utils';

export function SignUpScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signUp} = useContext(AuthContext);
  const {container, input} = styles;

  return (
    <View style={container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={input}
      />
      <Button title="Sign in" onPress={() => signUp({email, password})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
  },
});
