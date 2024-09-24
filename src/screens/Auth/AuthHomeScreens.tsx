import React from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigation/stack/AuthStackNavigator';
import {authNaviagtions} from '../../constants/navigation.constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNaviagtions.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="로그인 뷰로 이동"
        onPress={() => navigation.navigate(authNaviagtions.LOGIN)}></Button>
        <Button
        title="회원가입 뷰로 이동"
        onPress={() => navigation.navigate(authNaviagtions.SIGNUP)}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    height:500
  }
});

export default AuthHomeScreen;
