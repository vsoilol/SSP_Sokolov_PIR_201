import { useRef } from 'react';
import { View, StyleSheet, FlatList, Animated, Platform } from 'react-native';

import { SliderItems } from '@src/data/slider-items';
import { SliderItem } from './slider-item';
import { SliderPagination } from './slider-pagination';

export const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={SliderItems}
        horizontal
        pagingEnabled
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return <SliderItem item={item} />;
        }}
      />
      <SliderPagination data={SliderItems} scrollX={scrollX}></SliderPagination>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 20,
  },
});
