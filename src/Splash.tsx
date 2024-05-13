import React from 'react';
import {Image, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import THEME from './assets/styles/theme'
import Container from './components/Container';

const Splash = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const star = () => {
    navigation.navigate('HomeTab')
  }

  React.useEffect(() => {
      setTimeout(() => {
        star()
      },1500)
  },[])

  return (
    <Container>
      <Image
        source={require('./assets/img/logo.png')}
      />
    </Container>
  );
};

export default Splash