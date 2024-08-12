import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AppNavigationContainer} from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <AppNavigationContainer />
        </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
