import {View} from 'react-native';
import React, {useState} from 'react';

import * as styles from './styles';
import { Button } from '../../components';
import { color, IcArrowRight, size } from '../../theme';

export const DemoScreen = () => {
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: size.moderateScale(10)}}>
      <Button 
        title='Add to cart'
        activeOpacity={0.5}
        btnOutline={true}
        iconRight
        renderRightIcon={() => (
          <IcArrowRight stroke={color.secondary} width={size.moderateScale(20)} height={size.moderateScale(20)} />
        )}
      />
    </View>
  );
};
