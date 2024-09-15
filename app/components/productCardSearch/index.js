import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { color, IcArrowRight } from '../../theme'

export const ProductCardSearch = ({
  productImage,
  productTitle,
  salePrice,
  productPrice,
  productDiscount,
  onProductPress
}) => {
  return (
    <View style={styles.mainProductWrapper()}>
      <TouchableOpacity activeOpacity={0.8} onPress={onProductPress} style={styles.productDetailsWrapper()}>
        <View style={styles.productImageWrapper()}>
          <Image style={styles.productCardImage()} source={typeof productImage === 'string' ? { uri: productImage } : productImage} />
        </View>
        <View style={styles.productDetails()}>
          <Text style={styles.productCardTitle()}>{productTitle}</Text>
          <View style={styles.productPriceViewMainWrapper()}>
            <Text style={styles.productCardPrice()}>$ {salePrice ?? productPrice}</Text>
            {salePrice && productDiscount && (<Text style={styles.productCardDiscount()}>-{productDiscount}%</Text>)}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchLinkIcon()}>
        <IcArrowRight stroke={color.secondary} />
      </TouchableOpacity>
    </View>
  )
}
