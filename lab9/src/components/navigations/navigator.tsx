import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@my-types/route';
import Home from '@src/screens/home';
import Detail from '@src/screens/detail';
import Contacts from '@src/screens/contacts';
import Register from '@screens/register';
import BaseLayout from '@components/base-layout';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register">
          {props => (
            <BaseLayout>
              <Register />
            </BaseLayout>
          )}
        </Stack.Screen>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
