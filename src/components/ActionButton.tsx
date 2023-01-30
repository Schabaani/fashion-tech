import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Colors, FontSize} from '../styles';

type TProps = {
  text: string;
  onPress?: () => void;
};
export const ActionButton = ({text, onPress}: TProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        if (onPress) onPress();
      }}>
      <Text
        style={{
          color: Colors.WHITE,
          fontSize: FontSize.x2,
          paddingHorizontal: 10,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
