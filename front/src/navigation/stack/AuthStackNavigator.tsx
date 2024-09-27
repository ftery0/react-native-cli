import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AuthHomeScreen from '../../screens/Auth/AuthHomeScreens';
import LoginScreens from '../../screens/Auth/LoginScreen';
import {authNaviagtions} from '../../constants/navigation.constants';
import SignScreen from '../../screens/Auth/SignScreen';

export type AuthStackParamList = {
  [authNaviagtions.AUTH_HOME]: undefined;
  [authNaviagtions.LOGIN]: undefined;
  [authNaviagtions.SIGNUP]: undefined;
};
const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          shadowColor: 'gray',
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={authNaviagtions.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={authNaviagtions.LOGIN}
        component={LoginScreens}
        options={{
          headerTitle: '로그인',
        }}
      />
      <Stack.Screen
        name={authNaviagtions.SIGNUP}
        component={SignScreen}
        options={{
          headerTitle: '회원가입',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AuthStackNavigator;
