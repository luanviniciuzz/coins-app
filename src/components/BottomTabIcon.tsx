import React from 'react';
import {View} from 'react-native';
import HomeIcon from '../assets/svg/home.svg';
import WalletIcon from '../assets/svg/wallet.svg';
import ProfileIcon from '../assets/svg/profile.svg';
import SearchIcon from '../assets/svg/search.svg';
import THEME from '../assets/styles/theme';

interface Props {
  route: string;
  isFocused: boolean;
}

const BottomTabIcon = ({route, isFocused}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 34;
    let width: number = 34;

    switch (route) {
      case 'Home':
        return (
          <HomeIcon
            width={width}
            height={height}
            fill={isFocused ? THEME.COLORS.PURPLE : THEME.COLORS.WHITE}
          />
        );
      case 'Search':
        return (
          <SearchIcon
            width={width}
            height={height}
            fill={isFocused ? THEME.COLORS.PURPLE : THEME.COLORS.WHITE}
          />
        );
      case 'Wallet':
        return (
          <WalletIcon
            width={width}
            height={height}
            fill={isFocused ? THEME.COLORS.PURPLE : THEME.COLORS.WHITE}
          />
        );
      case 'Profile':
        return (
          <ProfileIcon
            width={width}
            height={height}
            fill={isFocused ? THEME.COLORS.PURPLE : THEME.COLORS.WHITE}
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;