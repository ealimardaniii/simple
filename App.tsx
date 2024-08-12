import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AppNavigationContainer} from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <AppNavigationContainer />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
