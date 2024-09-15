import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomBottomTabBar } from '../../components';
import { HomeStackNavigation } from '../homeStackNavigation';
import { SearchStackNavigation } from '../searchStackNavigation';
import { SavedStackNavigation } from '../savedStackNavigation';
import { CartStackNavigation } from '../cartStackNavigation';
import { AccountStackNavigation } from '../accountStackNavigation';


const Tab = createBottomTabNavigator();

export const BottomStackNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      
    >
      <Tab.Screen  
        name='homeStackNavigation'
        component={HomeStackNavigation}
        options={{
          tabBarLabel: 'Home',
          headerShown: false
        }}
      />
      <Tab.Screen  
        name='searchStackNavigation'
        component={SearchStackNavigation}
        options={{
          tabBarLabel: 'Search',
          headerShown: false
        }}
      />
      <Tab.Screen  
        name='savedStackNavigation'
        component={SavedStackNavigation}
        options={{
          tabBarLabel: 'Saved',
          headerShown: false
        }}
      />
      <Tab.Screen  
        name='cartStackNavigation'
        component={CartStackNavigation}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false
        }}
      />
      <Tab.Screen  
        name='accountStackNavigation'
        component={AccountStackNavigation}
        options={{
          tabBarLabel: 'Account',
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}
