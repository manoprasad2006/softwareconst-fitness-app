import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, TextInput, Button } from 'react-native-paper';

export default function WeightTrackerScreen() {
  const [weight, setWeight] = useState('');

  const handleSubmit = () => {
    if (weight) {
      console.log(`New weight: ${weight}kg`);
      setWeight('');
    } else {
      console.log('Please enter a valid weight');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.title}>📊 Track Your Weight</Text>
          <TextInput
            label="Enter your weight (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>💪 Save Weight</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f3f8' },
  card: { width: '80%', marginBottom: 20, borderRadius: 10, padding: 20 },
  title: { textAlign: 'center', marginBottom: 10, color: '#5e60ce' },
  input: { marginBottom: 10 },
  button: { marginTop: 10, width: '100%' },
});
