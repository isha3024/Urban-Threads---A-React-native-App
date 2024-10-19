import React, { useEffect, useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { LoginScreen, OnBoardingScreen, RegisterScreen, ResetPasswordScreen, VerificationCodeScreen } from '../../screens';
import { ForgetPasswordScreen } from '../../screens/forgetPasswordScreen';

const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <AuthStack.Screen
        name='onBoardingScreen'
        component={OnBoardingScreen}
      />
      <AuthStack.Screen
        name='registerScreen'
        component={RegisterScreen}
      />
      <AuthStack.Screen
        name='loginScreen'
        component={LoginScreen}
      />
      <AuthStack.Screen
        name='forgetPasswordScreen'
        component={ForgetPasswordScreen}
      />
      <AuthStack.Screen
        name='verificationCodeScreen'
        component={VerificationCodeScreen}
      />
      <AuthStack.Screen
        name='resetPasswordScreen'
        component={ResetPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};
