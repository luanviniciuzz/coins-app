import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import THEME from '../assets/styles/theme'


const Container = (props: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        flex: 1,
        padding:'5%',
        backgroundColor:THEME.COLORS.BACKGROUND
      }}>
      <StatusBar backgroundColor={THEME.COLORS.BACKGROUND}/>
     {props.children}
    </View>
  );
};

export default Container