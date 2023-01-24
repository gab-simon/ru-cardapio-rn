import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { Appearance, AsyncStorage, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeView from '../screens/Home';
import logo from '../../assets/icon.jpg';
import {
  ContainerName,
  Content,
  ContentWelcome,
  FlexLogout,
  Icon,
  Logo,
  TextLogout,
  TextSubTitle,
  TextTitle,
} from './styles';
import CampusView from '../screens/Campus';
import AboutView from '../screens/About';
// import { useAuth } from '../hooks/Auth';
// import { COLORS } from '../constants/Color';

function CustomDrawerContent(props: any) {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = React.useState(colorScheme);

  const colorStyle = {
    color: theme ? Colors.lighter : Colors.darker,
  };

  return (
    <DrawerContentScrollView
      style={{
        flex: 1,
      }}
      {...props}>
      <Content>
        <ContentWelcome>
          <Logo source={logo} />
        </ContentWelcome>
        <TextTitle style={colorStyle}>Olá, <TextTitle style={{color: 'green'}}>Bom dia.</TextTitle></TextTitle>
        <TextSubTitle style={colorStyle}>vamos almoçar?</TextSubTitle>
      </Content>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = React.useState(colorScheme);

  const colorStyle = {
    color: theme ? Colors.lighter : Colors.darker,
  };;

  const backgroundStyle = {
    backgroundColor: theme ? Colors.darker : Colors.lighter,
  };
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#D9A9FF',
        drawerActiveTintColor: theme ? Colors.darker : Colors.lighter,
        drawerInactiveTintColor: theme ? Colors.lighter : Colors.darker,
        drawerStatusBarAnimation: 'slide',
        drawerStyle: {
          backgroundColor: theme ? Colors.darker : Colors.lighter,
          // shadowColor: COLORS.WHITE,
          // borderBottomColor: COLORS.WHITE,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Cardápio" component={HomeView} />
      <Drawer.Screen name="Campus" component={CampusView} />
      <Drawer.Screen name="Sobre" component={AboutView} />
      {/* <Drawer.Screen name="Sincronização" component={SyncView} />
      <Drawer.Screen name="Sobre" component={AboutUsView} /> */}
    </Drawer.Navigator>
  );
}
