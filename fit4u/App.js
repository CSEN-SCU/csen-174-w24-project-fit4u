import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@react-query';
import AuthPage from './src/pages/AuthPage';
import UnauthPage from './src/pages/UnauthPage';
import ProtectedPage from './src/pages/ProtectedPage';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthPage} />
          <Stack.Screen name="Unauth" component={UnauthPage} />
          <Stack.Screen name="Protected" component={ProtectedPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
