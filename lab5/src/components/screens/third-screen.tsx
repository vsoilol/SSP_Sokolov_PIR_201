import { useAppNavigation } from '@src/hooks/use-app-navigation';
import { Button, Text, View, StyleSheet } from 'react-native';

export const ThirdScreen = () => {
  const navigation = useAppNavigation();

  return (
    <View>
      <Text style={styles.text}>third screen</Text>
      <View style={styles.button_view}>
        <Button title="go back" onPress={() => navigation.navigate('Second')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: '5%',
  },
  button_view: {
    padding: '30%',
    paddingTop: '0%',
  },
});
