import React, {useState} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import logo from '../../../assets/icon.jpg';
import {navigationScreens} from '../../navigation/navigation';
import RNPickerSelect from 'react-native-picker-select';
import {Button, Container, Content, Icon, Logo, TextTitle} from './styles';
interface Props {
  headerSpanded?: boolean;
  goBack?: boolean;
  title?: string;
}

export default function HeaderComponent({goBack = false, title = ''}: Props) {
  const navigation = navigationScreens();
  const [language, setLanguage] = useState('🇧🇷');
  const [loading, setLoading] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<string>('');

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
      <Content>
        <Button onPress={() => navigation.openDrawer()}>
          <Logo source={logo} resizeMode={'contain'} />
        </Button>

        {/* <TextTitle>{language}</TextTitle> */}
        <RNPickerSelect
          value={language}
          onValueChange={language => setLanguage(language)}
          placeholder={{label: 'Seleciona uma linguagem',
          value: null,
          color: '#9EA0A4',}}
          items={[
            {label: '🇧🇷', value: 'br'},
            {label: '🇺🇸', value: 'us'},
            {label: '🇪🇸', value: 'es'},
          ]}
          style={pickerSelectStyles}
        />
      </Content>
    </Container>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
