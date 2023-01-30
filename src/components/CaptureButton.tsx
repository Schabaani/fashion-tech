import React from 'react';
import {TouchableOpacity, View, StyleSheet, Animated} from 'react-native';
import {Colors} from '../styles';

type TProps = {
  onPress: () => void;
  testID?: string;
};
export const CaptureButton = ({onPress, testID}: TProps) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 0.4,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View style={[{transform: [{scale}]}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        testID={testID ?? 'custom-button'}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => {
          if (onPress) onPress();
        }}
        style={style.root}>
        <View style={style.circle} />
      </TouchableOpacity>
    </Animated.View>
  );
};
const style = StyleSheet.create({
  root: {
    position: 'relative',
    width: 60,
    height: 60,
    borderRadius: 30,
    bottom: -30,
    borderColor: Colors.WHITE,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.WHITE,
  },
});
