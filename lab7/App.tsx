import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Navigator } from '@components/navigations';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

import globalStyles from '@core/global-styles';

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratSemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
  });

  return !fontsLoaded ? <Text>Loading...</Text> : <Navigator />;
}
