import { useRef } from 'react';
import { View, StyleSheet, FlatList, Animated, Platform } from 'react-native';

import { SliderItem } from './slider-item';
import { SliderPagination } from './slider-pagination';
import { ISlideItem } from '@src/types';

interface ISliderProps {
  items: ISlideItem[];
}

export const Slider = ({ items }: ISliderProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={items}
        horizontal
        pagingEnabled
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return <SliderItem item={item} index={index} />;
        }}
      />
      <SliderPagination data={items} scrollX={scrollX}></SliderPagination>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    rowGap: 20,
  },
});
