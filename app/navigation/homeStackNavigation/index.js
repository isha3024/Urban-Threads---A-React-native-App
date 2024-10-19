import React, { useEffect, useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, HomeNotificationScreen } from '../../screens';


const HomeStack = createStackNavigator();

export const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <HomeStack.Screen 
        name="homeScreen" 
        component={HomeScreen} 
      />
      <HomeStack.Screen 
        name="homeNotificationScreen" 
        component={HomeNotificationScreen} 
      />
    </HomeStack.Navigator>
  )
}
