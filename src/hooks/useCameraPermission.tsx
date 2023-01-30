import {useEffect, useState} from 'react';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

export const useCameraPermission = () => {
  const [isCameraGranted, setIsCameraGranted] = useState(false);
  useEffect(() => {
    request(PERMISSIONS.IOS.CAMERA).then(result => {
      switch (result) {
        case RESULTS.GRANTED:
          setIsCameraGranted(true);
          break;
        default:
          break;
      }
    });
  }, []);
  return isCameraGranted;
};
