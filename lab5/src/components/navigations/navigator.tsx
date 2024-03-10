import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@my-types/route';
import { StartScreen, SecondScreen, ThirdScreen } from '@components/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ title: 'Начало' }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ title: 'Второй' }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ title: 'Третий' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
