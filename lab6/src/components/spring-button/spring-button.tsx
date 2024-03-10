import { useEffect, useRef } from 'react';
import { View, StyleSheet, Pressable, Text, Animated } from 'react-native';

export const SpringButton = () => {
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const handleOnPress = () => {
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 20,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable style={style.container} onPress={handleOnPress}>
      <Animated.View
        style={[style.button, { transform: [{ scale: animatedScale }] }]}>
        <Text style={style.buttonText}>Press Me</Text>
      </Animated.View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
