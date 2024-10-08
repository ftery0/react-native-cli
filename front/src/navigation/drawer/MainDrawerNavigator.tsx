import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigatorScreenParams} from '@react-navigation/native';
import FeedHomeScreen from "../../screens/Feed/FeedHome.Screens";
import CalendarHomeScreen from '../../screens/Calendar/CalendarHomeScreen';
import MapStackNavigator, {MapStackParamList} from '../stack/MapStackNavigator';
import {mainNavigations} from '@/constants';

export type MainDrawerParamList = {
  [mainNavigations.HOME]: NavigatorScreenParams<MapStackParamList>;
  [mainNavigations.FEED]: undefined;
  [mainNavigations.CALENDAR]: undefined;
};
const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
    
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerType: 'front',
    }}>
    <Drawer.Screen
      name={mainNavigations.HOME}
      component={MapStackNavigator}
      options={{title: '홈'}}
    />
    <Drawer.Screen
      name={mainNavigations.FEED}
      component={FeedHomeScreen}
      options={{title: '피드'}}
    />
    <Drawer.Screen
      name={mainNavigations.CALENDAR}
      component={CalendarHomeScreen}
      options={{title: '캘린더'}}
    />
  </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({});

export default MainDrawerNavigator;