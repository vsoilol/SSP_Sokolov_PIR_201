import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import { ISlideItem } from '@src/types';
import { SLIDER_ITEM_SIZE } from '@src/constants';

const { width } = Dimensions.get('screen');

interface ISliderItemProps {
  item: ISlideItem;
}

export const SliderItem = ({ item }: ISliderItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={item.img}
        style={styles.posterImage}
      />
      <Text style={{ fontSize: 24 }} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={{ fontSize: 12 }} numberOfLines={3}>
        {item.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
  },
  posterImage: {
    width: '100%',
    height: SLIDER_ITEM_SIZE * 1.2,
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
