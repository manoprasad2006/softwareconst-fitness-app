import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5e60ce',
    secondary: '#4361ee',
    background: '#f1f1f1',
    surface: '#ffffff',
    text: '#333333',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
