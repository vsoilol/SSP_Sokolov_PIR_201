import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IUser } from '../user.interface';

export type RootStackParamList = {
  Contacts: undefined;
  Detail: { user: IUser } | undefined;
  Home: undefined;
};

export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;
