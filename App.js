/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {

  View,
} from 'react-native';

import messaging from '@react-native-firebase/messaging';
import AuthStack from './src/Navigation/AuthStack';
import Routes from './src/Navigation/Routes';
const App=() => {
 
React.useEffect(()=>{
    requestUserPermission()
},[])
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  
  

  return (
   <View style={{flex:1}}>
    <Routes/>
   </View>
  );
};


export default App;
