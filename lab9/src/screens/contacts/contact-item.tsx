import { IContactInterface, IUser } from '@src/types';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface IContactItemProps {
  contact: IUser;
  onPress: (contact: IUser) => void;
}

export const ContactItem = ({ contact, onPress }: IContactItemProps) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(contact)}>
      <Image source={contact.photo} style={styles.photo} />
      <Text style={styles.name}>{contact.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
  },
});
