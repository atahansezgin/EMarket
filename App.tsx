import React from 'react';
import Navigation from './src/navigation';
import AppProvider from './src/providers/AppProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation />
      </GestureHandlerRootView>
    </AppProvider>
  );
}

export default App;
