import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const MAX_WIDTH = 820;
export const WIDTH = width > MAX_WIDTH ? MAX_WIDTH : width;
export const SLIDER_ITEM_SIZE =
  Platform.OS === 'ios' ? WIDTH * 0.62 : WIDTH * 0.64;
