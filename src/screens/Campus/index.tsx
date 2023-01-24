/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HeaderComponent from '../../components/HeaderComponent';
import {
  Container,
  ContentSelect,
  Content,
  TextWelCome,
  TextTitle,
  ContentSelections,
} from './styles';

const CampusView = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const selectStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
    borderRadius: 10,
  };

  const colorStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  return (
    <Container style={backgroundStyle}>
      <HeaderComponent></HeaderComponent>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Content>
        <TextWelCome style={colorStyle}>
          Coloque o Widget do aplicativo, para ter acesso ao cardápio a todo momento 😋
        </TextWelCome>

        <ContentSelections>
          <TextTitle style={colorStyle}>Selecione um campus</TextTitle>
          <ContentSelect style={selectStyle}></ContentSelect>
        </ContentSelections>
      </Content>

      {/* <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
        </View> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default CampusView;
