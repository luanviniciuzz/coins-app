import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export default function Start(){

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTab')}
          style={{backgroundColor:'blue', width:100, height:50, borderRadius:16, alignItems:'center', justifyContent:'center'}}
          >
          <Text style={{color:'white'}}>Iniciar</Text>
        </TouchableOpacity>
    </View> 
  )
}