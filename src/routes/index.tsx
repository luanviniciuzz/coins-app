import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Splash';
import HomeTab from './HomeTab';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type RootStackParamList = {
  Splash: undefined;
  HomeTab: undefined
};

const RootStack = createNativeStackNavigator<RootStackParamList>();


const Rotas = () => {
    return(
      <SafeAreaProvider>
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Splash">
              <RootStack.Screen
                name="Splash"
                component={Splash}
                options={{
                  headerShown:false,
                  gestureEnabled:false,
                  animation:'fade'
                }}
              />
              <RootStack.Screen
                name="HomeTab"
                component={HomeTab}
                options={{
                  headerShown:false,
                  animation:'fade'
                }}
              />
            </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
}

export default Rotas