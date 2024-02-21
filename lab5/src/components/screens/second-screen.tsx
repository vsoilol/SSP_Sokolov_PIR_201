import { useAppNavigation } from '@src/hooks/use-app-navigation';
import { Button, Text, View, StyleSheet } from 'react-native';

export const SecondScreen = () => {
  const navigation = useAppNavigation();

  return (
    <View>
      <Text style={styles.text}>second screen</Text>
      <View style={styles.buttons_view}>
        <View style={styles.button_wrapper}>
          <Button
            title="go back"
            onPress={() => navigation.navigate('Start')}
          />
        </View>
        <View>
          <Button
            title="to third screen"
            onPress={() => navigation.navigate('Third')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons_view: {
    padding: '30%',
    paddingTop: '0%',
  },
  button_wrapper: {
    marginBottom: '5%',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: '5%',
  },
});
