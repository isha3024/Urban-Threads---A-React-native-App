import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { DemoScreen } from '../../screens';
import { BottomStackNavigation } from '../bottomStackNavigation';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {
  // const [showSplashScreen, setHideSplashScreen] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHideSplashScreen(false);
  //   }, 3000);
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="demoScreen"
          component={DemoScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        /> */}
        <Stack.Screen
          name="bottomStackNavigation"
          component={BottomStackNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
