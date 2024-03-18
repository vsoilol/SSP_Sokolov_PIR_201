import { Text } from 'react-native';
import { Navigator } from '@components/navigations';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratSemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
  });

  return !fontsLoaded ? <Text>Loading...</Text> : <Navigator />;
}
