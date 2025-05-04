import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Title } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (email && password) navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>👋 Welcome Back</Title>
      <TextInput label="📧 Email" value={email} onChangeText={setEmail} style={styles.input} mode="outlined" />
      <TextInput label="🔒 Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} mode="outlined" />
      <Button mode="contained" onPress={login} style={styles.button}>🚀 Login</Button>
      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>📝 No account? Sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f8f9fa' },
  title: { textAlign: 'center', marginBottom: 20, fontSize: 26, color: '#5e60ce' },
  input: { marginBottom: 12 },
  button: { marginTop: 10, padding: 5 },
  link: { marginTop: 20, textAlign: 'center', color: '#5e60ce', fontSize: 16 },
});