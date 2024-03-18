import { IContactInterface, IUser } from '@src/types';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import { ContactItem } from './contact-item';
import { useAppNavigation } from '@src/hooks/use-app-navigation';

const contactsData: IUser[] = [
  {
    id: 1,
    name: 'Джон Смит',
    photo: { uri: 'https://i.ibb.co/6XBZgw6/kachok-s-noutbukom-mem-6.jpg' },
    location: 'Бостон, США',
  },
  {
    id: 2,
    name: 'Джонатан Смит',
    photo: { uri: 'https://i.ibb.co/xDWFbV6/images.jpg' },
    location: 'Нью-Йорк, США',
  },
  {
    id: 3,
    name: 'Ли Джонсон',
    photo: { uri: 'https://i.ibb.co/TP77r73/kachok-s-noutbukom-mem-4.jpg' },
    location: 'Пекин, Китай',
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

      <View style={{ paddingBottom: 20 }}>
        <Button
          title={'Закрыть'}
          color={'green'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
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
