import { Text, View } from 'react-native';
import Button from '@components/button';
import { useAppNavigation } from '@hooks/use-app-navigation';

import styles from './styles';
import { WelcomeProps } from '@my-types/route';

export const Welcome = ({ route }: WelcomeProps) => {
  const navigation = useAppNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать</Text>

      <Text>Логин</Text>
      <Text>{route.params?.userCredentials.login}</Text>

      <Text>Пароль</Text>
      <Text>{route.params?.userCredentials.password}</Text>

      <Button
        title="Выйти"
        onPress={() => handleLogout()}
        style={styles.button}
        textStyle={styles.buttonText}
        activeOpacity={0.8}
      />
    </View>
  );
};
