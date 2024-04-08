import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContainer from './src/navigations/AppNavigation';
const App = () => {
  
  return (
    <SafeAreaProvider>
      <AppContainer/>
    </SafeAreaProvider>
  )
};

export default App;