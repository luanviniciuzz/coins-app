import * as React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../pages/home/HomePage';
import WalletPage from '../../pages/wallet/WalletPage';
import ProfilePage from '../../pages/profile/ProfilePage';
import SearchPage from '../../pages/search/SearchPage';
import CustomBottomTab from '../../components/CustomBottomTab';

export type BottomTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Search: undefined;
  Profile: undefined;
};

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props}/>
}

export default function HomeTab() {


  const Tab = createBottomTabNavigator<BottomTabParamList>();
    return (
      <Tab.Navigator
        tabBar={CustomBottomTabs}
      >
        <Tab.Screen
          options={{
            headerShown:false
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