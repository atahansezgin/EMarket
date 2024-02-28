import { FlatList, ListRenderItem } from 'react-native';
import React from 'react';
import { BasketItem } from 'types';
import BasketItemCard from 'components/cards/BasketItemCard';
import useBasket from 'hooks/useBasket';

type BasketListProps = {
  data: BasketItem[];
};

const BasketList: React.FC<BasketListProps> = ({ data }) => {
  const { addOrIncreaseProduct, removeOrReduceProduct } = useBasket();

  const renderItem: ListRenderItem<BasketItem> = ({ item }) => <BasketItemCard item={item} onIncrease={addOrIncreaseProduct} onReduce={removeOrReduceProduct} />;
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "#fff" }}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default BasketList;