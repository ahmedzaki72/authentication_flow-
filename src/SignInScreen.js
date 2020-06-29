import React, {useContext} from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';
import {AuthContext} from './utils';

export function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = useContext(AuthContext);
  const {container, input} = styles;

  return (
    <View style={container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={input}
      />
      <Button title="Sign in" onPress={() => signIn({username, password})} />
      <Button title="Sign Out" onPress={() => navigation.navigate('SignOut')} />
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
