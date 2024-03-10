import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export const MAX_WIDTH = 820;
export const WIDTH = width > MAX_WIDTH ? MAX_WIDTH : width;
