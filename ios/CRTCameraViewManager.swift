//
//  CRTCameraViewManager.swift
//  DietDoctorEat
//
//  Created by Amir Shabani on 11/8/1401 AP.
//

import Foundation
@objc (RCTCameraViewManager)
class RCTCameraViewManager: RCTViewManager {
 
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
 
  override func view() -> UIView! {
    return CameraView()
  }
 
}
