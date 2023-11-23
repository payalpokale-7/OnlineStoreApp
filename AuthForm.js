import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from '../redux/actions/userActions';

const AuthForm = ({ isRegistration }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleAuth = () => {
    if (isRegistration) {
      // Register user
      dispatch(registerUser({ email, password }));
    } else {
      // Log in user
      dispatch(loginUser({ email, password }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegistration ? 'Register' : 'Login'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={isRegistration ? 'Register' : 'Login'} onPress={handleAuth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default AuthForm;
