import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapHomeScreen from '../../screens/Map/MapHomeScreen';
import FeedHomeScreen from "../../screens/Feed/FeedHome.Screens";
import CalendarHomeScreen from '../../screens/Calendar/CalendarHomeScreen';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
    
  return (
   <Drawer.Navigator>
     <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
   </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({});

export default MainDrawerNavigator;