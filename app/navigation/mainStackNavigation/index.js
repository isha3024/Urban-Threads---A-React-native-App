import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { DemoScreen, SplashScreen } from '../../screens';
import { BottomStackNavigation } from '../bottomStackNavigation';
import { AuthStackNavigation } from '../authStackNavigation';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {

  const [showSplashScreen, setHideSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 2500);
  }, []);

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
        {
          showSplashScreen 
          ? ( <Stack.Screen
                name="splashScreen"
                component={SplashScreen}
                options={{
                  headerShown: false,
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
            ) 
          : null
        }
        <Stack.Screen 
          name='authStackNavigation'
          component={AuthStackNavigation}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="bottomStackNavigation"
          component={BottomStackNavigation}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
