import {View} from 'react-native';
import React, {useState} from 'react';

import * as styles from './styles';
import { InputBox, ProductCard } from '../../components';
import { color, IcEye, size } from '../../theme';

export const DemoScreen = () => {

  
  return (
    <View style={{flex: 1, backgroundColor: color.primary, alignItems: 'center', justifyContent: 'center', paddingHorizontal: size.moderateScale(10)}}>
      <ProductCard />
    </View>
  );
};
