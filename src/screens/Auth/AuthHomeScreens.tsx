import React from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigation/stack/AuthStackNavigator';
import {authNaviagtions} from '../../constants/navigation.constants';
import CustomButton from '../../components/CustomButton';


type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNaviagtions.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        label="로그인하기"
        onPress={() => navigation.navigate(authNaviagtions.LOGIN)}
       >
       </CustomButton>
        <CustomButton
        label="회원가입하기"
        variant='outlined'
        onPress={() => navigation.navigate(authNaviagtions.SIGNUP)}
        >

        </CustomButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    height:500
  }
});

export default AuthHomeScreen;
