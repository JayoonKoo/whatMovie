import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SearchContexProvider} from './context/SearchContex';
import RootStack from './screens/RootStack';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SearchContexProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
    </SearchContexProvider>
  );
};

export default App;
