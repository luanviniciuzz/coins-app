import React from "react";
import {StyleSheet, View, Text, Pressable, useWindowDimensions} from 'react-native';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle,withSpring, withTiming } from "react-native-reanimated";
import BottomTabIcon from './BottomTabIcon';
import THEME from '../assets/styles/theme'

const CustomBottomTab = ({state, descriptors, navigation}: BottomTabBarProps) => {

  const insets = useSafeAreaInsets();
  const {width} = useWindowDimensions();
  const MARGIN = 20;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(TAB_WIDTH * state.index)}],
    };
  }); 
  return(
    <View style={[styles.tabBarContainer, {width: TAB_BAR_WIDTH, bottom:MARGIN}]}>
      <Animated.View style={[
        styles.slidingTabContainer,
        {width:TAB_WIDTH},
        translateAnimation
        ]}>
        <View style={styles.slidingTab}/>
      </Animated.View>
      {
          state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, {merge:true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <View style={styles.contentContainer}>
                <BottomTabIcon route={route.name} isFocused={isFocused} />
                {isFocused ? <Text
                  style={{
                    color: isFocused ? THEME.COLORS.PURPLE : 'white',
                    fontSize: 12,
                  }}>
                  {route.name}
                </Text> : null }
                
              </View>
            </Pressable>
          );
        })
      }
    </View>
  )
}

export default CustomBottomTab

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: THEME.COLORS.TABBAR,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center'
  },
  slidingTab: {
    width: 70,
    height: 70,
    borderRadius: 16,
    backgroundColor: THEME.COLORS.TABSELECT,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
})
