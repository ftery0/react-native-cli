import React from 'react';
import {StyleSheet, SafeAreaView, View, Dimensions, Image} from 'react-native';
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
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/matzip.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인하기"
          onPress={() =>
            navigation.navigate(authNaviagtions.LOGIN)
          }></CustomButton>
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() =>
            navigation.navigate(authNaviagtions.SIGNUP)
          }></CustomButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
});

export default AuthHomeScreen;
