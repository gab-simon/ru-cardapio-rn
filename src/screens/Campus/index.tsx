import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HeaderComponent from '../../components/HeaderComponent';
import {
  Container,
  Content,
  ContentSelect,
  ContentSelections,
  Selection,
  TextTitle,
  TextValue,
  TextWelCome,
} from './styles';

const CampusView = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [Campus, setCampus] = React.useState(0);
  async function getCampus() {
    const campus = await AsyncStorage.getItem('campus');
    console.log('here',campus);
    if (campus) {
      setCampus(JSON.parse(campus));
    }
  }

  useEffect(() => {
    console.log(Campus);
    const campusAsync = AsyncStorage.setItem('campus', JSON.stringify(Campus));
    if(campusAsync !== Campus){
      getCampus();
    }
  }, [Campus]);

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

  const colorStylee = {
    color: !isDarkMode ? Colors.lighter : Colors.darker,
  };

  const campus = [
    {
      id: 1,
      name: 'Politécnico',
    },
    {
      id: 2,
      name: 'Reitoria',
    },
    {
      id: 3,
      name: 'Agrarias',
    },
    {
      id: 4,
      name: 'Botânico',
    },
  ];

  return (
    <Container style={backgroundStyle}>
      <HeaderComponent></HeaderComponent>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Content>
        <TextWelCome style={colorStyle}>
          Coloque o Widget do aplicativo, para ter acesso ao cardápio a todo
          momento 😋
        </TextWelCome>

        <ContentSelections>
          <TextTitle style={colorStyle}>Selecione um campus</TextTitle>

          <ContentSelect style={selectStyle}>
            {campus.map(campus => (
              <Selection
                key={campus.id}
                onPress={() => setCampus(campus.id)}
                style={
                  Campus === campus.id
                    ? {backgroundColor: '#D9A9FF'}
                    : {backgroundColor: 'transparent'}
                }>
                <TextValue style={colorStylee}>{campus.name}</TextValue>
              </Selection>
            ))}
          </ContentSelect>
        </ContentSelections>
      </Content>
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
