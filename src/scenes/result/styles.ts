import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/';

export const Style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
