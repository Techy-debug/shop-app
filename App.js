import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/routes/AppNavigator';
import GlobalProvider from './src/store/GlobalState';


export default function App() {
  return (
    <GlobalProvider>
      <AppNavigator />
    </GlobalProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
