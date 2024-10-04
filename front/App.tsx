import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/navigation/stack/AuthStackNavigator';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
