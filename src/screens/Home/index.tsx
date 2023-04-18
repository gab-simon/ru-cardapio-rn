/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  Button,
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
import { Campus, CampusName } from '../../utils/utils';
import {
  Container,
  ContentSelect,
  Content,
  TextWelCome,
  TextTitle,
  TextSubTitle,
  ContainerInfo,
  TextValue,
} from './styles';

// const SharedStorage = NativeModules.SharedStorage;

const HomeView = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('teste');
  const [campus, setCampus] = useState(0);
  const date = moment().format('DD/MM'); 


  async function getCampus() {
    const campus = await AsyncStorage.getItem('campus');
    console.log('here', campus);
    if (campus) {
      let index = JSON.parse(campus);
      console.log(CampusName.campus[2]);
      // setCampus(setCamp);
    }
  }

  useEffect(() => {
    console.log(campus);
    const campusAsync = AsyncStorage.setItem('campus', JSON.stringify(campus));
    if (campusAsync !== campus) {
      getCampus();
    }
  }, [campus]);

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

  const colorInsideStyle = {
    color: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (
    <Container style={backgroundStyle}>
      <HeaderComponent></HeaderComponent>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Content>
        <TextTitle style={colorStyle}>
          Olá, <TextTitle style={{color: 'green'}}>Bom dia.</TextTitle>
        </TextTitle>
        <TextSubTitle TextValue style={colorStyle}>
          Confira o cardápio de hoje {date} campus {campus}
        </TextSubTitle>

        <ContainerInfo>
          <TextTitle style={colorStyle}>☕️ - Café da Manhã</TextTitle>
          <ContentSelect style={selectStyle}>
            <TextValue style={colorInsideStyle}>
              Pão de hot-dog c/ doce de leite {'\n'}Acabaxi
            </TextValue>
          </ContentSelect>

          <TextTitle style={colorStyle}>🍽️ - Almoço</TextTitle>
          <ContentSelect style={selectStyle}>
            <TextValue style={colorInsideStyle}>
              Picadinho especial {'\n'}Vegano: Ervilha seca refogada c/ legumes
              Virado de couve {'\n'}Saladas: folhosa e tomate Mamão
            </TextValue>
          </ContentSelect>

          <TextTitle style={colorStyle}>🍽️ - Jantar</TextTitle>
          <ContentSelect style={selectStyle}>
            <TextValue style={colorInsideStyle}>
              Bisteca/Copa lombo à cigana Vegano: Soja e feijão cavalo ao curry
              Sopa juliana Saladas: folhosa e chuchu
            </TextValue>
          </ContentSelect>
        </ContainerInfo>
      </Content>

      {/* <Button title='Teste' onPress={handleSubmit} /> */}

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

export default HomeView;
