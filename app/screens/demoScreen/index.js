import {View} from 'react-native';
import React, {useState} from 'react';

import * as styles from './styles';
import { InputBox, ProductCard, ProductCardCart, ProductCardSearch } from '../../components';
import { color, IcEye, images, size } from '../../theme';

export const DemoScreen = () => {

  
  return (
    <View style={{flex: 1, backgroundColor: color.primary, alignItems: 'center', justifyContent: 'center', paddingHorizontal: size.moderateScale(10)}}>
      {/* <ProductCardCart
        productImage={images.productCardImage}
        productTitle='Regular Fit Slogan'
        productSize='L'
        productPrice='1244'
        productQuantity='10'
      /> */}
      <ProductCardSearch
        productImage={images.productCardImage}
        productTitle='Regular Fit Slogan'
        productPrice='1244'
      />
    </View>
  );
};
