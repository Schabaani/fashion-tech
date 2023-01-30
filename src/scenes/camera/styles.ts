import {StyleSheet} from 'react-native';
import {Spacing, Colors, FontSize} from '../../styles';
import colors from '../../styles/colors';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.BLACK,
  },
  notSupported: {
    color: Colors.WHITE,
    fontSize: FontSize.x2,
    margin: Spacing.x2,
  },
});
