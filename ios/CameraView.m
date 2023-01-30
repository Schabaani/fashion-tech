//
//  CameraView.m
//  DietDoctorEat
//
//  Created by Amir Shabani on 11/8/1401 AP.
//

#import <React/RCTViewManager.h>
 
//@interface RCT_EXTERN_MODULE(RCTCameraViewManager, RCTViewManager)
@interface RCT_EXTERN_REMAP_MODULE(CameraView, RCTCameraViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(onResultImageExported, RCTBubblingEventBlock);
RCT_EXPORT_VIEW_PROPERTY(onIsSupported, RCTBubblingEventBlock);
RCT_EXTERN_METHOD(takePhoto);
@end
