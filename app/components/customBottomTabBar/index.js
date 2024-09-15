import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

import { color, IcAccount, IcCart, IcHeart, IcHome, IcSearch, size } from '../../theme';
import * as styles from './styles'


export const CustomBottomTabBar = ({state, descriptors, navigation}) => {

  const iconMapping = {
    homeStackNavigation: {
      active: <IcHome />,
      inactive: <IcHome fill={color.inputPlaceHolderTextColor} />
    },
    searchStackNavigation: {
      active: <IcSearch />,
      inactive: <IcSearch fill={color.inputPlaceHolderTextColor} />
    },
    savedStackNavigation: {
      active: <IcHeart />,
      inactive: <IcHeart fill={color.inputPlaceHolderTextColor} />
    },
    cartStackNavigation: {
      active: <IcCart />,
      inactive: <IcCart fill={color.inputPlaceHolderTextColor} />
    },
    accountStackNavigation: {
      active: <IcAccount />,
      inactive: <IcAccount fill={color.inputPlaceHolderTextColor} />
    },
  }

  return (
    <View style={styles.mainBottomContainer()}>
    {
      state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = 
        options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const Icon = isFocused 
          ? iconMapping[route.name]?.active 
          : iconMapping[route.name]?.inactive;
        
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.bottomBarItem()}
            key={index.toString()}
          >
            {Icon}
            <Text style={styles.screenLabel(isFocused)}>{label}</Text>
          </TouchableOpacity>
        )
      })
    }
    </View>
  )
}
