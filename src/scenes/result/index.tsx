import React, {useCallback} from 'react';
import {SafeAreaView, Image, Dimensions, View} from 'react-native';
import {ActionButton} from '../../components/ActionButton';
import {TResultScreen} from '../../interfaces';
import {Style} from './styles';

const ResultScreen = (props: TResultScreen) => {
  const {width: size} = Dimensions.get('screen');
  const goBack = useCallback(() => {
    props.navigation.goBack();
  }, []);
  return (
    <SafeAreaView style={Style.root}>
      <Image
        source={props.route?.params?.url}
        style={{width: size, height: size}}
      />
      <View style={Style.buttonsWrapper}>
        <ActionButton text="Retake" onPress={goBack} />
        <ActionButton text="Use" />
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
