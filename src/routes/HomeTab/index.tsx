import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../pages/home/HomePage';
import WalletPage from '../../pages/wallet/WalletPage';
import ProfilePage from '../../pages/profile/ProfilePage';
import SearchPage from '../../pages/search/SearchPage';



const Tab = createBottomTabNavigator();


export default function HomeTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown:false,
           
          }}
          name="Home"
          component={HomePage}
          
        />
        <Tab.Screen
          options={{headerShown:false}}
          name="Wallet"
          component={WalletPage}
        />
        <Tab.Screen
          options={{headerShown:false}}
          name="Search"
          component={SearchPage}
        />
        <Tab.Screen
          options={{headerShown:false}}
          name="Profile"
          component={ProfilePage}
        />
      </Tab.Navigator>
    )
}