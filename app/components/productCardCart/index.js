import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import * as styles from './styles'
import { IcDelete, IcMinus, IcPlus } from '../../theme'

export const ProductCardCart = ({
  onProductPress,
  productImage,
  productTitle,
  productSize,
  salePrice,
  productPrice,
  productDiscount,
  productQuantity,
  onDecrementPress,
  onIncrementPress,
  onDeletePress
}) => {
  return (
    <View style={styles.mainProductCardWrapper()}>
      <TouchableOpacity activeOpacity={0.8} style={styles.productCardWrapper()} onPress={onProductPress}>
        <View style={styles.productCardImageWrapper()}>
          <Image style={styles.productCardImage()} source={typeof productImage === 'string' ? { uri: productImage } : productImage} />
        </View>
        <View style={styles.productCardDetails()}>
          <View style={styles.productDetailsWrapper()}>
            <Text style={styles.productCardTitle()}>{productTitle}</Text>
            <Text style={styles.productCardSize()}>Size {productSize}</Text>
          </View>
          <View style={styles.productPriceViewMainWrapper()}>
            <Text style={styles.productCardPrice()}>$ {salePrice ?? productPrice}</Text>
            {salePrice && productDiscount && (<Text style={styles.productCardDiscount()}>-{productDiscount}%</Text>)}
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.quantityCounter()}>
        <TouchableOpacity style={styles.quanitityUpdater()} onPress={onDecrementPress}>
          <IcMinus />
        </TouchableOpacity>
        <Text style={styles.quanitityUpdaterText()}>{productQuantity}</Text>
        <TouchableOpacity style={styles.quanitityUpdater()} onPress={onIncrementPress}>
          <IcPlus />
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.6} onPress={onDeletePress} style={styles.floatingButton()}>
        <IcDelete />
      </TouchableOpacity>
    </View>
  )
}
