import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';

// This will handle the animation for the press effect
const AnimatedCard = Animated.createAnimatedComponent(Card);

export default function WorkoutCard({ workout, onPress }) {
  // Animation state
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedCard
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style={[styles.card, { transform: [{ scale }] }]}
      mode="elevated"
    >
      <Card.Content>
        <Text style={styles.title}>{workout.name}</Text>
        <Text style={styles.subtitle}>{`${workout.duration} minutes`}</Text>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <IconButton
          icon="chevron-right"
          size={28}
          onPress={onPress}
          style={styles.iconButton}
          color="#ff6b6b" // Custom color for the icon
        />
      </Card.Actions>
    </AnimatedCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 8, // Adds depth with a higher elevation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    overflow: 'hidden', // Ensures the border-radius works properly
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#5e60ce',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  cardActions: {
    justifyContent: 'flex-end',
    padding: 10,
  },
  iconButton: {
    padding: 0, // Compact icon
    marginLeft: 'auto',
  },
});
