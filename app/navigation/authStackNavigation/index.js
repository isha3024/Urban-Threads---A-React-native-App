import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';

import { LoginScreen, OnBoardingScreen, RegisterScreen, ResetPasswordScreen, SplashScreen, VerificationCodeScreen } from '../../screens';

const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      headerShown: false
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
