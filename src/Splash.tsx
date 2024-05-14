import React, { useEffect, useRef } from 'react';
import {Image, Text, View, Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import THEME from './assets/styles/theme'
import { useSharedValue, withTiming } from 'react-native-reanimated';
import Container from './components/Container';

const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000, // Ajuste a duração conforme necessário
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const Splash = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const star = () => {
    navigation.navigate('HomeTab')
  }

  React.useEffect(() => {
      setTimeout(() => {
        star()
      },2500)
  },[])

  return (
    <Container>
      <FadeInView>
        <Image
          source={require('./assets/img/getup.png')}
          style={{width:150, height:150}}
        />
      </FadeInView>
      <FadeInView>
        <Image
          source={require('./assets/img/text.png')}
          
        />
      </FadeInView>
    </Container>
  );
};

export default Splash