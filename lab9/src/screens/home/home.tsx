import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';

import Posts from '@components/posts';
import { images } from '@src/assets';
import { useAppNavigation } from '@src/hooks/use-app-navigation';

import styles from './styles';

export const Home = () => {
  const navigation = useAppNavigation();

  const [isPopularSelected, setIsPopularSelected] = useState<boolean>(false);

  const onTabPressed = () => {
    setIsPopularSelected(!isPopularSelected);
  };

  const handleLogout = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollViewContainer}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contacts')}
            style={styles.settingsContainer}>
            <Image
              source={images.headerIcon}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.settingsText}>Контакты</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity onPress={handleLogout} activeOpacity={0.8}>
              <Text
                style={{
                  color: '#ffffff',
                  letterSpacing: 1.5,
                }}>
                Выйти
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>Поиск фото</Text>

        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Найти вдохновение ..."
            style={styles.searchBarInput}
            placeholderTextColor="#9ca1a2"
          />
          <Icon name="magnifying-glass" size={15} color="#9ca1a2" />
        </View>
      </View>

      <View style={styles.scrollViewContent}>
        <View style={styles.style1}>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <TouchableOpacity
              onPress={onTabPressed}
              style={{
                borderBottomColor: isPopularSelected ? '#044244' : '#FFF',
                borderBottomWidth: 4,
                paddingVertical: 6,
              }}>
              <Text
                style={{
                  color: isPopularSelected ? '#044244' : '#9ca1a2',
                }}>
                ПОПУЛЯРНЫЕ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onTabPressed}
              style={{
                borderBottomColor: isPopularSelected ? '#FFF' : '#044244',
                borderBottomWidth: 4,
                paddingVertical: 6,
                marginLeft: 30,
              }}>
              <Text
                style={{
                  color: isPopularSelected ? '#9ca1a2' : '#044244',
                }}>
                НЕДАВНИЕ
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Posts
              onPress={() =>
                navigation.navigate('Detail', {
                  user: {
                    id: 1,
                    name: 'Макс Батор',
                    photo: images.profile1,
                    location: 'Москва, Россия',
                  },
                })
              }
              name="Макс Батор"
              profileImage={images.profile1}
              postImage={images.post5}
            />
            <View style={styles.style4}></View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.style5}></View>
            <Posts
              onPress={() =>
                navigation.navigate('Detail', {
                  user: {
                    id: 2,
                    name: 'Эрика Берка',
                    photo: images.profile2,
                    location: 'Минск, Беларусь',
                  },
                })
              }
              name="Эрика Берка"
              profileImage={images.profile2}
              postImage={images.post6}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Posts
              onPress={() =>
                navigation.navigate('Detail', {
                  user: {
                    id: 3,
                    name: 'Макс Батор',
                    photo: images.profile3,
                    location: 'Могилев, Беларусь',
                  },
                })
              }
              name="Макс Батор"
              profileImage={images.profile3}
              postImage={images.post3}
            />
            <View style={styles.style6}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
