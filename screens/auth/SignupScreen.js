import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    if (name && email && password) navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>🆕 Create Account</Title>
      <TextInput label="👤 Name" value={name} onChangeText={setName} style={styles.input} mode="outlined" />
      <TextInput label="📧 Email" value={email} onChangeText={setEmail} style={styles.input} mode="outlined" />
      <TextInput label="🔒 Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} mode="outlined" />
      <Button mode="contained" onPress={signup} style={styles.button}>✅ Sign Up</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f8f9fa' },
  title: { textAlign: 'center', marginBottom: 20, fontSize: 26, color: '#4361ee' },
  input: { marginBottom: 12 },
  button: { marginTop: 10, padding: 5 },
});
