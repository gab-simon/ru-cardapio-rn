import React, {useEffect} from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RoutesScreen from './routesScreens';
import SplashScreen from 'react-native-splash-screen';

const Routes: React.FC = () => {
  const colorScheme = Appearance.getColorScheme();

  const setTheme = async () => {
    if (colorScheme === 'dark') {
      await AsyncStorage.setItem('theme', 'dark');
    } else {
      await AsyncStorage.setItem('theme', 'light'); 
    }
  }

  useEffect( () => {
    SplashScreen.hide();
    setTheme();
  });

  return <RoutesScreen />;
};

export default Routes;
