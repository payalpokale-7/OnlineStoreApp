import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const AuthScreen = ({ navigation }) => {
  const [isRegistration, setIsRegistration] = useState(false);

  const toggleAuthMode = () => {
    setIsRegistration((prevMode) => !prevMode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegistration ? 'Register' : 'Login'}</Text>
      <AuthForm isRegistration={isRegistration} />
      <Button
        title={isRegistration ? 'Already have an account? Login' : 'New user? Register'}
        onPress={toggleAuthMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default AuthScreen;
