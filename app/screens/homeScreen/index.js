import React, { useEffect, useState } from 'react'
import { View, Text, Platform, PermissionsAndroid, Alert, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';

import * as data from '../../json'
import { Header, Screen, SearchBox } from '../../components'
import { color, IcBell, IcFilter, IcMic, IcSearch, size } from '../../theme'
import * as styles from './styles'
import { check, PERMISSIONS } from 'react-native-permissions';
import { useSelector } from 'react-redux';

const menCategories = data.menCategories;
const products = data.dummyProducts;

export const HomeScreen = () => {

  const notificationStatus = useSelector(state => console.log(state));
  console.log("notificationStatus: ",notificationStatus)

  const [categories, setCategories] = useState(menCategories);
  const [selectedCategory, setSelectedCategory] = useState(menCategories[0]);

  const requestNotificationPermission = async () => {
    if(Platform.OS === 'android') {
      try {
        const granted = PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,{
            title: "Notification Permission",
            message: "This app needs to display notifications",
            buttonPositive: 'Allow',
            buttonNegative: "Don't Allow",
            buttonNeutral: 'Ask me later'
          }
        )
        
      } catch (error) {
        console.log("Error requesting permission,",error)
      }
    }
  }

  const handleCategoryPress = (categorie) => {
    setSelectedCategory(categorie);
  }

  useEffect(() => {
    requestNotificationPermission()
  }, []) 

  return (
    <Screen withScroll translucent={true}>
      <View style={styles.mainView()}>
        <Header 
          headerTitle='Discover'
          headerTitleStyle={styles.headerText()}
          headerRightIcon
          rightIcon={() => (<IcBell />)}
        />
        <View style={styles.searchView()}>
          <SearchBox 
            leftIcon
            renderLeftIcon={() => (<IcSearch fill={color.iconFill} width={size.moderateScale(22)} height={size.moderateScale(22)} />)}
            placeholder='Search for clothes...'
            rightIcon
            renderRightIcon={() => (<IcMic />)}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.iconView()}>
            <IcFilter />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryView()}>
        <ScrollView 
          style={styles.scrollView()}
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: size.moderateScale(8)}}
        >
          {
            categories.map((cat, index) => {
              const isSelected = selectedCategory === cat;
              return (
                <TouchableOpacity onPress={() => handleCategoryPress(cat)} key={index+cat} activeOpacity={0.8} style={styles.categoryBtn(isSelected)}>
                  <Text style={styles.categoryText(isSelected)}>{cat}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
        </View>
      </View>
    </Screen>
  )
}
