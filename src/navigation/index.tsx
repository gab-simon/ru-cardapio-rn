import React, {useEffect} from 'react';
import { Appearance, AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RoutesScreen from './routesScreens';

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
