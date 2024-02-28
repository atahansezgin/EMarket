import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import useBasket from 'hooks/useBasket';
import { useAppSelector } from 'store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, SCREENS } from 'navigation/types';
import { styles } from './styles';

const ProductDetailScreen: React.FC<NativeStackScreenProps<RootStackParamList, SCREENS.ProductDetailScreen>> = ({ route }) => {
  const product = route?.params?.item;
  const basket = useAppSelector(state => state.basket.data);
  const isInBasket = basket.map(basketItem => basketItem.id).includes(product.id);
  
  const { addOrIncreaseProduct } = useBasket();
  const onAddToCart = () => addOrIncreaseProduct(product);
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
      />
      <Text style={styles.name}>
        {product.name}
      </Text>
      <Text style={styles.description}>
        {product.description}
      </Text>
      <View style={styles.bottom}>
        <Text style={styles.price}>
          {product.price} ₺
        </Text>
        {!isInBasket &&
          <TouchableOpacity onPress={onAddToCart} style={styles.button}>
            <Text style={styles.buttonLabel}>
              Add to Cart
            </Text>
          </TouchableOpacity>}
      </View>
    </View>
  );
};

export default ProductDetailScreen;