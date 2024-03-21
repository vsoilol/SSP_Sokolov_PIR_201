import { IUserCredentials } from '@my-types/user-credentials.interface';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: { userCredentials: IUserCredentials } | undefined;
  Register: { userCredentials: IUserCredentials } | undefined;
  Welcome: { userCredentials: IUserCredentials } | undefined;
};

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type RegisterProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;
export type WelcomeProps = NativeStackScreenProps<
  RootStackParamList,
  'Welcome'
>;
