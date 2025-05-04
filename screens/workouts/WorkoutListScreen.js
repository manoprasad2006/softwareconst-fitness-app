import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Text, Animated } from 'react-native';
import WorkoutCard from '../../components/WorkoutCard';
import { Ionicons } from '@expo/vector-icons';

const dummyWorkouts = [
  { id: '1', name: 'Cardio Blast', duration: 30, type: 'Cardio', intensity: 'High' },
  { id: '2', name: 'Strength Training', duration: 45, type: 'Strength', intensity: 'Medium' },
  { id: '3', name: 'Yoga Flex', duration: 40, type: 'Flexibility', intensity: 'Low' },
  { id: '4', name: 'HIIT Session', duration: 25, type: 'HIIT', intensity: 'High' },
  { id: '5', name: 'Pilates Core', duration: 40, type: 'Flexibility', intensity: 'Medium' },
  { id: '6', name: 'Full Body Circuit', duration: 50, type: 'Strength', intensity: 'High' },
];

export default function WorkoutListScreen() {
  const [searchText, setSearchText] = useState('');
  const [filteredWorkouts, setFilteredWorkouts] = useState(dummyWorkouts);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = dummyWorkouts.filter((workout) =>
      workout.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredWorkouts(filtered);
  };

  // Animated scaling effect for cards
  const scale = new Animated.Value(1);

  const handleCardPress = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.05,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#5e60ce" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Workouts"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>

      <Text style={styles.workoutCount}>{filteredWorkouts.length} Workouts Found</Text>

      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View style={{ transform: [{ scale }] }}>
            <WorkoutCard workout={item} onPress={handleCardPress} />
          </Animated.View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#fafafa',
  },
  workoutCount: {
    fontSize: 22,
    color: '#5e60ce',
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
});
