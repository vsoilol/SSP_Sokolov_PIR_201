import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { images } from '@src/assets';
import { MAX_WIDTH } from '@src/constants';

import globalStyles from '@core/global-styles';

interface IBaseLayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

export const BaseLayout = ({ children }: IBaseLayoutProps) => {
  return (
    <SafeAreaView style={[globalStyles.droidSafeArea, styles.container]}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={images.doobrySuccess}></Image>
          </View>
          <View style={styles.bodyContainer}>{children}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    maxWidth: MAX_WIDTH,
    margin: 'auto',
  },
  scrollViewContainer: {
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  bodyContainer: {
    width: '100%',
    height: '100%',
  },
});
