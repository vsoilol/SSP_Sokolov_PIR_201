import { TouchableOpacity, Text } from 'react-native';
import { useAppNavigation } from '@hooks/use-app-navigation';

interface IScreenLinkProps {
  screenName: 'Login' | 'Register';
  text: string;
  linkColor: string;
  activeOpacity?: number;
}

export const ScreenLink = ({
  screenName,
  text,
  linkColor,
  activeOpacity,
}: IScreenLinkProps) => {
  const navigation = useAppNavigation();

  const handlePress = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={activeOpacity}>
      <Text
        style={{
          color: linkColor,
          fontFamily: 'MontserratSemiBold',
          textTransform: 'uppercase',
          letterSpacing: 1.5,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
