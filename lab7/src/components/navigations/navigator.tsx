import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@my-types/route';
import Login from '@screens/login';
import Register from '@screens/register';
import BaseLayout from '@components/base-layout';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register">
          {props => (
            <BaseLayout>
              <Register />
            </BaseLayout>
          )}
        </Stack.Screen>

        <Stack.Screen name="Login">
          {props => (
            <BaseLayout>
              <Login />
            </BaseLayout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
