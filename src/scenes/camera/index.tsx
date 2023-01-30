import React, {useCallback, useRef, useState} from 'react';
import {Text, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CameraView} from '../../components/CameraView';
import {CaptureButton} from '../../components/CaptureButton';
import {TCameraScreen} from '../../interfaces';
import {Style} from './styles';
import {useCameraPermission} from '../../hooks/useCameraPermission';

export default function CameraScreen({navigation}: TCameraScreen) {
  const camera = useRef(null);
  const [isSupport, setIsSupport] = useState<boolean | null>(null);
  const isCameraGranted = useCameraPermission();
  const {width} = Dimensions.get('screen');
  const setOnSupport = useCallback(
    (value: boolean) => {
      setIsSupport(value);
    },
    [isSupport],
  );

  return (
    <SafeAreaView edges={['top', 'bottom']} style={Style.container}>
      {!isSupport && (
        <Text style={Style.notSupported}>Face Detection No Supported</Text>
      )}
      {isCameraGranted && isSupport ? (
        <>
          <CameraView
            onResult={function (url: string): void {
              navigation.navigate('ResultScreen', {url});
            }}
            size={width}
            onSupport={setOnSupport}
          />

          <CaptureButton
            onPress={() => {
              camera.current.takePhoto();
            }}
          />
        </>
      ) : (
        <Text>Camera Not Granted</Text>
      )}
    </SafeAreaView>
  );
}
