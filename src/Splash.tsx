import React, { useEffect, useRef } from 'react';
import {Image, Text, View, Animated, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import THEME from './assets/styles/theme'

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
    <View  style={{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:THEME.COLORS.BACKGROUND
      }}>
      <StatusBar backgroundColor={THEME.COLORS.BACKGROUND}/>
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
    </View>
  );
};

export default Splash