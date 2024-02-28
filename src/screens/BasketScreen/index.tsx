import React from 'react';
import { useAppSelector } from 'store';
import BasketList from 'components/lists/BasketList';
import { Text, View } from 'react-native';
import { styles } from './styles';

const BasketScreen = () => {
  const basket = useAppSelector(state => state.basket.data);
  const totalPrice = basket.reduce((accumulator, currentValue) => accumulator + (Number(currentValue.price) * Number(currentValue.count)), 0);
  return (
    <View style={styles.container}>
      <BasketList data={basket} />
      <Text style={styles.total}>
        Total : {totalPrice.toFixed(2)} ₺
      </Text>
    </View>
  );
};

export default BasketScreen;