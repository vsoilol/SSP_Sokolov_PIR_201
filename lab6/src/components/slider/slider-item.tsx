import { WIDTH } from '@src/constants';
import { ISlideItem } from '@src/types';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

interface ISliderItemProps {
  item: ISlideItem;
  index: number;
}

export const SliderItem = ({ item, index }: ISliderItemProps) => {
  return (
    <View style={{ width: WIDTH, height: '100%' }}>
      <ImageBackground source={item.photo} style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>{'Image - ' + (index + 1)}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
