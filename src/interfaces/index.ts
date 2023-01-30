import {RootStackParamList} from '../navigations/router-prop';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

type TCameraScreen = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CameraScreen'>;
};

type TResultScreen = {
  navigation: StackNavigationProp<RootStackParamList, 'ResultScreen'>;
  route: any;
};

type TNav = {
  navigate: (value: string, params?: Object) => void;
};

export {TCameraScreen, TResultScreen, TNav};
