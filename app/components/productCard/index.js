import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import * as styles from './styles'
import { IcHeart, images, size } from '../../theme'

export const ProductCard = ({
  productImage,
  productTitle,
  salePrice,
  productPrice,
  productDiscount,
  onProductPress,
  onIconPress
}) => {

  return (
    <View style={styles.mainProductWrapper()}>
      <TouchableOpacity activeOpacity={0.8} style={styles.productCardWrapper()} onPress={onProductPress}>
        <View style={styles.productCardImageWrapper()}>
          <Image style={styles.productCardImage()} source={typeof productImage === 'string' ? { uri: productImage } : productImage} />
        </View>
        <View style={styles.productCardDetails()}>
          <Text style={styles.productCardTitle()}>{productTitle}</Text>
          <View style={styles.productPriceView()}>
            <Text style={styles.productCardPrice()}>$ {salePrice ?? productPrice}</Text>
            { salePrice && productDiscount && (<Text style={styles.productCardDiscount()}>-{productDiscount}%</Text>) }
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onIconPress} activeOpacity={0.9} style={styles.floatingButton()}>
        <IcHeart width={size.moderateScale(18)} height={size.moderateScale(18)} />
      </TouchableOpacity>
    </View>
  )
}
