import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Title } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>🏠 Your Dashboard</Title>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Workouts')}
        style={styles.button}
        icon="dumbbell"
      >
        Workouts
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MealPlan')}
        style={styles.button}
        icon="food"
      >
        Meal Plans
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Progress')}
        style={styles.button}
        icon="chart-line"
      >
        Track Progress
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('HealthMonitor')}
        style={styles.button}
        icon="heart-pulse"
      >
        Health Monitor
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color: '#5e60ce',
  },
  button: {
    width: '100%',
    marginBottom: 12,
    paddingVertical: 6,
  },
});
