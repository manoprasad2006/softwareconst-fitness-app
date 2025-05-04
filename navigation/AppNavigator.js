import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import HomeScreen from '../screens/dashboard/HomeScreen';
import WorkoutListScreen from '../screens/workouts/WorkoutListScreen';
import MealPlanScreen from '../screens/meals/MealPlanScreen';
import WeightTrackerScreen from '../screens/progress/WeightTrackerScreen';
import HealthMonitorScreen from '../screens/health/HealthMonitorScreen'; // ✅ New import

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workouts" component={WorkoutListScreen} />
        <Stack.Screen name="MealPlan" component={MealPlanScreen} />
        <Stack.Screen name="Progress" component={WeightTrackerScreen} />
        <Stack.Screen name="HealthMonitor" component={HealthMonitorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
