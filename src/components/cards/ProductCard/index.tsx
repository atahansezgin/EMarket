import { Image, Text, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import { Product } from 'types';
import { Star } from 'assets/icons';
import { useAppSelector } from 'store';
import { styles } from './styles';

type ProductCardProps = {
  item: Product;
  onAddToCart: (item: Product) => void;
  onPressProduct: (item: Product) => void;
  onFav: (id: string) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ item, onAddToCart, onPressProduct, onFav }) => {

  const basket = useAppSelector(state => state.basket.data);
  const basketIdList = basket.map(product => product.id);
  const favoriteIdList = useAppSelector(state => state.product.favoritesIdList);

  const isInBasket = useMemo(() => basketIdList.includes(item.id), [basketIdList]);
  const isFav = useMemo(() => favoriteIdList.includes(item.id), [favoriteIdList]);

  const onPress = () => {
    onPressProduct(item);
  };

  const onPressAddToCart = () => {
    onAddToCart(item);
  };

  const onFavorite = () => {
    onFav(item.id);
  };

  return (
    <TouchableOpacity testID='product-card' onPress={onPress} style={styles.container}>
      <Image testID='product-image' style={styles.image} source={{ uri: item.image }} />
      <TouchableOpacity onPress={onFavorite} style={styles.favorite_button}>
        <Star fillOpacity={1} fill={isFav ? "yellow" : "#d1d1d1"} />
      </TouchableOpacity>
      <Text style={styles.price}>
        {item.price} ₺
      </Text>
      <Text style={styles.name}>
        {item.name}
      </Text>
      {!isInBasket &&
        <TouchableOpacity testID='add-to-cart-button' onPress={onPressAddToCart} style={styles.button}>
          <Text style={styles.buttonLabel}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      }
    </TouchableOpacity>
  );
};

export default React.memo(ProductCard);