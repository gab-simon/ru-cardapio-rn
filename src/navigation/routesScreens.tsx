import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RoutesScreensParamsList} from '../models/RoutesParams';
import AboutView from '../screens/About';
import CampusView from '../screens/Campus';
import HomeView from '../screens/Home';
import DrawerRoutes from './routesDrawerScreens';

const Private = createNativeStackNavigator<RoutesScreensParamsList>();

export default function RoutesScreen() {
  return (
    <Private.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="RoutesDrawer"
        component={DrawerRoutes}
      />

      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="HomeView"
        component={HomeView}
      />

      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="CampusView"
        component={CampusView}
      />

      <Private.Screen
        options={{
          headerShown: false,
        }}
        name="AboutView"
        component={AboutView}
      />
    </Private.Navigator>
  );
}
