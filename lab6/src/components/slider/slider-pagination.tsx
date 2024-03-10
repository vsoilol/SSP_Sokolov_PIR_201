import { StyleSheet, Animated, View, Dimensions } from 'react-native';
import { ISlideItem } from '@src/types';

const { width } = Dimensions.get('screen');

interface SliderPaginationProps {
  data: ISlideItem[];
  scrollX: Animated.Value;
}

export const SliderPagination = ({ data, scrollX }: SliderPaginationProps) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [9, 14, 9],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#000', '#ccc'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, { width: dotWidth, backgroundColor }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
});
