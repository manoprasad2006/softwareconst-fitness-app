import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MealPlanScreen() {
  const handleMealCategorySelection = (category) => {
    console.log(`Selected meal category: ${category}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Meal Plans</Text>
      <Text style={styles.description}>Choose a meal category to get started!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.breakfastButton]}
          onPress={() => handleMealCategorySelection('Breakfast')}
        >
          <MaterialCommunityIcons name="coffee" size={24} color="white" />
          <Text style={styles.buttonText}>🥞 Breakfast</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.lunchButton]}
          onPress={() => handleMealCategorySelection('Lunch')}
        >
          <MaterialCommunityIcons name="food" size={24} color="white" />
          <Text style={styles.buttonText}>🥗 Lunch</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.dinnerButton]}
          onPress={() => handleMealCategorySelection('Dinner')}
        >
          <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="white" />
          <Text style={styles.buttonText}>🍝 Dinner</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>📅 Plan your meals for a balanced diet!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#ff6b6b',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  description: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  breakfastButton: {
    backgroundColor: '#ff6b6b',
  },
  lunchButton: {
    backgroundColor: '#5e60ce',
  },
  dinnerButton: {
    backgroundColor: '#4361ee',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    fontFamily: 'Arial',
  },
  footer: {
    fontSize: 14,
    color: '#5e60ce',
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
});
