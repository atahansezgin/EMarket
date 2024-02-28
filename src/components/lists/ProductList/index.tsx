import { FlatList, ListRenderItem } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Product } from 'types';
import ProductCard from 'components/cards/ProductCard';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import useBasket from 'hooks/useBasket';
import { RootStackParamList, SCREENS } from 'navigation/types';

type ProductListProps = {
  data: Product[];
  onFavorite: (id: string) => void;
};

const itemsPerLoad = 12;

const ProductList: React.FC<ProductListProps> = ({ data, onFavorite }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { addOrIncreaseProduct } = useBasket();

  const [visibleItems, setVisibleItems] = useState<Product[]>([]);

  useEffect(() => {
    setVisibleItems(data.slice(0, itemsPerLoad));
  }, [data]);

  const loadMore = () => {
    const currentLength = visibleItems.length;
    const newData = data.slice(currentLength, currentLength + itemsPerLoad);
    setVisibleItems(prevData => [...prevData, ...newData]);
  };

  const onPressProduct = (item: Product) => {
    navigation.navigate(SCREENS.ProductDetailScreen, { item });
  };
  const keyExtractor = (item: Product) => item.id;
  const renderItem: ListRenderItem<Product> = ({ item }) => <ProductCard item={item} onAddToCart={addOrIncreaseProduct} onPressProduct={onPressProduct} onFav={onFavorite} />;
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "#fff" }}
      numColumns={2}
      data={visibleItems}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      columnWrapperStyle={{
        justifyContent: "space-around"
      }}
      onEndReachedThreshold={1}
      onEndReached={loadMore}
    />
  );
};

export default React.memo(ProductList);