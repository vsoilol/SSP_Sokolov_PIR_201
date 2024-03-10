import { IContactInterface, IUser } from '@src/types';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { ContactItem } from './contact-item';
import { useAppNavigation } from '@src/hooks/use-app-navigation';

const contactsData: IUser[] = [
  {
    id: 1,
    name: 'John Doe',
    photo: { uri: 'https://i.ibb.co/6XBZgw6/kachok-s-noutbukom-mem-6.jpg' },
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: { uri: 'https://i.ibb.co/xDWFbV6/images.jpg' },
  },
  {
    id: 3,
    name: 'Alice Johnson',
    photo: { uri: 'https://i.ibb.co/TP77r73/kachok-s-noutbukom-mem-4.jpg' },
  },
];

export const Contacts = () => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={contactsData}
        renderItem={({ item }) => {
          return (
            <ContactItem
              contact={item}
              onPress={contact =>
                navigation.navigate('Detail', { user: contact })
              }
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
