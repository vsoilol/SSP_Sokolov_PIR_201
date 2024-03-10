import { StyleSheet, View, SafeAreaView } from 'react-native';
import Slider from '@components/slider';
import globalStyles from '@core/global-styles';
import { ISlideItem } from '@src/types';
import SpringButton from '@src/components/spring-button';

// https://picsum.photos/1920/1080
const sliderItems: ISlideItem[] = [
  {
    photo: {
      uri: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
    },
  },
  {
    photo: {
      uri: 'https://fastly.picsum.photos/id/36/1920/1080.jpg?hmac=5vmLfKJtn1ZD0DPlNB5IKKpnIt6pYsv2TvkZN82KOe0',
    },
  },
  {
    photo: {
      uri: 'https://fastly.picsum.photos/id/1081/1920/1080.jpg?hmac=Cxwi_LWoCVD7tcZqMOcXDJssRuTWdT69UfAFMIxdwGU',
    },
  },
  {
    photo: {
      uri: 'https://fastly.picsum.photos/id/1018/1920/1080.jpg?hmac=Z-0vPrMvqfkGFzkq3vnamIQKXBk0KSXVxNIKXKCtW4I',
    },
  },
  {
    photo: {
      uri: 'https://fastly.picsum.photos/id/628/1920/1080.jpg?hmac=SoPahfgGnxqmrbdY-4XdJsjLeLrRD7yaqD5MsDmpXM4',
    },
  },
  {
    photo: {
      uri: 'https://fastly.picsum.photos/id/688/1920/1080.jpg?hmac=FkWske4KLMeWwDi-prMLozfa2hS2Pe2ohijXrDX2730',
    },
  },
];

export default function App() {
  return (
    <SafeAreaView style={[globalStyles.droidSafeArea, styles.container]}>
      <View style={styles.sliderContainer}>
        <Slider items={sliderItems} />
      </View>

      <View style={styles.buttonContainer}>
        <SpringButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
  },
});
