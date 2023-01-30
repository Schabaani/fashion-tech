import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CameraScreen from '../scenes/camera';
import ResultScreen from '../scenes/result';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
