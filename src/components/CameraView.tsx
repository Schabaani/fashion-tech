import React from 'react';
import {requireNativeComponent, ViewProps} from 'react-native';

type NativeCameraViewProps = ViewProps & {
  onResultImageExported: (event: Event) => void;
  onIsSupported: (event: Event) => void;
};

export const NativeCameraView =
  requireNativeComponent<NativeCameraViewProps>('CameraView');

type TProps = {
  onResult: (url: string) => void;
  onSupport: (isSupport: boolean) => void;
  size: number;
};
export const CameraView = React.forwardRef<any, TProps>((props, ref) => {
  const {size} = props;

  const onResult = (event: Event) => {
    props.onResult(event.nativeEvent.resultUrl);
  };

  const onSupport = (event: Event) => {
    props.onSupport(event.nativeEvent.isSupported);
  };

  return (
    <>
      <NativeCameraView
        {...props}
        style={{width: size, height: size}}
        ref={ref}
        onResultImageExported={onResult}
        onIsSupported={onSupport}
      />
    </>
  );
});
