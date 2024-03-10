import { useAppNavigation } from '@src/hooks/use-app-navigation';
import { Button, Text, View, StyleSheet } from 'react-native';

export const StartScreen = () => {
  const navigation = useAppNavigation();

  return (
    <>
      <Text style={styles.text}>Первый экран</Text>
      <View style={styles.button_view}>
        <Button
          title="Перейти на второй экран"
          onPress={() => navigation.navigate('Second')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button_view: {
    padding: '30%',
    paddingTop: '0%',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: '5%',
  },
});
