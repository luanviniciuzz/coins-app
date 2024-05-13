import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Splash';
import Start from '../pages/Start';
import HomeTab from './HomeTab';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type RootStackParamList = {
  Splash: undefined;
  Start: undefined;
  HomeTab: undefined
};

const RootStack = createNativeStackNavigator<RootStackParamList>();


export default function Rotas(){
    return(
      <SafeAreaProvider>
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Splash">
              <RootStack.Screen
                name="Splash"
                component={Splash}
                options={{
                  headerShown:false,
                  gestureEnabled:false
                }}
              />
              <RootStack.Screen
                name="Start"
                component={Start}
                options={{
                  headerShown:false
                }}
              />
              <RootStack.Screen
                name="HomeTab"
                component={HomeTab}
                options={{
                  headerShown:false
                }}
              />
            </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
}