import React from 'react';
import {Image, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const Splash = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const star = () => {
    navigation.navigate('Start')
  }

  React.useEffect(() => {
      setTimeout(() => {
        star()
      },1500)
  },[])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Image
        source={require('./assets/img/logo.png')}
      />
    </View>
  );
};

export default Splash